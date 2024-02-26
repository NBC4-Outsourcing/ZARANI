import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useQuery } from 'react-query';
import { readUserInfo } from 'components/myPageComponent/myPageSupabase';
import MyPageReviews from 'components/myPageComponent/MyPageReviews';
import MyPageContents from 'components/myPageComponent/MyPageContents';
import MyPageHeader from 'components/myPageComponent/MyPageHeader';
import Loading from 'components/common/Loading';

const MyPage = () => {
  const data = {
    id: '1',
    nickname: '보라돌이',
    email: '1234@asdf.com',
    avatar:
      'https://rtjzvtuqyafegkvoirwc.supabase.co/storage/v1/object/public/unAuthUserImage/userOneImage/1d25d250-5dea-47f5-a465-05f74a7bd79d',
    uid: 'qeqr123qwfs3'
  };
  // const { isLoading, isError, data } = useQuery('usersAccounts', readUserInfo);
  // // useQuery => refetching
  // if (isError) return <div>오류로 인해 정보를 받아오지 못 하고 있습니다.</div>;
  return (
    <section>
      <MyPageHeader />
      <MyPageContents data={data} />
      {/* <MyPageContents data={data} isLoading={isLoading} /> */}
      <MyPageReviews />
    </section>
  );
};

export default MyPage;
