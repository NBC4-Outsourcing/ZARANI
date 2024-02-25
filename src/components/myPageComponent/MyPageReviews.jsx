import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import { readMyReview } from './myPageSupabase';
import { getFormattedDate } from 'components/comunityComponents/formattedDate';
import { supabase } from 'api/supabase/supabase';

const MyPageReviews = () => {
  const [myReview, setMyReviews] = useState([]);
  useEffect(() => {
    const readMyReview = async () => {
      const { data, error } = await supabase.from('reviewWrite').select('*');
      let reviewArray = [];
      data.forEach((readItem) => {
        reviewArray.push(readItem);
      });
      setMyReviews(reviewArray);
      if (error) {
        alert('오류로 인해 정보를 받아오지 못 하고 있습니다.');
      }
    };
    readMyReview();
  }, []);
  console.log(myReview);
  // const [id, nickname, content, data, email] = myReview;
  // if (error) <div> 정보를 불러오지 못하고 있습니다.</div>;
  return (
    <article>
      {myReview.map((reviews) => {
        const { id, nickname, content, data, email } = reviews;
        return (
          <section key={id}>
            <div>도로이름 : 안양천길 </div>
            <div>content: {content}</div>
            <div>date : {data}</div>
          </section>
        );
      })}
    </article>
  );
};

export default MyPageReviews;
