import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useQuery } from 'react-query';
import { setThumnailImg, setUserInfo } from 'shared/redux/modules/userSlice';
import { readUserInfo } from 'components/myPageComponent/myPageSupabase';
import MyPageReviews from 'components/myPageComponent/MyPageReviews';
import MyPageContents from 'components/myPageComponent/MyPageContents';
import MyPageHeader from 'components/myPageComponent/MyPageHeader';

const MyPage = () => {
  const dispatch = useDispatch();

  const { isLoading, isError, data } = useQuery('user', readUserInfo);
  // console.log(data.avatar);
  // // console.log(data.avatar);
  // dispatch(setUserInfo(data));
  // dispatch(setThumnailImg(data.avatar));
  if (isLoading) return <div>로딩중입니다...</div>;
  if (isError) return <div>오류로 인해 정보를 받아오지 못 하고 있습니다.</div>;

  return (
    <section>
      <MyPageHeader />
      <MyPageContents data={data} />
      <MyPageReviews />
    </section>
  );
};

export default MyPage;
