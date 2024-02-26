import CommunityMain from 'components/communityComponents/CommunityMain';
import CommunityInputForm from 'components/communityComponents/CommunityInputForm';
import React from 'react';
import { CommunityDiv } from 'components/styles/CommunityStyle';
import CommunityHeader from 'components/communityComponents/CommunityHeader';
import { useQuery } from 'react-query';
import { getUser } from 'components/communityComponents/CommunitySupabase';
import Loading from 'components/common/Loading';

const Community = () => {
  const { isLoading, isError, data } = useQuery('userData', getUser);

  if (isLoading) {
    return <Loading />;
  }
  if (isError) {
    return <div>데이터를 가져오는 중 문제가 발생했습니다.</div>;
  }
  return (
    <CommunityDiv>
      <CommunityHeader data={data} />
      <CommunityInputForm />
      <CommunityMain />
    </CommunityDiv>
  );
};

export default Community;
