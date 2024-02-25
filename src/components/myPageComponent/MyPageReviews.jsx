import React from 'react';
import { useQuery } from 'react-query';
import { readMyReview } from './myPageSupabase';
import { getFormattedDate } from 'components/comunityComponents/formattedDate';

const MyPageReviews = () => {
  const { isLoading, error, data: myReview } = useQuery('reviewWrite', readMyReview);
  console.log(myReview);
  if (error) <div> 정보를 불러오지 못하고 있습니다.</div>;
  return (
    <article>
      {myReview.map((reviews) => {
        const { id, nickname, content, data, email } = reviews;
        return (
          <section key={id}>
            <div>도로이름 : 안양천길 </div>
            <div>content: {content}</div>
            <div>date : {new Date(data).toISOString()}</div>
          </section>
        );
      })}
    </article>
  );
};

export default MyPageReviews;
