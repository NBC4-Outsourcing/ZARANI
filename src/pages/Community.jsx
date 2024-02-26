import CommunityInputForm from 'components/communityComponents/CommunityInputForm';
import React from 'react';
import { CommunityDiv } from 'components/styles/CommunityStyle';
import CommunityHeader from 'components/communityComponents/CommunityHeader';
import { useQuery } from 'react-query';
import { getCommentList, getUser, getWriteList } from 'components/communityComponents/CommunitySupabase';
import Loading from 'components/common/Loading';
import WritingList from 'components/communityComponents/WritingList';

const Community = () => {
  const { isLoading, isError, data: userData } = useQuery('userData', getUser);
  const {
    isLoading: writeListLoading,
    isError: writeListError,
    data: writeList
  } = useQuery('communityWriteList', getWriteList);
  const {
    isLoading: commentListLoading,
    isError: commentListError,
    data: commentList
  } = useQuery('commentWriteList', getCommentList);

  if (isLoading || writeListLoading || commentListLoading) {
    return <Loading />;
  }
  if (isError || writeListError || commentListError) {
    return <div>데이터를 가져오는 중 문제가 발생했습니다.</div>;
  }
  return (
    <CommunityDiv>
      <CommunityHeader userData={userData} />
      <CommunityInputForm userData={userData} />
      <WritingList userData={userData} writeList={writeList} commentList={commentList} />
    </CommunityDiv>
  );
};

export default Community;
