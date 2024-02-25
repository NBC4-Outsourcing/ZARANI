import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setThumnailImg, setUserInfo, setSelectFile } from 'shared/redux/modules/userSlice';
import { readUserInfo, updateUserInfo, uploadImage } from './myPageSupabase';
import { supabase } from 'api/supabase/supabase';
import useInput from 'hooks/useInput';
import * as MP from 'components/styles/MyPageStyle';
import { useQuery } from 'react-query';

const MyPageContents = () => {
  const dispatch = useDispatch();
  const { id, email, nickname, avatar, uid } = useSelector((store) => store.user.userInfo);
  const { selectImage, thumnailImage } = useSelector((store) => store.user);
  const [isEdit, setIsEdit] = useState(false);
  const [editValue, setEditValue, onChange, reset] = useInput({
    nickname
  });
  const editValueNickname = editValue.nickname;
  console.log(avatar);
  // dispatch(setUserInfo(data));
  // const currEmail = email ? email : null;
  // const currEmail = email;
  const { isLoading, isError, data } = useQuery('user', readUserInfo);
  console.log(data);
  useEffect(() => {
    if (data) {
      dispatch(setUserInfo(data));
      dispatch(setThumnailImg(data?.avatar));
    }
  }, [dispatch, data]);
  // 이미지, 닉네임, 내용 DB저장
  const onSubmitHandler = async (e) => {
    e.preventDefault();

    const editSaveCheck = window.confirm('수정내용을 저장하시겠습니까?');
    if (editSaveCheck === false) {
      alert('수정을 취소하셨습니다.');
      setIsEdit(false);
      return;
    }

    if (!selectImage) {
      alert('이미지를 선택해주세요!');
    }
    if (selectImage) {
      const filePath = `userImage/${uid}`;
      const data = await uploadImage(filePath, selectImage);
      const imageUrl = supabase.storage.from('unAuthUserImage').getPublicUrl(data.path);
      const ImgDbUrl = imageUrl.data.publicUrl;
      // ex ) https://rtjzvtuqyafegkvoirwc.supabase.co/storage/v…ge/userImage/1d25d250-5dea-47f5-a465-05f74a7bd79d'
      const newData = { id, email, nickname: editValueNickname, avatar: ImgDbUrl, uid };
      console.log(ImgDbUrl);
      await updateUserInfo(newData, id);
      dispatch(setUserInfo(newData));
      dispatch(setSelectFile(ImgDbUrl));
    }
    setIsEdit(false);
  };

  // 이미지 등록
  const onChangeAddImage = (e) => {
    e.preventDefault();
    if (selectImage === null) return;

    const imgFile = e.target.files[0];
    if (!imgFile) return;
    if (imgFile) {
      let image = URL.createObjectURL(imgFile);
      dispatch(setSelectFile(imgFile));
      dispatch(setThumnailImg(image));
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
    if (isEdit && selectImage !== thumnailImage) dispatch(setThumnailImg(avatar));
  };
  const thumnail = avatar ? avatar : thumnailImage;
  return (
    <MP.MyPageContentsForm>
      <MP.ImgWrapDiv>
        <MP.ThumnailImg>
          <img src={thumnailImage} alt="기본이미지" />
        </MP.ThumnailImg>
        <MP.ImgFileInput type="file" accept="image/*" id="imgfileChoice" onChange={onChangeAddImage} />
        {!isEdit ? (
          <div></div>
        ) : (
          <div>
            <label htmlFor="imgfileChoice">이미지 등록</label>
          </div>
        )}
      </MP.ImgWrapDiv>
      <div>
        {!isEdit ? (
          <div>
            <p>Email : {email}</p>
            <p>닉네임 : {nickname} </p>
          </div>
        ) : (
          <div>
            <div>
              <p>Email : {email}</p>
            </div>
            <label htmlFor="nickname"> 닉네임</label>
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
        )}
      </div>
      {!isEdit ? (
        <div>
          <button onClick={onEditContentsHandler}>수정</button>
        </div>
      ) : (
        <div>
          <button onClick={onSubmitHandler}>완료</button>
          <button onClick={onEditCancelHandler}>취소</button>
        </div>
      )}
    </MP.MyPageContentsForm>
  );
};

export default MyPageContents;
