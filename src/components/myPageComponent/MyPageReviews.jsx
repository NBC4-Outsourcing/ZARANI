import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import { readMyReview } from './myPageSupabase';
import { getFormattedDate } from 'components/comunityComponents/formattedDate';
import { supabase } from 'api/supabase/supabase';

const MyPageReviews = () => {
  const { data: myReview, error, isLoading } = useQuery('myReviews', readMyReview); //     let reviewArray = [];
  console.log(myReview);
  if (isLoading) <div>정보를 가지고 오는 중입니다..</div>;
  if (error) <div>정보를 가지고 오지 못하고 있습니다.</div>;
  // useEffect(() => {
  //   const readMyReview = async () => {
  //     const { data, error } = await supabase.from('reviewWrite').select('*');
  //     let reviewArray = [];
  //     data.forEach((readItem) => {
  //       reviewArray.push(readItem);
  //     });
  //     setMyReviews(reviewArray);
  //     if (error) {
  //       alert('오류로 인해 정보를 받아오지 못 하고 있습니다.');
  //     }
  //   };
  //   readMyReview();
  // }, []);

  return (
    <article>
      {myReview &&
        myReview.map((reviews) => {
          const { id, nickname, content, date, email } = reviews;
          return (
            <section key={id}>
              <div>도로이름 : 안양천길 </div>
              <div>content: {content}</div>
              <div>{new Date(date).toLocaleDateString()}</div>
            </section>
          );
        })}
    </article>
  );
};

export default MyPageReviews;
