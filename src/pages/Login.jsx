import * as LS from 'components/styles/LoginStyle';
import React, { useState } from 'react';
import defaultImage from 'assets/defaultImage.png';
import LoginInputForm from 'components/loginPageComponents/LoginInputForm';

const Login = () => {
  // 회원가입/로그인 페이지 여부 (기본값: 로그인 페이지)
  const [isSignUpPage, setSignUpPage] = useState(false);
  return (
    <>
      <LS.LoginPageDiv>
        {isSignUpPage ? (
          <>
            <LS.WidthFiftyPercentDiv>
              <LS.WidthHundredPercentImg src={defaultImage} alt="로고 이미지" />
            </LS.WidthFiftyPercentDiv>
            <LS.WidthFiftyPercentDiv>
              <LoginInputForm isSignUpPage={isSignUpPage} setSignUpPage={setSignUpPage} />
            </LS.WidthFiftyPercentDiv>
          </>
        ) : (
          <>
            <LS.WidthFiftyPercentDiv>
              <LoginInputForm isSignUpPage={isSignUpPage} setSignUpPage={setSignUpPage} />
            </LS.WidthFiftyPercentDiv>
            <LS.WidthFiftyPercentDiv>
              <LS.WidthHundredPercentImg src={defaultImage} alt="로고 이미지" />
            </LS.WidthFiftyPercentDiv>
          </>
        )}
      </LS.LoginPageDiv>
    </>
  );
};

export default Login;
