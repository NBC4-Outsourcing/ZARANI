import {
  CommunityBtn,
  CommunityHeaderInfo,
  CommunityHeaderLogoImage,
  CommunityHeaderMain,
  CommunityHeaderName,
  CommunityHeaderProfileImage,
  CommunityHeaderTitle
} from 'components/styles/CommunityStyle';
import React from 'react';
import defaultImage from 'assets/defaultImage.png';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logout } from 'shared/redux/modules/authSlice';
import logoImage from 'assets/logo.png';
import { getLoginUserInfo, removeCurrentLoginUser } from 'components/loginPageComponents/loginPageSupabase';

const CommunityHeader = ({ userData }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { avatar } = userData.user_metadata;

  const onClickLogOutHandler = async () => {
    // 현재 로그인 중인 유저의 정보를 가져옴
    const currentLoginUser = await getLoginUserInfo();
    // 현재 로그인 중인 유저의 id(=uid)를 가져옴
    const { id } = currentLoginUser.user;
    // 현재 로그인 상태인 유저 DB에서 현재 유저를 삭제
    await removeCurrentLoginUser(id);
    dispatch(logout());
    alert('로그아웃 되었습니다');
    navigate('/', { replace: true });
  };
  return (
    <CommunityHeaderMain>
      <div>
        <CommunityBtn onClick={() => navigate('/')}>Home</CommunityBtn>
      </div>
      <CommunityHeaderTitle>
        <CommunityHeaderLogoImage src={logoImage} /> <CommunityHeaderName>COMMUNITY</CommunityHeaderName>
      </CommunityHeaderTitle>
      <CommunityHeaderInfo>
        <Link to={'/mypage'}>
          <CommunityHeaderProfileImage src={avatar ? avatar : defaultImage} />
        </Link>
        <CommunityBtn $background={'danger'} onClick={onClickLogOutHandler}>
          로그아웃
        </CommunityBtn>
      </CommunityHeaderInfo>
    </CommunityHeaderMain>
  );
};

export default CommunityHeader;
