import { supabase } from 'api/supabase/supabase';
import * as LS from 'components/styles/LoginStyle';
import useInput from 'hooks/useInput';
import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { login } from 'shared/redux/modules/authSlice';
import defaultProfileImage from 'assets/defaultProfileImage.png';
import { getCurrentLoggedInUserList, getLoginUserInfo, insertCurrentLoginUser } from './loginPageSupabase';

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
              avatar: defaultProfileImage
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
          // 에러가 발생하지 않았을 때
          // 1. 지금 로그인하려는 유저의 정보를 가져옴
          const loginUserInfo = await getLoginUserInfo();
          // 2. 현재 로그인 상태인 유저 LIST를 DB로부터 가져옴
          const currentLoggedInUser = await getCurrentLoggedInUserList();
          // 지금 로그인하려는 유저의 정보(1 - 이메일, 아이디)
          const { email, id } = loginUserInfo.user;
          // 지금 로그인하려는 유저의 정보(2 - 아바타, 닉네임)
          const { avatar, nickname } = loginUserInfo.user.user_metadata;
          // 현재 로그인 상태인 유저의 이메일 리스트를 map함수로 추출함
          const currentLoggedInEmail = currentLoggedInUser.map((account) => account.email);
          // 3. 지금 로그인하려는 유저의 정보가 DB에 있는가?
          const isCurrentLoggedIn = currentLoggedInEmail.includes(email);
          // 3-1. 로그인된 상태!!
          if (isCurrentLoggedIn) {
            console.error('Error: 이미 로그인된 유저입니다.');
            return alert('이미 로그인한 유저입니다.');
          }
          // 3-2. 로그인 안된 상태!! 로그인 가능!!
          else {
            // 새로운 유저의 정보 객체 생성
            const newLoginUser = {
              uid: id,
              email,
              nickname,
              avatar
            };
            // DB에 지금 로그인하는 유저의 정보를 입력
            await insertCurrentLoginUser(newLoginUser);
            dispatch(login());
            alert('로그인 되었습니다.');
            navigate('/');
          }
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
