import Loading from 'components/common/Loading';
import { getUser } from 'components/communityComponents/CommunitySupabase';
import ReviewForm from 'components/reviewComponents/ReviewForm';
import ReviewHeader from 'components/reviewComponents/ReviewHeader';
import { ReviewList } from 'components/reviewComponents/ReviewList';
import { CommunityBtn, CommunityErrorBackground } from 'components/styles/CommunityStyle';
import { ReviewContainer } from 'components/styles/ReviewStyle';
import { useQuery } from 'react-query';
import { useNavigate, useParams } from 'react-router-dom';

export const ReviewPage = () => {
  const placename = useParams();
  const { isLoading, data: userData } = useQuery('userData', getUser, {
    refetchOnWindowFocus: false
  });
  const navigate = useNavigate();

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
        <ReviewForm placename={placename} />
        <ReviewList placename={placename} userData={userData} />
      </ReviewContainer>
    </>
  );
};
