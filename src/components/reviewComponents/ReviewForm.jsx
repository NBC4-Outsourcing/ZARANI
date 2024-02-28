import { uuid } from '@supabase/gotrue-js/dist/module/lib/helpers';
import { supabase } from 'api/supabase/supabase';
import check from 'assets/check.gif';
import defaultProfileImage from 'assets/defaultProfileImage.png';
import {
  AddBtn,
  AddBtnDiv,
  AddFormContent,
  AddFormImg,
  AddFormTextarea,
  FormContainer,
  ImgCancelBtn,
  ImgMessage,
  ReviewFormComponentDiv,
  ReviewFormWrapper,
  ReviewNickName
} from 'components/styles/ReviewStyle';
import useInput from 'hooks/useInput';
import { useRef, useState } from 'react';
import { getLocalStorageJSON } from 'utils/getLocalStorageJSON';

const ReviewForm = ({ setReviewData, placename }) => {
  // storage에 파일 객체로 이미지 저장을위한 변수
  const imgRef = useRef(null);
  const contentRef = useRef(null);
  const imgName = uuid();

  // 회원 정보
  const loginData = getLocalStorageJSON();
  const {
    email,
    user_metadata: { avatar, nickname }
  } = loginData.user;

  const [reviewContentInput, , reviewContentHandler, reset] = useInput({
    reviewContent: ''
  });
  const { reviewContent } = reviewContentInput;

  // 이미지 state
  const [addImg, setAddImg] = useState('');

  // 이미지 미리보기 함수
  const previewImg = (e) => {
    const imgFile = e.target.files[0];
    if (imgFile) {
      const imgUrl = URL.createObjectURL(imgFile);
      setAddImg(imgUrl);
    }
  };
  // 이미지 등록 취소
  const addCancel = (e) => {
    e.preventDefault();
    setAddImg(null);
  };

  // DB에 후기 등록
  const addReview = async (e) => {
    e.preventDefault();

    // storage에 이미지 등록
    let storagePath = '';
    if (addImg) {
      const imgPath = imgRef.current.files[0];
      const { data, error } = await supabase.storage
        .from('reviewImage')
        .upload(`reviewFile/files/${email}${imgName}`, imgPath, {
          cacheControl: '3600',
          upsert: false
        });

      if (!error) {
        storagePath = data.path; // 이미지 등록이 성공하면 이미지 경로 저장("reviewFile/files/kim@naver.com06cea4ae-f3e1-4b2f-a00c-9538c8f763d1")
      } else {
        console.error('이미지 등록 실패!', error);
      }
    }
    if (!reviewContent) {
      alert('내용을 입력해주세요');
      contentRef.current.focus();
      return;
    }
    const newReviews = {
      // userId: userData.email,
      marker: placename.placename,
      email,
      nickname,
      avatar,
      content: reviewContent,
      reviewimg: storagePath,
      imageUrl: '' // reviewList component에서 조회 시 url이 들어감
    };

    // 데이터 등록
    const { data, error } = await supabase.from('reviewWrite').insert([newReviews]).select();
    if (data) {
      alert('게시물이 등록 되었습니다.');
      reset();
      setAddImg(null);
      setReviewData((prev) => {
        return [...prev, newReviews];
      });

      return data;
    } else {
      alert('게시물 등록에 실패했습니다.');
      console.error('error', error);
    }
  };

  return (
    <ReviewFormComponentDiv>
      <ReviewFormWrapper>
        <FormContainer onSubmit={addReview}>
          <ReviewNickName>
            <p>{nickname}</p>
          </ReviewNickName>
          <AddFormContent>
            <AddFormImg>
              <label>
                {/* 이미지를 추가하기 전 기본 이미지가 보이고 추가 시 등록한 이미지를 띄움 */}
                <img src={addImg ? addImg : defaultProfileImage} alt="이미지" />
                <ImgMessage>
                  <p>{addImg ? '이미지 변경 시 이미지를 클릭해 주세요' : '이미지 추가 시 이미지를 클릭해 주세요'}</p>
                  <img src={check} />
                </ImgMessage>
                <input ref={imgRef} onChange={previewImg} type="file" accept="image/*" />
              </label>
              {addImg && <ImgCancelBtn onClick={addCancel}>이미지 등록 취소</ImgCancelBtn>}
            </AddFormImg>
            <AddFormTextarea
              value={reviewContent}
              name="reviewContent"
              onChange={reviewContentHandler}
              maxLength={'300'}
              placeholder="최대 300자까지만 입력할 수 있습니다."
              ref={contentRef}
            ></AddFormTextarea>
          </AddFormContent>
          <AddBtnDiv>
            <AddBtn type="submit">등록</AddBtn>
          </AddBtnDiv>
        </FormContainer>
      </ReviewFormWrapper>
    </ReviewFormComponentDiv>
  );
};

export default ReviewForm;
