import { supabase } from 'api/supabase/supabase';
import { getFormattedDate } from 'components/communityComponents/formattedDate';
import { ContentsList } from 'components/styles/ReviewStyle';
import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';

export const ReviewList = () => {
  // 데이터베이스에 저장된 후기 데이터 저장 state
  const [reviewData, setReviewData] = useState();
  const [reviewImg, setReviewImg] = useState();

  // usersAccounts data state
  const [userInfo, setUserInfo] = useState([{}]);

  // userInfo
  useEffect(() => {
    const readUserInfo = async () => {
      const { data, error } = await supabase.from('usersAccounts').select('*');
      setUserInfo(data);
      console.log('data', data);

      if (error) {
        alert('오류로 인해 정보를 받아오지 못 하고 있습니다.');
        return null;
      }
    };

    readUserInfo();
  }, []);
  const [{ uid }] = userInfo;

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
      const { data: imageUrl, error } = supabase.storage.from('reviewImage').getPublicUrl(`reviewFile/${uid}`);
      if (!error) {
        console.log('data', imageUrl);
        console.log('이미지 Url 변환 성공');
        setReviewImg(imageUrl.publicUrl);
      } else {
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
