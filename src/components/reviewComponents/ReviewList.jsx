import { supabase } from 'api/supabase/supabase';
import { getFormattedDate } from 'components/comunityComponents/formattedDate';
import { ContentsList } from 'components/styles/ReviewStyle';
import React, { useEffect, useState } from 'react';

export const ReviewList = () => {
  // 데이터베이스에 저장된 후기 데이터 저장 state
  const [reviewData, setReviewData] = useState([]);

  // DB에 저장된 후기 데이터 가져오기
  useEffect(() => {
    const fetchData = async () => {
      let { data: reviewWrite, error } = await supabase.from('reviewWrite').select('*');
      if (reviewWrite) {
        setReviewData(reviewWrite);
        console.log('reviewWrite', reviewWrite);
        return reviewWrite;
      } else {
        console.log('error', error);
      }
    };
    fetchData();
  }, []);
  return (
    <ContentsList>
      {reviewData?.map((item, idx) => (
        <div key={idx}>
          {/* <img src={item.reviewimg && item.reviewimg} alt="리뷰 이미지" /> */}
          <div>{item.nickname}</div>
          <div>{item.content}</div>
          <div>{getFormattedDate(item.date)}</div>
          <button>수정</button>
          <button>삭제</button>
        </div>
      ))}
    </ContentsList>
  );
};
