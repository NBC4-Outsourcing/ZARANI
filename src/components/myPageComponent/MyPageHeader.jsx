import React from 'react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { logout } from 'shared/redux/modules/authSlice';
import * as MPH from 'components/styles/MyPageHeaderStyle';

const MyPageHeader = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <MPH.HeaderArticle>
      <MPH.HeaderNav>
        <MPH.HomeLink to="/">홈으로</MPH.HomeLink>
        <MPH.TitleP>ZARANI MyPAGE</MPH.TitleP>
        <MPH.LogoutBtn
          onClick={() => {
            dispatch(logout());
            navigate('/', { replace: true });
          }}
        >
          로그아웃
        </MPH.LogoutBtn>
      </MPH.HeaderNav>
    </MPH.HeaderArticle>
  );
};

export default MyPageHeader;
