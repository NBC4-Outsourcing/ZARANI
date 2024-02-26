import CommunityMain from 'components/communityComponents/CommunityMain';
import CommunityInputForm from 'components/communityComponents/CommunityInputForm';
import React from 'react';
import { CommunityDiv } from 'components/styles/CommunityStyle';
import CommunityHeader from 'components/communityComponents/CommunityHeader';

const Community = () => {
  return (
    <CommunityDiv>
      <CommunityHeader />
      <CommunityInputForm />
      <CommunityMain />
    </CommunityDiv>
  );
};

export default Community;
