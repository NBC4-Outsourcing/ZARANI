import ReviewForm from 'components/reviewComponents/ReviewForm';
import { ReviewList } from 'components/reviewComponents/ReviewList';
import React from 'react';

export const ReviewPage = () => {
  return (
    <>
      <ReviewForm />
      <ReviewList />
    </>
  );
};
