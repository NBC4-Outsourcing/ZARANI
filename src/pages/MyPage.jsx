import { useQuery } from 'react-query';
import { readMyReview } from 'components/myPageComponent/myPageSupabase';
import MyPageReviews from 'components/myPageComponent/MyPageReviews';
import MyPageContents from 'components/myPageComponent/MyPageContents';
import MyPageHeader from 'components/myPageComponent/MyPageHeader';
import * as MP from 'components/styles/MyPageStyle';

const MyPage = () => {
  const { data: myReview, error, isLoading } = useQuery('myReviews', readMyReview);
  return (
    <MP.MyPageContainerSection>
      <MyPageHeader />

      <MP.ContentsReviewArticle>
        <MyPageContents />
        <MP.UseMyStreetDosDiv>
          <MP.MyStreetsDiv>
            <MP.MyStreetP>
              <span>내가 이용한 자전거 도로 후기들</span>
            </MP.MyStreetP>
          </MP.MyStreetsDiv>
          <MyPageReviews myReview={myReview} isLoading={isLoading} />
        </MP.UseMyStreetDosDiv>
      </MP.ContentsReviewArticle>
    </MP.MyPageContainerSection>
  );
};

export default MyPage;
