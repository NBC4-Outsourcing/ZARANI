import ReviewForm from 'components/reviewComponents/ReviewForm';
import ReviewHeader from 'components/reviewComponents/ReviewHeader';
import { ReviewList } from 'components/reviewComponents/ReviewList';
import { ReviewContainer } from 'components/styles/ReviewStyle';
import { useState } from 'react';
import { useParams } from 'react-router-dom';

export const ReviewPage = () => {
  // 리팩토링 전 UI변경을 위한 임시 state
  const [viewChange, setViewChange] = useState('');
  const placename = useParams();
  console.log('placename', placename);

  return (
    <>
      <ReviewHeader placename={placename} />
      <ReviewContainer>
        <ReviewForm setViewChange={setViewChange} />
        <ReviewList viewChange={viewChange} setViewChange={setViewChange} />
      </ReviewContainer>
    </>
  );
};
