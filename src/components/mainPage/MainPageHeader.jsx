import React from 'react';
import * as S from '../styles/mainPageStyle';
import img from '../../assets/logo.png';
import { useNavigate } from 'react-router-dom';
import { useQuery } from 'react-query';
import { useDispatch } from 'react-redux';
import { logout } from 'shared/redux/modules/authSlice';
import Loading from 'components/common/Loading';
import { getLoginUserInfo, removeCurrentLoginUser } from 'components/loginPageComponents/loginPageSupabase';
import { getUser } from 'components/communityComponents/CommunitySupabase';

const MainPageHeader = () => {
  const { isLoading, data } = useQuery('usersAccounts', getUser);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handCommunityPage = () => {
    navigate('/community');
  };
  const handLoginPage = () => {
    navigate('/login');
  };
  const handMypage = () => {
    navigate('/mypage');
  };
  const handLogOut = async () => {
    // 현재 로그인 중인 유저의 정보를 가져옴
    const currentLoginUser = await getLoginUserInfo();
    // 현재 로그인 중인 유저의 id(=uid)를 가져옴
    const { id } = currentLoginUser.user;
    // 현재 로그인 상태인 유저 DB에서 현재 유저를 삭제
    await removeCurrentLoginUser(id);
    dispatch(logout());
    alert('로그아웃 되었습니다');
    navigate('/', { replace: true });
  };
  if (isLoading) {
    return <Loading />;
  }
  return (
    <S.HeaderWrapper>
      <S.LogoImage src={img} />
      {!data.name ? (
        <S.LoginStyle>
          <S.StBtn onClick={handCommunityPage}> 커뮤니티</S.StBtn>
          <S.AvatarStyle src={data.user_metadata?.avatar} onClick={handMypage} />
          <S.LogoutBtn onClick={handLogOut}>로그아웃</S.LogoutBtn>
        </S.LoginStyle>
      ) : (
        <S.StBtn onClick={handLoginPage}>로그인</S.StBtn>
      )}
    </S.HeaderWrapper>
  );
};

export default MainPageHeader;
