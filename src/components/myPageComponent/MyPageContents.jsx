import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setSelectFile, setThumnailImg, setUserInfo } from 'shared/redux/modules/userSlice';
import * as MP from 'components/styles/MyPageStyle';
import { supabase } from 'api/supabase/supabase';

const MyPageContents = () => {
  const dispatch = useDispatch();
  const { id, email, nickname, avatar, uid } = useSelector((store) => store.user.userInfo);
  const [isEdit, setIsEdit] = useState(false);
  const { selectImage, thumnailImage } = useSelector((store) => store.user);

  const currEmail = email ? email : null;
  // 이미지, 닉네임, 내용 DB저장
  const onSubmitHandler = async () => {
    if (selectImage) {
      try {
        const { data, error } = await supabase.storage
          .from('userImage')
          .upload(`${email}/${uid}`, selectImage, { cacheControl: '3600', upsert: false });

        alert('수정이 완료됐습니다.!');
      } catch (error) {
        alert('오류가 발생했습니다.');
      }
    }
  };

  // 이미지 등록
  const onChangeAddImage = (e) => {
    e.preventDefault();
    if (selectImage === null) return;
    dispatch(setUserInfo({ avata: selectImage }));
    if (!e.target.files) return;

    const imgFile = e.target.files[0];
    if (imgFile) {
      let image = window.URL.createObjectURL(imgFile);
      dispatch(setSelectFile(image));
      dispatch(setThumnailImg(image));
    }
  };
  // 이미지 편집 모드
  const onEditImgHandler = (e) => {
    e.preventDefault();
    setIsEdit(true);
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
          <img src={avatar ? avatar : thumnailImage} alt="기본이미지" />
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
              minLength={6}
              maxLength={10}
              placeholder="닉네임을 적어주세요. (6자~10자 이내)"
            />
          </div>
        )}
      </div>
      {!isEdit ? (
        <div>
          <button onClick={onEditImgHandler}>수정</button>
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
