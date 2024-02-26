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
import { useDispatch } from 'react-redux';
import { logout } from 'shared/redux/modules/authSlice';

const CommunityHeader = ({ userData }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { avatar } = userData.user_metadata;

  const onClickLogOutHandler = () => {
    dispatch(logout());
    alert('로그아웃 되었습니다');
    navigate('/');
  };
  return (
    <CommunityHeaderMain>
      <div>
        <CommunityBtn onClick={() => navigate('/')}>Home</CommunityBtn>
      </div>
      <CommunityHeaderName>ZARANI COMMUNITY</CommunityHeaderName>
      <CommunityHeaderInfo>
        <CommunityHeaderImage src={avatar ? avatar : defaultImage} />
        <CommunityBtn background={'danger'} onClick={onClickLogOutHandler}>
          로그아웃
        </CommunityBtn>
      </CommunityHeaderInfo>
    </CommunityHeaderMain>
  );
};

export default CommunityHeader;
