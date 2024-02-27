import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useQuery } from 'react-query';
import { supabase } from 'api/supabase/supabase';
import { readUserLocalAccount, updateUserAccount, uploadImage } from './myPageSupabase';
import { useNavigate } from 'react-router-dom';
import { getLocalStorageJSON } from 'utils/getLocalStorageJSON';
import { logout } from 'shared/redux/modules/authSlice';
import useInput from 'hooks/useInput';
import defaultImg from 'assets/defaultProfileImage.png';
import Loading from 'components/common/Loading';
import * as MP from 'components/styles/MyPageContentsStyle';

const MyPageContents = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isEdit, setIsEdit] = useState(false);
  const loginState = useSelector((store) => store.auth.loginState);
  const [selectImage, setSelectImage] = useState(defaultImg);
  const [thumnailImage, setThumnailImage] = useState(defaultImg);

  const [userAccount, setUserAccount] = useState();
  const { isLoading, isError, data } = useQuery('usersAccounts', readUserLocalAccount, {
    onSuccess: (data) => {
      const uid = data.user?.id;
      const email = data.user?.email;
      const nickname = data.user?.user_metadata.nickname;
      const avatar = data.user?.user_metadata.avatar;
      const userInfo = {
        uid,
        email,
        nickname,
        avatar
      };
      setUserAccount(userInfo);
      updateUserAccount({ nickname, avatar });
      setThumnailImage(userInfo.avatar);

      if (!storageItem || !uid || !email) {
        console.error('유저정보가 존재하지 않습니다. 로그인해주세요.');
        alert('유저정보가 존재하지 않습니다. 로그인해주세요.');
        dispatch(logout());
        navigate('/login');
      }
    }
  });
  const { email, nickname, avatar, uid } = userAccount || {};
  const [editValue, setEditValue, onChange] = useInput({
    nickname
  });
  const editValueNickname = editValue.nickname || '';
  const storageItem = getLocalStorageJSON();
  const isLogin = loginState;
  // const currUserEmail = storageItem.user.email;
  // const uid = storageItem.user.id;

  if (isLogin === false) {
    dispatch(logout());
    alert('로그인 유저만 사용가능합니다. 로그인 해주세요');
    navigate('/login', { replace: true });
  }

  // 이미지 등록
  const onChangeAddImage = (e) => {
    e.preventDefault();
    if (selectImage === null) return;

    const imgFile = e.target.files[0];
    if (!imgFile) return;
    if (imgFile) {
      setSelectImage(imgFile);
      let image = URL.createObjectURL(imgFile);
      setThumnailImage(image);
    }
  };

  // 브라우져 캐싱문제 해결
  const onSubmitHandler = async (e) => {
    e.preventDefault();
    const editSaveCheck = window.confirm('수정내용을 저장하시겠습니까?');
    if (editSaveCheck === false) {
      alert('수정을 취소하셨습니다.');
      setThumnailImage(avatar);
      setIsEdit(false);
      return;
    }
    if (!selectImage || selectImage.name === undefined) {
      alert('이미지를 선택해주세요.');
      return;
    }
    if (selectImage === null) return;
    // storage 내부 저장할 위치(폴더)를 회원 uid 또는 이메일로 정하고 스토리지에 저장.
    const uuid = crypto.randomUUID();
    const filePath = `userOneImage/${uid}+${uuid}`;
    try {
      const data = await uploadImage(filePath, selectImage);
      const { data: imageUrl } = supabase.storage.from('unAuthUserImage').getPublicUrl(data.path);
      const ImgDbUrl = imageUrl.publicUrl;
      const newData = { email, nickname: editValueNickname, avatar: ImgDbUrl, id: uid };
      await updateUserAccount({ nickname: editValueNickname, avatar: ImgDbUrl });
      setSelectImage(ImgDbUrl);
      setThumnailImage(newData.avatar);
      alert('수정이 완료됐습니다.');
      setIsEdit(false);
    } catch (error) {
      alert('수정이 되지 않았습니다! 다시 해주세용!');
      return;
    }
  };

  // 이미지 편집 모드
  const onEditContentsHandler = (e) => {
    e.preventDefault();
    setIsEdit(true);
    setEditValue({ nickname });
  };
  // 이미지 편집 취소
  const onEditCancelHandler = (e) => {
    e.preventDefault();
    setIsEdit(false);
    if (isEdit && selectImage !== thumnailImage) setThumnailImage(avatar);
  };

  if (isLoading)
    return (
      <div>
        <Loading />
      </div>
    );

  if (isError) return <div> 정보를 받아오는 중에 문제가 발생했습니다.</div>;

  return (
    <MP.MyPageContentsArticle>
      <MP.MyPageContentsForm>
        <MP.ImgWrapDiv>
          <MP.ThumnailImg>
            <img src={thumnailImage} alt="기본이미지" />
          </MP.ThumnailImg>
          <MP.ImgFileInput type="file" accept="image/*" id="imgfileChoice" onChange={onChangeAddImage} />
          {!isEdit ? (
            <div></div>
          ) : (
            <MP.PhotoAddBtn>
              <MP.AddBtnLabel htmlFor="imgfileChoice">이미지 등록</MP.AddBtnLabel>
            </MP.PhotoAddBtn>
          )}
        </MP.ImgWrapDiv>
        <div>
          {!isEdit ? (
            <div>
              <p>
                <span>이메일EMAIL</span>
              </p>
              <p>
                <span>{email}</span>
              </p>
              <p>
                <span>닉네임NICKNAME</span>
              </p>
              <p>
                <span>{nickname}</span>
              </p>
            </div>
          ) : (
            <div>
              <div>
                <p>
                  <span>이메일EMAIL</span>
                </p>
                <p>
                  <span>{email}</span>
                </p>
              </div>
              <label htmlFor="nickname">닉네임NICKNAME</label>
              <div>
                <input
                  type="text"
                  id="nickname"
                  name="nickname"
                  value={editValueNickname}
                  onChange={onChange}
                  minLength={6}
                  maxLength={10}
                  placeholder="닉네임을 적어주세요. (6자~10자 이내)"
                />
              </div>
            </div>
          )}
        </div>
        {!isEdit ? (
          <div>
            <MP.EditBtn onClick={onEditContentsHandler}>수정</MP.EditBtn>
          </div>
        ) : (
          <div>
            <MP.DoneBtn onClick={onSubmitHandler}>완료</MP.DoneBtn>
            <button onClick={onEditCancelHandler}>취소</button>
          </div>
        )}
      </MP.MyPageContentsForm>
    </MP.MyPageContentsArticle>
  );
};

export default MyPageContents;
