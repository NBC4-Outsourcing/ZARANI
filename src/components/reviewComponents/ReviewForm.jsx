import { uuid } from '@supabase/gotrue-js/dist/module/lib/helpers';
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
import useSetMutation from 'hooks/useSetMutations';
import { useRef, useState } from 'react';
import { getLocalStorageJSON } from 'utils/getLocalStorageJSON';
import { insertReview } from './reviewPageSupabase';

const ReviewForm = ({ placename }) => {
  // 회원 정보
  const loginData = getLocalStorageJSON();
  const {
    email,
    user_metadata: { avatar, nickname }
  } = loginData.user;

  // storage에 파일 객체로 이미지 저장을위한 변수
  const imgRef = useRef(null);
  const contentRef = useRef(null);
  const imgName = uuid();
  const [mutaion] = useSetMutation(insertReview, 'reviewList');
  const [reviewContentInput, , reviewContentHandler, reset] = useInput({
    reviewContent: ''
  });
  const { reviewContent } = reviewContentInput;
  const [addImg, setAddImg] = useState('');

  const imgPath = imgRef.current?.files[0];

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

  const addReview = async (e) => {
    e.preventDefault();
    if (!reviewContent) {
      alert('내용을 입력해주세요');
      contentRef.current.focus();
      return;
    }
    mutaion.mutate([placename, imgPath, imgName, reviewContent, reset, setAddImg, email, nickname, avatar]);
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
