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
import { useEffect, useState } from 'react';
import defaultImage from '../../assets/defaultImage.png';
import useInput from '../../hooks/useInput';
import { supabase } from 'api/supabase/supabase';
import { getFormattedDate } from 'components/comunityComponents/formattedDate';

const ReviewForm = () => {
  const [reviewContentInput, , reviewContentHandler, reset] = useInput({
    reviewContent: ''
  });
  const { reviewContent } = reviewContentInput;

  // 데이터베이스에 저장된 후기 데이터
  const [reviewData, setReviewData] = useState([]);

  // 이미지 state
  const [isImg, setIsImg] = useState(false);
  const [addImg, setAddImg] = useState('');

  // 이미지 미리보기 함수
  const previewImg = (e) => {
    const imgFile = e.target.files[0];
    if (imgFile) {
      const imgUrl = URL.createObjectURL(imgFile);
      setAddImg(imgUrl);
    }
  };
  // 이미지 미리보기 삭제 함수
  const imgRemove = (e) => {
    setAddImg(null);
  };

  // DB에 저장된 후기 데이터 가져오기
  useEffect(() => {
    const fetchData = async () => {
      let { data: reviewWrite, error } = await supabase.from('reviewWrite').select('*');
      if (reviewWrite) {
        console.log('reviewWrite', reviewWrite);
        setReviewData(reviewWrite);
        return reviewWrite;
      } else {
        console.log('error', error);
      }
    };
    fetchData();
  }, []);

  // DB에 후기 등록
  const addReview = async (e) => {
    e.preventDefault();

    const newReviews = {
      email: 'test02',
      nickname: '나나',
      content: reviewContent,
      reviewimg:
        'https://mblogthumb-phinf.pstatic.net/MjAyMDExMjJfMjMw/MDAxNjA2MDIxNzgyMzk1.H09oyhSnEC7iSlVtZ0NZsoP232HxEz_dVpvZCqBWVKAg.zLozKpLG7vaRUzYu2dst60JGAgYkMcDoEsgCp5dPZVsg.JPEG.krysaetal/IMG_7852.jpg?type=w800'
    };
    console.log('content', reviewContent);
    // 데이터 등록
    const { data, error } = await supabase.from('reviewWrite').insert([newReviews]).select();
    if (data) {
      alert('후기가 등록 되었습니다.');
      return data;
    } else {
      alert('후기 등록에 실패했습니다.');
      console.error(error);
    }
    reset();
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
          {reviewData?.map((item, idx) => (
            <div key={idx}>
              <img src={item.reviewimg} alt="리뷰 이미지" />
              <div>{item.nickname}</div>
              <div>{item.content}</div>
              <div>{getFormattedDate(item.date)}</div>
              <button>수정</button>
              <button>삭제</button>
            </div>
          ))}
        </ContentsList>
      </ReviewFormWrapper>
    </div>
  );
};

export default ReviewForm;
