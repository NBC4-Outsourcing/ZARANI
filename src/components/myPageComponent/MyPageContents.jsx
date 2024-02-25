import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { settingSelectFile, setThumnailImg, setUserInfo, setSelectFile } from 'shared/redux/modules/userSlice';
import * as MP from 'components/styles/MyPageStyle';
import { supabase } from 'api/supabase/supabase';
import useInput from 'hooks/useInput';
import { updateUserInfo } from './myPageSupabase';

const MyPageContents = () => {
  const dispatch = useDispatch();
  const { id, email, nickname, avatar, uid } = useSelector((store) => store.user.userInfo);
  const { selectImage, thumnailImage } = useSelector((store) => store.user);
  const [isEdit, setIsEdit] = useState(false);
  const [editValue, setEditValue, onChange, reset] = useInput({
    nickname
  });
  console.log(avatar);
  console.log(selectImage);
  const editValueNickname = editValue.nickname;
  // const currEmail = email ? email : null;
  const currEmail = email;
  // 이미지, 닉네임, 내용 DB저장
  const onSubmitHandler = async (e) => {
    e.preventDefault();
    const fileExt = selectImage.split('.').pop();
    console.log(fileExt);
    const editSaveCheck = window.confirm('수정내용을 저장하시겠습니까?');
    if (editSaveCheck === false) {
      alert('수정을 취소하셨습니다.');
      setIsEdit(false);
      return;
    }
    if (!selectImage) {
      alert('이미지를 선택해주세요!');
    }
    const filePath = `${uid}/${selectImage}`;
    try {
      const { data, error } = await supabase.storage.from('unAuthUserImage').upload(filePath, selectImage);
      alert('수정이 완료됐습니다.!');
      console.log(error);
      if (error) {
        alert('파일이 업로드 되지 않았어용.');
        return;
      }

      const imageUrl = supabase.storage.from('userImage').getPublicUrl(data.path);
      console.log(imageUrl.data.publicUrl);
      // dispatch(settingSelectFile(res.data.publicUrl));
    } catch (error) {
      console.log(error);
    }

    dispatch(setUserInfo({ nickname: editValueNickname, avatar: selectImage }));
    updateUserInfo({ nickname: editValueNickname, avatar: selectImage }, id);
  };

  // 이미지 등록
  const onChangeAddImage = (e) => {
    e.preventDefault();
    if (selectImage === null) return;
    dispatch(setUserInfo({ avata: selectImage }));

    if (!e.target.files) return;

    const imgFile = e.target.files[0];
    console.log(imgFile);
    if (imgFile) {
      let image = URL.createObjectURL(imgFile);
      dispatch(setSelectFile(image));
      dispatch(setThumnailImg(image));
    }
  };
  // 이미지 편집 모드
  const onEditContentsHandler = (e) => {
    e.preventDefault();
    setIsEdit(true);
    setEditValue({ nickname });
    // dispatch(setThumnailImg(selectImage));
  };
  // 이미지 편집 취소
  const onEditCancelHandler = (e) => {
    e.preventDefault();
    setIsEdit(false);
    if (isEdit && selectImage !== thumnailImage) dispatch(setThumnailImg(avatar));
  };
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
