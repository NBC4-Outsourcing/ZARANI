import { LoginPageDiv, WidthFiftyPercentDiv, WidthHundredPercentImg } from 'components/styles/LoginStyle';
import React, { useState } from 'react';
import defaultImage from 'assets/defaultImage.png';
import LoginInputForm from 'components/loginPageComponents/LoginInputForm';

const Login = () => {
  // 회원가입/로그인 페이지 여부 (기본값: 로그인 페이지)
  const [isSignUpPage, setSignUpPage] = useState(false);
  return (
    <>
      <LoginPageDiv>
        {isSignUpPage ? (
          <>
            <WidthFiftyPercentDiv>
              <WidthHundredPercentImg src={defaultImage} alt="로고 이미지" />
            </WidthFiftyPercentDiv>
            <WidthFiftyPercentDiv>
              <LoginInputForm isSignUpPage={isSignUpPage} setSignUpPage={setSignUpPage} />
            </WidthFiftyPercentDiv>
          </>
        ) : (
          <>
            <WidthFiftyPercentDiv>
              <LoginInputForm isSignUpPage={isSignUpPage} setSignUpPage={setSignUpPage} />
            </WidthFiftyPercentDiv>
            <WidthFiftyPercentDiv>
              <WidthHundredPercentImg src={defaultImage} alt="로고 이미지" />
            </WidthFiftyPercentDiv>
          </>
        )}
      </LoginPageDiv>
    </>
  );
};

export default Login;
