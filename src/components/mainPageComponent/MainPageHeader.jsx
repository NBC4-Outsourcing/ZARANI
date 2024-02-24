import React, { useState } from 'react';
import * as HS from '../mainPageComponent/mainPageHeaderStyle';
import img from '../styles/image/logo.png';

const MainPageHeader = () => {
  const [isLogin, setIsLogin] = useState(true);
  return (
    <HS.Wrapper>
      <HS.LogoImage src={img} />
      {isLogin ? (
        <HS.LoginStyle>
          <HS.StBtn> onClick={handComunityPage}커뮤니티</HS.StBtn>
          <HS.AvatarStyle />
          <HS.StBtn>로그아웃</HS.StBtn>
        </HS.LoginStyle>
      ) : (
        <HS.StBtn onClick={handLoginPage}>로그인</HS.StBtn>
      )}
    </HS.Wrapper>
  );
};

export default MainPageHeader;
