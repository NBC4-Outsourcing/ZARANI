import { supabase } from 'api/supabase/supabase';
import Loading from 'components/common/Loading';
import { getUser } from 'components/communityComponents/CommunitySupabase';
import ReviewForm from 'components/reviewComponents/ReviewForm';
import ReviewHeader from 'components/reviewComponents/ReviewHeader';
import { ReviewList } from 'components/reviewComponents/ReviewList';
import { ReviewUpdateForm } from 'components/reviewComponents/ReviewUpdateForm';
import { CommunityBtn, CommunityErrorBackground } from 'components/styles/CommunityStyle';
import { ReviewContainer } from 'components/styles/ReviewStyle';
import { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import { useNavigate, useParams } from 'react-router-dom';

export const ReviewPage = () => {
  // 데이터베이스에 저장된 게시물을 담는 state
  const [reviewData, setReviewData] = useState([]);
  const placename = useParams();
  const { isLoading, data: userData } = useQuery('userData', getUser, {
    refetchOnWindowFocus: false
  });
  const navigate = useNavigate();

  useEffect(() => {
    // 게시글 불러오기
    const fetchData = async () => {
      let { data: reviewWrite, error } = await supabase.from('reviewWrite').select('*');
      if (error) {
        console.log('게시물 조회 실패', error);
      } else {
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

  if (isLoading) {
    return <Loading />;
  }

  if (userData.__isAuthError && !isLoading) {
    return (
      <CommunityErrorBackground>
        <p>로그인이 되어있지 않습니다.</p> <CommunityBtn onClick={() => navigate('/')}>홈으로</CommunityBtn>
      </CommunityErrorBackground>
    );
  }

  return (
    <>
      <ReviewHeader placename={placename} />
      <ReviewContainer>
        <ReviewForm setReviewData={setReviewData} placename={placename} />
        <ReviewList reviewData={reviewData} setReviewData={setReviewData} placename={placename} />
      </ReviewContainer>
    </>
  );
};
