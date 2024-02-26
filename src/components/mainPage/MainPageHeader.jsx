import React, { useState } from 'react';
import * as S from '../styles/mainPageStyle';
import img from '../../assets/logo.png';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const MainPageHeader = () => {
  const [isLogin, setIsLogin] = useState(true);
  const { selectImage } = useSelector((state) => state.user);
  const navigate = useNavigate();
  const handCommunityPage = () => {
    navigate('/community');
  };
  const handLoginPage = () => {
    navigate('/login');
  };
  const handMypage = () => {
    navigate('/mypage');
  };
  const handLogOut = () => {
    //로그아웃 로직
  };
  return (
    <S.HeaderWrapper>
      <S.LogoImage src={img} />
      {isLogin ? (
        <S.LoginStyle>
          <S.StBtn onClick={handCommunityPage}> 커뮤니티</S.StBtn>
          <S.AvatarStyle src={selectImage} onClick={handMypage} />
          <S.LogoutBtn onClick={handLogOut}>로그아웃</S.LogoutBtn>
        </S.LoginStyle>
      ) : (
        <S.StBtn onClick={handLoginPage}>로그인</S.StBtn>
      )}
    </S.HeaderWrapper>
  );
};

export default MainPageHeader;
