import {
  CommunityBtn,
  CommunityHeaderImage,
  CommunityHeaderInfo,
  CommunityHeaderMain,
  CommunityHeaderName
} from 'components/styles/CommunityStyle';
import React from 'react';
import defaultImage from 'assets/defaultImage.png';
import { useNavigate } from 'react-router-dom';

const CommunityHeader = () => {
  const navigate = useNavigate();
  return (
    <CommunityHeaderMain>
      <div>
        <CommunityBtn onClick={() => navigate('/')}>Home</CommunityBtn>
      </div>
      <CommunityHeaderName>ZARANI COMMUNITY</CommunityHeaderName>
      <CommunityHeaderInfo>
        <CommunityHeaderImage src={defaultImage} />
        <CommunityBtn background={'danger'}>로그아웃</CommunityBtn>
      </CommunityHeaderInfo>
    </CommunityHeaderMain>
  );
};

export default CommunityHeader;
