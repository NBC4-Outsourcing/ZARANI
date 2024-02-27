import CommunityInputForm from 'components/communityComponents/CommunityInputForm';
import React from 'react';
import { CommunityBtn, CommunityDiv, CommunityErrorBackground } from 'components/styles/CommunityStyle';
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

  if (userData.__isAuthError && !(isLoading || writeListLoading || commentListLoading)) {
    return (
      <CommunityErrorBackground>
        <p>로그인이 되어있지 않습니다.</p> <CommunityBtn onClick={() => navigate('/')}>홈으로</CommunityBtn>
      </CommunityErrorBackground>
    );
  }
  if (writeList.code && !(isLoading || writeListLoading || commentListLoading)) {
    return (
      <CommunityErrorBackground>
        <p>글을 불러오지 못 했습니다.</p> <CommunityBtn onClick={() => navigate('/')}>홈으로</CommunityBtn>
      </CommunityErrorBackground>
    );
  }
  if (commentList.code && !(isLoading || writeListLoading || commentListLoading)) {
    return (
      <CommunityErrorBackground>
        <p>댓글을 불러오지 못 했습니다.</p> <CommunityBtn onClick={() => navigate('/')}>홈으로</CommunityBtn>
      </CommunityErrorBackground>
    );
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
