import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setUserInfo } from 'shared/redux/modules/userSlice';
import MyPageReviews from 'components/myPageComponent/MyPageReviews';
import { readUserInfo } from 'components/myPageComponent/myPageSupabase';
import MyPageContents from 'components/myPageComponent/MyPageContents';
import MyPageHeader from 'components/myPageComponent/MyPageHeader';

const MyPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const userInfo = async () => {
      const userDb = await readUserInfo();
      userDb.forEach((user) => {
        dispatch(setUserInfo(user));
      });
    };
    userInfo();
  }, [dispatch]);

  return (
    <section>
      <MyPageHeader />
      <MyPageContents />

      <MyPageReviews />
    </section>
  );
};

export default MyPage;
