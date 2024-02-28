import React from 'react';
import { useDispatch } from 'react-redux';
import { logout } from 'shared/redux/modules/authSlice';
import { getLoginUserInfo, removeCurrentLoginUser } from 'components/loginPageComponents/loginPageSupabase';
import image from 'assets/logo.png';
import * as MPH from 'components/styles/MyPageHeaderStyle';

const MyPageHeader = () => {
  const dispatch = useDispatch();
  const handLogOut = async () => {
    // 현재 로그인 중인 유저의 정보를 가져옴
    const currentLoginUser = await getLoginUserInfo();
    // 현재 로그인 중인 유저의 id(=uid)를 가져옴
    const { id } = currentLoginUser.user;
    // 현재 로그인 상태인 유저 DB에서 현재 유저를 삭제
    await removeCurrentLoginUser(id);
    dispatch(logout());
    alert('로그아웃 되었습니다');
  };

  return (
    <MPH.HeaderArticle>
      <MPH.HeaderNav>
        <MPH.HomeLink to="/">홈으로</MPH.HomeLink>
        <MPH.TitleP>
          <MPH.LogoImg src={image} alt="기본이미지" />
          <span>My&nbsp;PAGE</span>
        </MPH.TitleP>
        <MPH.LogoutBtn onClick={handLogOut}>로그아웃</MPH.LogoutBtn>
      </MPH.HeaderNav>
    </MPH.HeaderArticle>
  );
};

export default MyPageHeader;
