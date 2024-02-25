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
import { useState } from 'react';
import defaultImage from '../../assets/defaultImage.png';
import useInput from '../../hooks/useInput';

const ReviewForm = () => {
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
    }
  };
  // 이미지 등록 취소
  const addCancell = (e) => {
    e.preventDefault();
    setAddImg(null);
    setIsImg(false);
  };

  // DB에 후기 등록
  const addReview = async (e) => {
    e.preventDefault();

    const newReviews = {
      email: 'test02',
      nickname: '나나',
      content: reviewContent,
      reviewimg: addImg ? addImg : null
    };
    console.log('reviewimg', addImg);

    // 데이터 등록
    const { data, error } = await supabase.from('reviewWrite').insert([newReviews]).select();
    if (!error) {
      alert('후기가 등록 되었습니다.');
      reset();
      setAddImg(null);
      setIsImg(false);
      return data;
    } else {
      alert('후기 등록에 실패했습니다.');
      console.error(error);
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
                  <input onChange={previewImg} type="file" accept="image/*" />
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
