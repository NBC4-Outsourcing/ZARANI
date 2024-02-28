import { getLocalStorageJSON } from 'utils/getLocalStorageJSON';
import { getFormattedDate } from 'components/communityComponents/formattedDate';
import Loading from 'components/common/Loading';
import * as MPR from 'components/styles/MyPageReviews';

const MyPageReviews = ({ myReview, isLoading }) => {
  const myPageReviews = getLocalStorageJSON();
  const email = myPageReviews.user?.email;

  const FilterUserReviews = myReview
    ?.filter((review) => review.email === email)
    .sort((a, b) => new Date(b.date) - new Date(a.date));

  if (isLoading)
    return (
      <div>
        <Loading />
      </div>
    );
  if (!myReview) return <div>데이터를 가져오는 중 문제가 발생했습니다.</div>;

  return (
    <MPR.MyReviewsSection>
      {FilterUserReviews?.length > 0 ? (
        FilterUserReviews?.map((reviews) => {
          const { id, nickname, content, date, marker } = reviews;
          return (
            <MPR.MoveLink to="/reviewPage" key={id}>
              <MPR.StreetArticle>
                <MPR.StreetNameDateDiv>
                  <MPR.StreetNamP>
                    <span>&#91;&nbsp;{marker}&nbsp;&#93;</span>
                  </MPR.StreetNamP>
                  <p>
                    <span>{getFormattedDate(date)}</span>
                  </p>
                </MPR.StreetNameDateDiv>

                <MPR.MyReviewContentDiv>
                  <p>
                    <span>{content}</span>
                  </p>
                </MPR.MyReviewContentDiv>

                <MPR.ReviewNicknameP>
                  <span>{nickname}</span>
                </MPR.ReviewNicknameP>
              </MPR.StreetArticle>
            </MPR.MoveLink>
          );
        })
      ) : (
        <MPR.MyReviewsArticle> 내가 공유한 자전거 도로 후기 </MPR.MyReviewsArticle>
      )}
    </MPR.MyReviewsSection>
  );
};

export default MyPageReviews;
