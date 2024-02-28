import { ReviewHeaderDiv } from 'components/styles/ReviewStyle';
import * as RV from 'components/styles/ReviewStyle';
import { logout } from 'shared/redux/modules/authSlice';
import { useDispatch } from 'react-redux';
import * as MPH from 'components/styles/MyPageHeaderStyle';
import { getLoginUserInfo, removeCurrentLoginUser } from 'components/loginPageComponents/loginPageSupabase';

const ReviewHeader = ({ placename }) => {
  const headerName = placename.placename;

  const dispatch = useDispatch();
  const handLogOut = async () => {
    // 현재 로그인 중인 유저의 정보를 가져옴
    const currentLoginUser = await getLoginUserInfo();
    // 현재 로그인 중인 유저의 id(=uid)를 가져옴
    const { id } = currentLoginUser.user;
    // 현재 로그인 상태인 유저 DB에서 현재 유저를 삭제
    await removeCurrentLoginUser(id);
    dispatch(logout());
    alert('로그아웃 되었습니다');
  };
  return (
    <>
      <ReviewHeaderDiv>
        <MPH.HeaderNav>
          <MPH.HomeLink to="/">홈으로</MPH.HomeLink>
          <RV.Title>
            <h1>{headerName}</h1>
          </RV.Title>
          <MPH.LogoutBtn onClick={handLogOut}>로그아웃</MPH.LogoutBtn>
        </MPH.HeaderNav>
      </ReviewHeaderDiv>
    </>
  );
};

export default ReviewHeader;
