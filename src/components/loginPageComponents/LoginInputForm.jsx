import {
  LinkToSignUpWrapper,
  LoginInputWrapper,
  StyledLoginButton,
  StyledLoginInput,
  StyledSectionTitle,
  LoginForm,
  LinkToSpan
} from 'components/styles/LoginStyle';
import React from 'react';

const LoginInputForm = ({ isSignUpPage, setSignUpPage }) => {
  return (
    <>
      <LoginForm>
        <StyledSectionTitle>{isSignUpPage ? '회원가입' : '로그인'}</StyledSectionTitle>

        <LoginInputWrapper>
          <StyledLoginInput type="email" placeholder="이메일" required />
          <StyledLoginInput type="password" placeholder="비밀번호 (6~10자)" required minLength={6} maxLength={10} />
          {isSignUpPage && <StyledLoginInput type="text" placeholder="닉네임 (1~10자)" required maxLength={10} />}
        </LoginInputWrapper>
        {isSignUpPage ? (
          <>
            <StyledLoginButton type="submit" name="signup">
              회원가입
            </StyledLoginButton>
            <LinkToSpan onClick={() => setSignUpPage(false)}>돌아가기</LinkToSpan>
          </>
        ) : (
          <>
            <StyledLoginButton type="submit" name="login">
              로그인
            </StyledLoginButton>
            <LinkToSignUpWrapper>
              <span>처음 방문하셨나요?</span>
              <LinkToSpan onClick={() => setSignUpPage(true)}>회원가입</LinkToSpan>
            </LinkToSignUpWrapper>
          </>
        )}
      </LoginForm>
    </>
  );
};

export default LoginInputForm;
