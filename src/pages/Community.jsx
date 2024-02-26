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

  if (isLoading) {
    return <Loading />;
  } else if (writeListLoading) {
    return <Loading />;
  } else if (commentListLoading) {
    return <Loading />;
  } else {
    if (userData.status === 401) {
      return (
        <div>
          <p>로그인이 되어있지 않습니다.</p> <button onClick={() => navigate('/')}>홈으로</button>
        </div>
      );
    }
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
