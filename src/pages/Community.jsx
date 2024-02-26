import CommunityMain from 'components/communityComponents/CommunityMain';
import CommunityInputForm from 'components/communityComponents/CommunityInputForm';
import Header from 'components/layout/Header';
import React from 'react';
import { CommunityDiv } from 'components/styles/CommunityStyle';

const Community = () => {
  return (
    <CommunityDiv>
      <Header />
      <CommunityInputForm />
      <CommunityMain />
    </CommunityDiv>
  );
};

export default Community;
