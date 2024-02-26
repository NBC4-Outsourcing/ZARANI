import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { downloadImage, getImageUrl, readUserInfo, updateUserInfo, uploadImage } from './myPageSupabase';
import { supabase } from 'api/supabase/supabase';
import useInput from 'hooks/useInput';
import * as MP from 'components/styles/MyPageStyle';
import { useQuery } from 'react-query';
import useSetMutation from 'hooks/useSetMutations';
import defaultImg from 'assets/defaultProfileImage.png';

const MyPageContents = ({ data, isLoading }) => {
  console.log(data);
  const dispatch = useDispatch();
  const { id, email, nickname, avatar, uid } = data || {};
  const [mutation] = useSetMutation(updateUserInfo, 'usersAccounts');
  const [selectImage, setSelectImage, ,] = useInput(avatar);
  const [thumnailImage, setThumnailImage, ,] = useInput(avatar || defaultImg);
  const [isEdit, setIsEdit] = useState(false);
  const [editValue, setEditValue, onChange] = useInput({
    nickname
  });
  const editValueNickname = editValue.nickname || '';

  if (isLoading || !data) return <div>로딩중입니다...</div>;

  // const [downloadImgMutation] = useSetMutation(downloadImage, 'unAuthUserImage');
  const onSubmitHandler = async (e) => {
    e.preventDefault();

    const editSaveCheck = window.confirm('수정내용을 저장하시겠습니까?');
    if (editSaveCheck === false) {
      alert('수정을 취소하셨습니다.');
      console.log(avatar);
      if (selectImage !== thumnailImage) setThumnailImage(avatar);

      console.log(avatar);
      setIsEdit(false);
      return;
    }
    if (selectImage.name === undefined) {
      alert('이미지를 선택해주세요.');
      return;
    }

    if (!selectImage) {
      alert('이미지를 선택해주세요!');
      return;
    }
    if (selectImage) {
      const filePath = `userImage/${uid}`;

      const data = await uploadImage(filePath, selectImage);
      const { data: imageUrl, error } = supabase.storage.from('unAuthUserImage').getPublicUrl(data.path);
      const ImgDbUrl = imageUrl.publicUrl;

      // ex ) https://rtjzvtuqyafegkvoirwc.supabase.co/storage/v…ge/userImage/1d25d250-5dea-47f5-a465-05f74a7bd79d'
      const newData = { id, email, nickname: editValueNickname, avatar: ImgDbUrl, uid };
      await updateUserInfo(newData, id);
      mutation.mutate([newData, id]);
      if (!selectImage) {
        alert('사진을 등록해주세요!');
      } else {
        alert('사진 등록이 완료됐습니다.');
      }
      console.log(ImgDbUrl);
      console.log(id);

      setSelectImage(ImgDbUrl);
      alert('수정이 완료됐습니다.');
      setIsEdit(false);
    }
  };

  // setThumnailImage(ImgDbUrl);
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

  // avatar ? avatar : thumnailImage;
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

// if (selectImage !== thumnailImage) setThumnailImage(avatar || thumnailImage);
// if (selectImage !== thumnailImage) setThumnailImage(avatar || defaultImg);

// 파일명에 해쉬값, => 웹팩, 이미지 요청 => 파라미터
// 주소값으로 캐싱,
// 캐시 방지하는 방법 =>
// -이미지 주소에 특정 해시값.date()
// -옵션 cashe control 사용
// -document.querySelector('section img:nth-child(4)').src = "/ryan.gif?time=" + new Date();
//

//  setThumnailImage(avatar);
// if (selectImage !== thumnailImage) setThumnailImage(avatar ? avatar : thumnailImage);
// if (selectImage !== thumnailImage) setThumnailImage(avatar || thumnailImage);
// useEffect(() => {
//   // avatar가 변경될 때 thumnailImage도 함께 변경되도록 설정
//   setThumnailImage(avatar || defaultImg);
// }, [avatar]);

// useEffect(() => {
//   // 컴포넌트가 unmount될 때 이전에 생성된 이미지 URL 해제
//   return () => {
//     URL.revokeObjectURL(thumnailImage);
//   };
// }, [thumnailImage]);

// useEffect(() => {
//   const ImageInit = async () => {
//     const filePath = `userImage/${uid}`;
//     const data = await uploadImage(filePath, selectImage);
//     const { data: imageUrl, error } = supabase.storage.from('unAuthUserImage').getPublicUrl(data.path);
//     const ImgDbUrl = imageUrl.publicUrl;
//     const newData = { id, email, nickname: editValueNickname, avatar: ImgDbUrl, uid };
//     await updateUserInfo(newData, id);
//     setThumnailImage(ImgDbUrl);
//   };
//   ImageInit();
// }, []);

// useEffect(() => {
//   const mutationData = async () => {
//     if (data) {
//       console.log(avatar);
//       setThumnailImage(avatar);
//     }
//   };
//   mutationData();
// }, [dispatch, data, avatar]);
// 이미지, 닉네임, 내용 DB저장

// const ImgDbUrl = `${imageUrl.data.publicUrl}?t=${new Date().getTime()}`;
// console.log(imageUrl);
// console.log(selectImage);
// console.log(data);
// console.log(ImgDbUrl);
