import { supabase } from 'api/supabase/supabase';
import * as LS from 'components/styles/LoginStyle';
import useInput from 'hooks/useInput';
import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { login } from 'shared/redux/modules/authSlice';

const LoginInputForm = ({ isSignUpPage, setSignUpPage }) => {
  // useInput
  const [form, , onChange, reset] = useInput({
    email: '',
    password: '',
    nickname: ''
  });
  const { email, password, nickname } = form;

  const navigate = useNavigate();
  const dispatch = useDispatch();

  // submit 핸들러
  const onSubmitHandler = async (e) => {
    e.preventDefault();
    const buttonType = e.nativeEvent.submitter.name;
    // [회원가입] 버튼을 눌렀을 때
    if (buttonType === 'signup') {
      try {
        // supabase에 회원정보 저장
        const { error } = await supabase.auth.signUp({
          email,
          password,
          options: {
            data: {
              nickname,
              avatar: ''
            }
          }
        });
        if (error) {
          console.log(error);
          alert('회원가입에 실패했습니다.');
        } else {
          alert('회원가입 되었습니다.');
          setSignUpPage(false); // 회원가입 여부 false(=로그인 페이지)로 설정
        }
      } catch (error) {
        console.log(error);
        alert('오류가 발생했습니다.');
      } finally {
        reset(); // input 초기화
      }
    }
    // [로그인] 버튼을 눌렀을 때
    else if (buttonType === 'login') {
      try {
        // 이메일, 비밀번호로 로그인
        const { error } = await supabase.auth.signInWithPassword({
          email,
          password
        });
        if (error) {
          console.log(error);
          alert('로그인에 실패했습니다. 다시 시도하세요.');
        } else {
          dispatch(login()); // login state 변경
          alert('로그인 되었습니다.');
          navigate('/');
        }
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <>
      <LS.LoginForm onSubmit={onSubmitHandler}>
        <LS.StyledSectionTitle>{isSignUpPage ? '회원가입' : '로그인'}</LS.StyledSectionTitle>

        <LS.LoginInputWrapper>
          <LS.StyledLoginInput
            type="email"
            name="email"
            placeholder="이메일"
            required
            value={email}
            onChange={onChange}
          />
          <LS.StyledLoginInput
            type="password"
            name="password"
            placeholder="비밀번호 (6~10자)"
            required
            minLength={6}
            maxLength={10}
            value={password}
            onChange={onChange}
          />
          {isSignUpPage && (
            <LS.StyledLoginInput
              type="text"
              name="nickname"
              placeholder="닉네임 (1~10자)"
              required
              maxLength={10}
              value={nickname}
              onChange={onChange}
            />
          )}
        </LS.LoginInputWrapper>
        {isSignUpPage ? (
          <>
            <LS.StyledLoginButton type="submit" name="signup">
              회원가입
            </LS.StyledLoginButton>
            <LS.LinkToSignUpWrapper>
              <span>기존 회원이신가요?</span>
              <LS.LinkToSpan onClick={() => setSignUpPage(false)}>로그인</LS.LinkToSpan>
            </LS.LinkToSignUpWrapper>
          </>
        ) : (
          <>
            <LS.StyledLoginButton type="submit" name="login">
              로그인
            </LS.StyledLoginButton>
            <LS.LinkToSignUpWrapper>
              <span>처음 방문하셨나요?</span>
              <LS.LinkToSpan onClick={() => setSignUpPage(true)}>회원가입</LS.LinkToSpan>
            </LS.LinkToSignUpWrapper>
          </>
        )}
      </LS.LoginForm>
    </>
  );
};

export default LoginInputForm;
