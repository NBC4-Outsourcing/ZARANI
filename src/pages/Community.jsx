import CommunityInputForm from 'components/communityComponents/CommunityInputForm';
import React from 'react';
import { CommunityDiv } from 'components/styles/CommunityStyle';
import CommunityHeader from 'components/communityComponents/CommunityHeader';
import { useQuery } from 'react-query';
import { getCommentList, getUser, getWriteList } from 'components/communityComponents/CommunitySupabase';
import Loading from 'components/common/Loading';
import WritingList from 'components/communityComponents/WritingList';
import { useNavigate } from 'react-router-dom';

const Community = () => {
  const navigate = useNavigate();
  const { isLoading, data: userData } = useQuery('userData', getUser);
  const { isLoading: writeListLoading, data: writeList } = useQuery('communityWriteList', getWriteList);
  const { isLoading: commentListLoading, data: commentList } = useQuery('commentWriteList', getCommentList);

  if (isLoading || writeListLoading || commentListLoading) {
    return <Loading />;
  }

  if (userData === null) {
    navigate('/');
    return <div>데이터를 가져오지 못했습니다.</div>;
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
