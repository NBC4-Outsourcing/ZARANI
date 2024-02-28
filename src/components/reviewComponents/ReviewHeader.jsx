import { getLoginUserInfo, removeCurrentLoginUser } from 'components/loginPageComponents/loginPageSupabase';
import { ReviewHeaderDiv } from 'components/styles/ReviewStyle';
import { useDispatch } from 'react-redux';
import { logout } from 'shared/redux/modules/authSlice';
import { useParams } from 'react-router-dom';
import * as MPH from 'components/styles/MyPageHeaderStyle';
import * as RV from 'components/styles/ReviewStyle';

const ReviewHeader = ({ placename }) => {
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
  const headerName = placename.placename;
  return (
    <>
      <ReviewHeaderDiv>
        <MPH.HeaderNav>
          <MPH.HomeLink to="/">홈으로</MPH.HomeLink>
          <RV.Title>{<h1>{headerName}</h1>}</RV.Title>
          <div style={{ fontSize: '1.2rem' }}>자전거 도로 후기</div>
        </MPH.HeaderNav>
      </ReviewHeaderDiv>
    </>
  );
};

export default ReviewHeader;
