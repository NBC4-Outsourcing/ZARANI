import { supabase } from 'api/supabase/supabase';
import { getFormattedDate } from 'components/comunityComponents/formattedDate';
import { ContentsList } from 'components/styles/ReviewStyle';
import React, { useEffect, useState } from 'react';

export const ReviewList = () => {
  // 데이터베이스에 저장된 후기 데이터 저장 state
  const [reviewData, setReviewData] = useState([]);
  const [reviewImg, setReviewImg] = useState();

  // DB에 저장된 후기 데이터 가져오기
  useEffect(() => {
    const fetchData = async () => {
      try {
        let { data: reviewWrite, error } = await supabase.from('reviewWrite').select('*');
        if (!error) {
          console.log('reviewWrite', reviewWrite);
          setReviewData(reviewWrite);
        }
      } catch (error) {
        console.log('error', error);
      }
    };

    // 이미지 불러오기
    const filePath = async () => {
      try {
        const { data, error } = await supabase.storage.from('reviewImage').list('reviewFile', {
          limit: 100,
          offset: 0
          // sortBy: { column: 'name', order: 'asc' },
        });
        if (!error) {
          console.log('이미지 다운로드 성공');
          setReviewImg(data);
        }
      } catch (error) {
        console.log('error', error);
      }
    };

    fetchData();
    filePath();
  }, []);

  // 데이터 수정
  // 데이터 삭제

  return (
    <ContentsList>
      {reviewData?.map((item, idx) => (
        <div key={idx}>
          {console.log('reviewImg', reviewImg)}
          {item.reviewimg && <img src={reviewImg} alt="리뷰 이미지" />} <div>{item.nickname}</div>
          <div>{item.content}</div>
          <div>{getFormattedDate(item.date)}</div>
          <button>수정</button>
          <button>삭제</button>
        </div>
      ))}
    </ContentsList>
  );
};
