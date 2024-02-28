import { supabase } from 'api/supabase/supabase';
import ReviewForm from 'components/reviewComponents/ReviewForm';
import ReviewHeader from 'components/reviewComponents/ReviewHeader';
import { ReviewList } from 'components/reviewComponents/ReviewList';
import { ReviewUpdateForm } from 'components/reviewComponents/ReviewUpdateForm';
import { ReviewContainer } from 'components/styles/ReviewStyle';
import { useEffect, useState } from 'react';

export const ReviewPage = () => {
  // 데이터베이스에 저장된 게시물을 담는 state
  const [reviewData, setReviewData] = useState([]);

  useEffect(() => {
    // 게시글 불러오기
    const fetchData = async () => {
      let { data: reviewWrite, error } = await supabase.from('reviewWrite').select('*');
      if (error) {
        console.log('게시물 조회 실패', error);
      } else {
        console.log('게시물 조회 성공', reviewWrite);

        // 이미지 불러오기
        const reviewsWriteData = reviewWrite.map((item) => {
          const imgUrl = supabase.storage.from('reviewImage').getPublicUrl(item.reviewimg);
          return { ...item, imageUrl: imgUrl.data.publicUrl };
        });
        setReviewData(reviewsWriteData);
      }
    };

    fetchData();
  }, []);
  console.log('reviewData', reviewData);

  return (
    <>
      <ReviewHeader />
      <ReviewContainer>
        <ReviewForm setReviewData={setReviewData} />
        <ReviewList reviewData={reviewData} setReviewData={setReviewData} />
      </ReviewContainer>
    </>
  );
};
