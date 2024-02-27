import { supabase } from 'api/supabase/supabase';
import { getFormattedDate } from 'components/communityComponents/formattedDate';
import { ContentsList } from 'components/styles/ReviewStyle';
import { useEffect, useState } from 'react';

export const ReviewList = () => {
  // 데이터베이스에 저장된 데이터 저장 state
  const [reviewData, setReviewData] = useState([]);

  // 수정 여부 state
  const [isEditing, setIsEditing] = useState(false);

  // DB에 저장된 데이터 가져오기
  useEffect(() => {
    // 게시글 불러오기
    const fetchData = async () => {
      let { data: reviewWrite, error } = await supabase.from('reviewWrite').select('*');
      console.log('reviewWrite', reviewWrite);
      if (error) {
        console.log('게시물 조회 실패', error);
      } else {
        console.log('게시물 조회 성공', reviewWrite);
        setReviewData(reviewWrite);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    // // 이미지 목록 조회?
    const filePath = async () => {
      try {
        const { data, error } = await supabase.storage.from('reviewImage').list('reviewFile/files', {
          limit: 100, // 가져올 파일 개수 제한 (최대 100개)
          offset: 0 // 가져올 파일의 오프셋
          // sortBy: { column: 'name', order: 'asc' }, // 파일 이름을 기준으로 정렬할 경우 추가
        });

        if (error) {
          console.log('이미지 조회 실패', error);
        }
        console.log('이미지 조회 성공', data);
      } catch (error) {
        console.log(error);
      }
    };
    filePath();
  }, []);

  // 데이터 삭제
  const removeReview = async (email, reviewimg) => {
    if (window.confirm('게시물을 삭제하시겠습니까?')) {
      try {
        const { data, error } = await supabase.storage.from('reviewImage').remove(`reviewFile/files/`);
        if (!error) {
          console.log('이미지 삭제 성공', data);
        }
      } catch (error) {
        console.log('이미지 삭제 실패', error);
      }
      // 게시글 삭제
      // 선택한 게시물만 삭제하도록 수정
      try {
        const { error } = await supabase.from('reviewWrite').delete().eq('iemaild', email);
        if (!error) {
          alert('게시물이 삭제되었습니다.');
          console.log('게시물 삭제 성공', error);
          return;
        }
      } catch (error) {
        console.log('게시물 삭제 실패', error);
      }
    }
  };

  // 데이터 수정
  // const modifyReview = () => {};

  return (
    <ContentsList>
      {reviewData?.map((item) => {
        return (
          <div key={item.id}>
            {item.reviewimg && <img src={item.reviewimg} alt="리뷰 이미지" />}
            <div>{item.nickname}</div>
            <div>{item.content}</div>
            <div>{getFormattedDate(item.date)}</div>
            <button>수정</button>
            <button
              onClick={() => {
                removeReview(item.email, item.reviewimg);
              }}
            >
              삭제
            </button>
          </div>
        );
      })}
    </ContentsList>
  );
};
