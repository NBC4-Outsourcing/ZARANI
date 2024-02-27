import MyPageReviews from 'components/myPageComponent/MyPageReviews';
import MyPageContents from 'components/myPageComponent/MyPageContents';
import MyPageHeader from 'components/myPageComponent/MyPageHeader';
import * as MP from 'components/styles/MyPageStyle';
import { useQuery } from 'react-query';
import { readMyReview } from 'components/myPageComponent/myPageSupabase';

const MyPage = () => {
  const { data: myReview, error, isLoading } = useQuery('myReviews', readMyReview);
  return (
    <MP.MyPageContainerSection>
      <MyPageHeader />
      <MyPageContents />
      <MyPageReviews myReview={myReview} isLoading={isLoading} />
    </MP.MyPageContainerSection>
  );
};

export default MyPage;
