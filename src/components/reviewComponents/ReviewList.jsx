import { supabase } from 'api/supabase/supabase';
import { getFormattedDate } from 'components/communityComponents/formattedDate';
import { ContentsList } from 'components/styles/ReviewStyle';
import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import { getLocalStorageJSON } from 'utils/getLocalStorageJSON';

export const ReviewList = () => {
  const result = getLocalStorageJSON();
  console.log('result', result);

  // 데이터베이스에 저장된 데이터 저장 state
  const [reviewData, setReviewData] = useState();
  const [reviewImg, setReviewImg] = useState();

  // 수정 여부 state
  const [isEditing, setIsEditing] = useState(false);

  // usersAccounts data state
  const [userEmail, setUserEmail] = useState([{}]);
  // userInfo
  useEffect(() => {
    const readUserInfo = async () => {
      const { data, error } = await supabase.from('usersAccounts').select('*');
      setUserEmail(data);
      // console.log('userInfoData', data);

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
    // 게시글 불러오기
    const fetchData = async () => {
      try {
        let { data: reviewWrite, error } = await supabase.from('reviewWrite').select('*');
        if (!error) {
          setReviewData(reviewWrite);
        }
      } catch (error) {
        console.log('reviewDataError', error);
      }
    };

    // 이미지 불러오기
    // usersAccounts테이블의 uid를 정상적으로 받아오지못해 임시로 파일명 지정 나중에 회원 정보 기능이 완성되면 회원 uid를 파일 이름에 넣어줄것
    const filePath = async () => {
      // const { data: imageUrl, error } = supabase.storage.from('reviewImage').getPublicUrl(`reviewFile/${uid}`);
      const { data: imageUrl, error } = supabase.storage.from('reviewImage').getPublicUrl('reviewFile/testImg');
      if (!error) {
        console.log('imageUrlData', imageUrl);
        console.log('이미지 Url 변환 성공', imageUrl);
        setReviewImg(imageUrl.publicUrl);
        console.log('reviewImg', reviewImg);
      } else {
        console.log('imageUrlDataError', error);
      }
    };
    console.log('reviewImg', reviewImg);

    fetchData();
    filePath();
  }, []);

  // 회원 정보가 없어 임시로 usersAccounts table email 사용, 회원 정보 완료 시 회원 email 또는 uid 활용할것
  // 데이터 삭제
  const removeReview = async (email) => {
    if (window.confirm('게시물을 삭제하시겠습니까?')) {
      // 이미지 삭제
      try {
        const { data, error } = await supabase.storage.from('reviewImage').remove('reviewFile/testImg');
        if (!error) {
          console.log('removeReviewData', data);
          console.log('이미지 삭제 성공');
        }
      } catch (error) {
        console.log('이미지 삭제 실패', error);
      }

      // 게시글 삭제
      // 선택한 게시물만 삭제하도록 수정
      try {
        const { error } = await supabase.from('reviewWrite').delete().eq('email', email);
        if (!error) {
          alert('게시물이 삭제되었습니다.');
          console.log('error', error);

          setReviewData((prevData) => prevData.filter((item) => item.email !== email));

          // 이미지도 선택한 이미지와 이름이 같으면 삭제되도록
          setReviewImg(null);
          return;
        }
      } catch (error) {
        console.log('게시물 삭제 실패', error);
      }
    }
  };

  // 데이터 수정
  const modifyReview = () => {};
  return (
    <ContentsList>
      {reviewData?.map((item, idx) => (
        <div key={idx}>
          {console.log('reviewImg', reviewImg)}
          {item.reviewimg && <img src={reviewImg} alt="리뷰 이미지" />}
          <div>{item.nickname}</div>
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
