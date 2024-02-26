import { supabase } from 'api/supabase/supabase';
import { getFormattedDate } from 'components/communityComponents/formattedDate';
import { ContentsList } from 'components/styles/ReviewStyle';
import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';

export const ReviewList = () => {
  // 데이터베이스에 저장된 데이터 저장 state
  const [reviewData, setReviewData] = useState();
  const [reviewImg, setReviewImg] = useState();

  // usersAccounts data state
  const [userEmail, setUserEmail] = useState([{}]);
  // userInfo
  useEffect(() => {
    const readUserInfo = async () => {
      const { data, error } = await supabase.from('usersAccounts').select('*');
      setUserEmail(data);
      console.log('data', data);

      if (error) {
        alert('오류로 인해 정보를 받아오지 못 하고 있습니다.');
        return null;
      }
    };

    readUserInfo();
  }, []);
  const [userInfo] = userEmail;
  const { email } = userInfo;
  console.log('email', email);
  // 여기까지usersAccounts data state

  // DB에 저장된 후기 데이터 가져오기
  useEffect(() => {
    const fetchData = async () => {
      try {
        let { data: reviewWrite, error } = await supabase.from('reviewWrite').select('*');
        if (!error) {
          setReviewData(reviewWrite);
        }
      } catch (error) {
        console.log('error', error);
      }
    };

    // 이미지 불러오기
    // usersAccounts테이블의 uid를 정상적으로 받아오지못해 임시로 파일명 지정 나중에 회원 정보 기능이 완성되면 회원 uid를 파일 이름에 넣어줄것
    const filePath = async () => {
      // const { data: imageUrl, error } = supabase.storage.from('reviewImage').getPublicUrl(`reviewFile/${uid}`);
      const { data: imageUrl, error } = supabase.storage.from('reviewImage').getPublicUrl('reviewFile/testImg');
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

  // 회원 정보가 없어 임시로 usersAccounts table email 사용, 회원 정보 완료 시 회원 email 또는 uid 활용할것
  // 데이터 삭제
  const removeReview = async (email) => {
    if (window.confirm('게시물을 삭제하시겠습니까?')) {
      try {
        const { error } = await supabase.from('reviewWrite').delete().eq('email', email);
        if (!error) {
          alert('게시물이 삭제되었습니다.');
          console.log('error', error);
        }
      } catch (error) {
        console.log('게시물 삭제 실패', error);
      }
    }
  };

  return (
    <ContentsList>
      {reviewData?.map((item, idx) => (
        <div key={idx}>
          {console.log('reviewImg', reviewImg)}
          {item.reviewimg && <img src={reviewImg} alt="리뷰 이미지" />} <div>{item.nickname}</div>
          <div>{item.content}</div>
          <div>{getFormattedDate(item.date)}</div>
          <button>수정</button>
          <button
            onClick={() => {
              removeReview(item.email);
            }}
          >
            삭제
          </button>
        </div>
      ))}
    </ContentsList>
  );
};
