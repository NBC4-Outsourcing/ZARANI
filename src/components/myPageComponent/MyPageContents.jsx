import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { readUserInfo, updateUserInfo, uploadImage } from './myPageSupabase';
import { supabase } from 'api/supabase/supabase';
import useInput from 'hooks/useInput';
import * as MP from 'components/styles/MyPageStyle';
// import { useQuery } from 'react-query';
import useSetMutation from 'hooks/useSetMutations';
import defaultImg from 'assets/defaultImage.png';

const MyPageContents = ({ data }) => {
  const dispatch = useDispatch();
  const { id, email, nickname, avatar, uid } = data;
  console.log(data);
  const [selectImage, setSelectImage, ,] = useInput(defaultImg);
  const [thumnailImage, setThumnailImage, ,] = useInput(avatar || defaultImg);
  const [isEdit, setIsEdit] = useState(false);
  const [editValue, setEditValue, onChange] = useInput({
    nickname
  });
  const editValueNickname = editValue.nickname;

  useEffect(() => {
    const mutationData = async () => {
      if (data) {
        await updateUserInfo(data, id);
        setThumnailImage(avatar);
      }
    };
    mutationData();
  }, [dispatch, data, avatar, id]);
  // 이미지, 닉네임, 내용 DB저장

  const [mutation] = useSetMutation(updateUserInfo, 'user');
  const onSubmitHandler = async (e) => {
    e.preventDefault();

    const editSaveCheck = window.confirm('수정내용을 저장하시겠습니까?');
    if (editSaveCheck === false) {
      alert('수정을 취소하셨습니다.');
      if (selectImage !== thumnailImage) setThumnailImage(avatar || defaultImg);
      setIsEdit(false);
      return;
    }

    if (!selectImage) {
      alert('이미지를 선택해주세요!');
      return;
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
      mutation.mutate(newData);
      setSelectImage(ImgDbUrl);
      // setThumnailImage(selectImage);
      alert('수정이 완료됐습니다.');
      setIsEdit(false);
    }
  };

  // 이미지 등록
  const onChangeAddImage = (e) => {
    e.preventDefault();
    if (selectImage === null) return;

    const imgFile = e.target.files[0];
    if (!imgFile) return;
    if (imgFile) {
      let image = URL.createObjectURL(imgFile);
      setSelectImage(imgFile);
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
    //  setThumnailImage(avatar);
    if (selectImage !== thumnailImage) setThumnailImage(avatar || defaultImg);
    // if (isEdit && selectImage !== thumnailImage) setThumnailImage(avatar);
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
