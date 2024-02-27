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
      <section>
        <Link to="/">홈으로</Link>
        <p>ZARANI MyPAGE</p>
        <button
          onClick={() => {
            dispatch(logout());
            navigate('/', { replace: true });
          }}
        >
          로그아웃
        </button>
      </section>
    </MPH.HeaderArticle>
  );
};

export default MyPageHeader;
