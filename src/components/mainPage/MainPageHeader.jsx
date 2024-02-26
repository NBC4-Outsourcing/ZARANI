import React, { useState } from 'react';
import * as S from '../styles/mainPageStyle';
import img from '../../assets/logo.png';
import { useNavigate } from 'react-router-dom';
import { getUserImage } from './mainPageSupabase';
import { useQuery } from 'react-query';

const MainPageHeader = () => {
  const [isLogin, setIsLogin] = useState(true);
  const navigate = useNavigate();
  const { isLoading, data } = useQuery('comunityList', getUserImage);

  const handComunityPage = () => {
    navigate('/comunity');
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
  if (isLoading) {
    <div>로딩중입니다.</div>;
  }
  return (
    <S.HeaderWrapper>
      <S.LogoImage src={img} />
      {isLogin ? (
        <S.LoginStyle>
          <S.StBtn onClick={handComunityPage}> 커뮤니티</S.StBtn>
          <S.AvatarStyle onClick={handMypage} src={data} />
          <S.LogoutBtn onClick={handLogOut}>로그아웃</S.LogoutBtn>
        </S.LoginStyle>
      ) : (
        <S.StBtn onClick={handLoginPage}>로그인</S.StBtn>
      )}
    </S.HeaderWrapper>
  );
};

export default MainPageHeader;
