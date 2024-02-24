import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setSelectFile, setThumnailImg, setUserInfo } from 'shared/redux/modules/userSlice';
import * as MP from 'components/styles/MyPageStyle';
import MyPageReviews from 'components/myPageComponent/MyPageReviews';

const MyPage = () => {
  const dispatch = useDispatch();
  const { userId, avatar } = useSelector((store) => store.user.userInfo);
  const [isEdit, setIsEdit] = useState(false);
  const { selectImage, thumnailImage } = useSelector((store) => store.user);
  console.log(selectImage);

  const onChangeImage = (e) => {
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
  return (
    <section>
      <MP.MyPageContentsForm>
        <MP.ImgWrapDiv>
          <MP.ThumnailImg>
            <img src={thumnailImage} alt="기본이미지" />
          </MP.ThumnailImg>
          <div>
            <label htmlFor="imgfileChoice">이미지 등록</label>
          </div>
          <MP.ImgFileInput type="file" accept="image/*" id="imgfileChoice" onChange={onChangeImage} />
        </MP.ImgWrapDiv>
        <div>
          {!isEdit ? (
            <div>
              <p>id : qwer1234</p>
              <p>닉네임 : 보라돌이 </p>
            </div>
          ) : (
            <div>
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
      </MP.MyPageContentsForm>
      <MyPageReviews />
    </section>
  );
};

export default MyPage;
