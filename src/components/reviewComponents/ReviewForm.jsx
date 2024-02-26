import { supabase } from 'api/supabase/supabase';
import {
  AddFormContent,
  AddFormImg,
  AddFormTextarea,
  AddImgText,
  FormContainer,
  ReviewFormWrapper,
  ReviewHeader
} from 'components/styles/ReviewStyle';
import { useEffect, useRef, useState } from 'react';
import defaultImage from '../../assets/defaultImage.png';
import useInput from '../../hooks/useInput';
import { useQuery } from 'react-query';
import { readUserInfo } from 'components/myPageComponent/myPageSupabase';

const ReviewForm = () => {
  // // userInfo
  // const { isLoading, isError, data } = useQuery('usersAccounts', readUserInfo);

  // console.log('data', data);

  // // [{}] 이런식으로 배열 안에 객체가 있을 경우 구조분해를 위해 배열안에 데이터를 넣어서 배열을 열어주고, 객체를 구조분해하면 된다 => 배열 구조분해
  // const [reviewData] = data;
  // console.log('object', reviewData);

  // const { email, nickname, avatar, uid } = reviewData;
  // console.log('email, nickname, avatar, uid', email, nickname, avatar, uid);
  // // 여기까지 userInfo

  // usersAccounts data state
  const [userInfo, setUserInfo] = useState([{}]);

  // userInfo
  useEffect(() => {
    const readUserInfo = async () => {
      const { data, error } = await supabase.from('usersAccounts').select('*');
      setUserInfo(data);
      console.log('data', data);

      if (error) {
        alert('오류로 인해 정보를 받아오지 못 하고 있습니다.');
        return null;
      }
    };

    readUserInfo();
  }, []);
  const [{ email, nickname, avatar, uid }] = userInfo;
  // 여기까지usersAccounts data

  const imgRef = useRef(null);

  const [reviewContentInput, , reviewContentHandler, reset] = useInput({
    reviewContent: ''
  });
  const { reviewContent } = reviewContentInput;

  // 이미지 state
  const [isImg, setIsImg] = useState(false);
  const [addImg, setAddImg] = useState('');

  // 이미지 미리보기 함수
  const previewImg = (e) => {
    const imgFile = e.target.files[0];
    if (imgFile) {
      const imgUrl = URL.createObjectURL(imgFile);
      setAddImg(imgUrl);
    } else {
      console.log('이미지 파일이 선택되지 않았습니다');
    }
  };
  // 이미지 등록 취소
  const addCancell = (e) => {
    e.preventDefault();
    setAddImg(null);
    setIsImg(false);
  };

  // 회원정보만 임시로 usersAccounts 테이블 데이터 사용
  // DB에 후기 등록
  const addReview = async (e) => {
    e.preventDefault();

    // storage에 이미지 등록
    if (addImg) {
      const imgPath = imgRef.current.files[0];

      // 파일 이름 중복으로 이미지 1개 이상 등록 불가
      // usersAccounts테이블의 uid를 정상적으로 받아오지못해 임시로 파일명 지정 나중에 회원 정보 기능이 완성되면 회원 uid를 파일 이름에 넣어줄것
      // const { data, error } = await supabase.storage.from('reviewImage').upload(`reviewFile/${uid}`, imgPath, {
      const { data, error } = await supabase.storage.from('reviewImage').upload('reviewFile/testImg', imgPath, {
        cacheControl: '3600',
        upsert: false
      });
      console.log('data', data);
      console.log('addImg', addImg);

      if (!error) {
        console.log('data', data);
      } else {
        console.error('error', error);
      }
    }

    const newReviews = {
      marker: '안양천길',
      email,
      nickname,
      avatar,
      content: reviewContent,
      reviewimg: addImg ? addImg : null
    };
    console.log('reviewimg', addImg);

    // 데이터 등록
    const { data, error } = await supabase.from('reviewWrite').insert([newReviews]).select();
    if (data) {
      alert('게시물이 등록 되었습니다.');
      reset();
      setAddImg(null);
      setIsImg(false);
      return data;
    } else {
      alert('게시물 등록에 실패했습니다.');
      console.error('error', error);
    }
  };

  return (
    <div>
      <ReviewHeader>
        <h1>안양천길</h1>
      </ReviewHeader>
      <ReviewFormWrapper>
        <FormContainer onSubmit={addReview}>
          <p>보라돌이</p>
          <AddFormContent>
            {/* isImg의 기본값은 false 텍스트 클릭 시 아래 파일 input이 보인다  */}
            {isImg ? null : <AddImgText onClick={() => setIsImg(true)}>이미지 추가</AddImgText>}
            {isImg && (
              <AddFormImg>
                <label>
                  {/* 이미지를 추가하기 전 기본 이미지가 보이고 추가 시 등록한 이미지를 띄움 */}
                  <img src={addImg ? addImg : defaultImage} alt="이미지" />
                  <p>{addImg ? '이미지 변경 시 이미지를 클릭해 주세요' : '이미지 추가 시 이미지를 클릭해 주세요'}</p>
                  <input ref={imgRef} onChange={previewImg} type="file" accept="image/*" />
                </label>
                <button onClick={addCancell}>이미지 등록 취소</button>
              </AddFormImg>
            )}
            <AddFormTextarea
              value={reviewContent}
              name="reviewContent"
              onChange={reviewContentHandler}
              maxLength={'80'}
              placeholder="최대 80자까지만 입력할 수 있습니다."
            ></AddFormTextarea>
          </AddFormContent>
          <button type="submit">등록</button>
        </FormContainer>
      </ReviewFormWrapper>
    </div>
  );
};

export default ReviewForm;
