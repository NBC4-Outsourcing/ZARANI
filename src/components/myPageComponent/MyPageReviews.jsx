import { Link } from 'react-router-dom';
import { getLocalStorageJSON } from 'utils/getLocalStorageJSON';
import { useState } from 'react';
import { getFormattedDate } from 'components/communityComponents/formattedDate';
import Loading from 'components/common/Loading';
import * as MPR from 'components/styles/MyPageReviews';

const MyPageReviews = ({ myReview, isLoading }) => {
  const myPageReviews = getLocalStorageJSON();
  const email = myPageReviews.user.email;

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
          const { id, nickname, content, date, email, marker } = reviews;
          return (
            <Link to="/reviewPage" key={id}>
              <article>
                <section>
                  <div>{marker} </div>
                  <div>{content}</div>
                </section>
                <div>
                  <p>
                    <span>{getFormattedDate(date)}</span>
                  </p>
                  <p>
                    <span>{nickname}</span>
                  </p>
                </div>
              </article>
            </Link>
          );
        })
      ) : (
        <article> 자전거 도로를 이용한 후기를 써주세용 </article>
      )}
    </MPR.MyReviewsSection>
  );
};

export default MyPageReviews;
