import {
  AddFormContent,
  AddFormImg,
  AddFormTextarea,
  AddImgText,
  ContentsList,
  FormContainer,
  ReviewFormWrapper,
  ReviewHeader
} from 'components/styles/ReviewStyle';
import { useState } from 'react';
import imageFrame from '../../assets/imageFrame.png';
import useInput from '../../hooks/useInput';
import { supabase } from 'api/supabase/supabase';

const ReviewForm = () => {
  const [reviewContentInput, reviewContentHandler, reset] = useInput({
    reviewContent: ''
  });
  const { reviewContent } = reviewContentInput;

  const [isImg, setIsImg] = useState(false);
  const [addImg, setaddImg] = useState('');

  // 이미지 미리보기 함수
  const previewImg = (e) => {
    const imgFile = e.target.files[0];
    if (imgFile) {
      const imgUrl = URL.createObjectURL(imgFile);
      return setaddImg(imgUrl);
    }
  };
  // 이미지 미리보기 삭제 함수
  const imgRemove = (e) => {
    setaddImg(null);
  };

  const reviewForm = (e) => {
    e.preventDefault();
    const newReview = {
      nickname: '보라돌이',
      userId: 'test02',
      content: reviewContent
    };
  };

  const getReviews = async () => {
    let { data: reviewWrite, error } = await supabase.from('reviewWrite').select('date');
  };

  return (
    <div>
      <ReviewHeader>
        <h1>안양천길</h1>
      </ReviewHeader>
      <ReviewFormWrapper>
        <FormContainer onSubmit={reviewForm}>
          <p>보라돌이</p>
          <AddFormContent>
            {/* isImg의 기본값은 false 텍스트 클릭 시 아래 파일 input이 보인다  */}
            {isImg ? null : <AddImgText onClick={() => setIsImg(true)}>이미지 추가</AddImgText>}
            {isImg && (
              <AddFormImg>
                <label>
                  {/* 이미지를 추가하기 전 기본 이미지가 보이고 추가 시 등록한 이미지를 띄움 */}
                  <img src={addImg ? addImg : imageFrame} alt="이미지" />
                  <input onChange={previewImg} type="file" accept="image/*" />
                </label>
                <button onClick={imgRemove}>이미지 삭제</button>
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
        {/*  */}
        {/* 조회 목록 테스트용 */}
        <ContentsList>
          <div>안양천 좋아요</div>
          <div>안양천 좋아요</div>
          <div>안양천 좋아요</div>
        </ContentsList>
      </ReviewFormWrapper>
    </div>
  );
};

export default ReviewForm;
