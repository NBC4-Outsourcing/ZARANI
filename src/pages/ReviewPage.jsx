import ReviewForm from 'components/reviewComponents/ReviewForm';
import { ReviewList } from 'components/reviewComponents/ReviewList';
import { ReviewContainer } from 'components/styles/ReviewStyle';
import React from 'react';

export const ReviewPage = () => {
  return (
    <ReviewContainer>
      <ReviewForm />
      <ReviewList />
    </ReviewContainer>
  );
};
