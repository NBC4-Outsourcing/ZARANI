import React, { useState } from 'react';
import * as HS from '../styles/mainHeaderStyle';
import img from '../../assets/logo.png';
import { useNavigate } from 'react-router-dom';

const MainPageHeader = () => {
  const [isLogin, setIsLogin] = useState(true);
  const navigate = useNavigate();
  const handComunityPage = () => {
    navigate('/comunity');
  };
  const handLoginPage = () => {
    navigate('/login');
  };
  return (
    <HS.Wrapper>
      <HS.LogoImage src={img} />
      {isLogin ? (
        <HS.LoginStyle>
          <HS.StBtn onClick={handComunityPage}> 커뮤니티</HS.StBtn>
          <HS.AvatarStyle />
          <HS.LogoutBtn>로그아웃</HS.LogoutBtn>
        </HS.LoginStyle>
      ) : (
        <HS.StBtn onClick={handLoginPage}>로그인</HS.StBtn>
      )}
    </HS.Wrapper>
  );
};

export default MainPageHeader;
