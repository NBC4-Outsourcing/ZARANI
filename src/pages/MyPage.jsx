import MyPageReviews from 'components/myPageComponent/MyPageReviews';
import MyPageContents from 'components/myPageComponent/MyPageContents';
import MyPageHeader from 'components/myPageComponent/MyPageHeader';
import * as MP from 'components/styles/MyPageStyle';

const MyPage = () => {
  return (
    <MP.MyPageContainerSection>
      <MyPageHeader />
      <MyPageContents />
      <MyPageReviews />
    </MP.MyPageContainerSection>
  );
};

export default MyPage;
