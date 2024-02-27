import { useQuery } from 'react-query';
import { readMyReview, readUserAccount, readUserLocalAccount } from './myPageSupabase';
import { Link } from 'react-router-dom';
import { getLocalStorageJSON } from 'utils/getLocalStorageJSON';
import { useEffect, useState } from 'react';

const MyPageReviews = () => {
  const [currUserInfo, setCurrUserInfo] = useState();
  useEffect(() => {
    const currUser = async () => {
      const { data } = await readUserLocalAccount();
      console.log(data);
    };
    currUser();
  }, []);
  const { data: myReview, error, isLoading } = useQuery('myReviews', readMyReview);
  //     let reviewArray = [];
  console.log(myReview);
  if (isLoading) <div>정보를 가지고 오는 중입니다..</div>;
  const FilterUserReviews =
    myReview.filter((review) => review.email === email).sort((a, b) => new Date(b.date) - new Date(a.date)) || [];

  return (
    <article>
      {FilterUserReviews.length > 0 ? (
        FilterUserReviews.map((reviews) => {
          const { id, nickname, content, date, email, marker } = reviews;
          return (
            <Link to="/reviewPage" key={id}>
              <section>
                <div>{marker} </div>
                <div>{content}</div>
                <div>{new Date(date).toLocaleDateString()}</div>
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
