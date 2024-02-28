import { ReviewHeaderDiv } from 'components/styles/ReviewStyle';
import * as MPH from 'components/styles/MyPageHeaderStyle';
import * as RV from 'components/styles/ReviewStyle';

const ReviewHeader = ({ placename }) => {
  const headerName = placename.placename;
  return (
    <>
      <ReviewHeaderDiv>
        <MPH.HeaderNav>
          <MPH.HomeLink to="/">홈으로</MPH.HomeLink>
          <RV.Title>{<h1>{headerName}</h1>}</RV.Title>
          <div style={{ fontSize: '1.2rem' }}>자전거 도로 후기</div>
        </MPH.HeaderNav>
      </ReviewHeaderDiv>
    </>
  );
};

export default ReviewHeader;
