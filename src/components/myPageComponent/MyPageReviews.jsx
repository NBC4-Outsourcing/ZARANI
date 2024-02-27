import { Link } from 'react-router-dom';
import { getLocalStorageJSON } from 'utils/getLocalStorageJSON';
import { useState } from 'react';
import { getFormattedDate } from 'components/communityComponents/formattedDate';

const MyPageReviews = ({ myReview, isLoading }) => {
  const myPageReviews = getLocalStorageJSON();
  const email = myPageReviews.user.email;

  const FilterUserReviews = myReview
    ?.filter((review) => review.email === email)
    .sort((a, b) => new Date(b.date) - new Date(a.date));

  if (isLoading) <div>정보를 가지고 오는 중입니다..</div>;

  if (!myReview) return <div>데이터를 가져오는 중 문제가 발생했습니다.</div>;

  return (
    <article>
      {FilterUserReviews?.length > 0 ? (
        FilterUserReviews?.map((reviews) => {
          const { id, nickname, content, date, email, marker } = reviews;
          return (
            <Link to="/reviewPage" key={id}>
              <section>
                <article>
                  <div>{marker} </div>
                  <div>{content}</div>
                </article>
                <div>
                  <p>
                    <span>{getFormattedDate(date)}</span>
                  </p>
                  <p>
                    <span>{nickname}</span>
                  </p>
                </div>
              </section>
            </Link>
          );
        })
      ) : (
        <section> 자전거 도로를 이용한 후기를 써주세용 </section>
      )}
    </article>
  );
};

export default MyPageReviews;
