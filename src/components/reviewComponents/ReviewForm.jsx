import React from 'react';
import reviewTestImg from '../../assets/reviewTestImg.png';
import useInput from '../../hooks/useInput';

const ReviewForm = () => {
  const [reviewContentInput, reviewContentHandler, reset] = useInput({
    reviewConten: ''
  });
  const { reviewConten } = reviewContentInput;

  // 이미지 미리보기 함수
  const previewImg = () => {};

  const reviewForm = (e) => {
    const newReview = {};
  };

  return (
    <div>
      <h1>안양천길</h1>
      <form onSubmit={reviewForm}>
        <p>보라돌이</p>
        <label>
          <img src={reviewTestImg} />
          <input name="reviewImg" type="file" onChange={previewImg} accept="image/*" />
        </label>
        <textarea
          value={reviewContentInput}
          onChange={reviewContentHandler}
          maxLength={'80'}
          placeholder="최대 80자까지만 입력할 수 있습니다."
        ></textarea>
        <button type="submit">등록</button>
      </form>
    </div>
  );
};

export default ReviewForm;
