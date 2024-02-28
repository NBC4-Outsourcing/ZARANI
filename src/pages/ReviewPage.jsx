import ReviewForm from 'components/reviewComponents/ReviewForm';
import ReviewHeader from 'components/reviewComponents/ReviewHeader';
import { ReviewList } from 'components/reviewComponents/ReviewList';
import { ReviewContainer } from 'components/styles/ReviewStyle';
import { useState } from 'react';

export const ReviewPage = () => {
  // 리팩토링 전 UI변경을 위한 임시 state
  const [viewChange, setViewChange] = useState('');

  return (
    <>
      <ReviewHeader />
      <ReviewContainer>
        <ReviewForm setViewChange={setViewChange} />
        <ReviewList viewChange={viewChange} setViewChange={setViewChange} />
      </ReviewContainer>
    </>
  );
};
