import React, { useState } from 'react';
import * as S from '../styles/mainPageStyle';
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
    <S.HeaderWrapper>
      <S.LogoImage src={img} />
      {isLogin ? (
        <S.LoginStyle>
          <S.StBtn onClick={handComunityPage}> 커뮤니티</S.StBtn>
          <S.AvatarStyle />
          <S.LogoutBtn>로그아웃</S.LogoutBtn>
        </S.LoginStyle>
      ) : (
        <S.StBtn onClick={handLoginPage}>로그인</S.StBtn>
      )}
    </S.HeaderWrapper>
  );
};

export default MainPageHeader;
