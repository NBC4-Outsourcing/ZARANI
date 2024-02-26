import React from 'react';
import * as S from '../styles/mainPageStyle';
import MainPageHeader from './MainPageHeader';
import MainPageComunity from './MainPageComunity';
import MainPageNav from './MainPageNav';
import MainPageMap from './MainPageMap';
import MainPageSerch from './MainPageSerch';

const MainPage = () => {
  return (
    <>
      <MainPageHeader />
      <S.MainWrapper>
        <div>
          <MainPageComunity />
          <MainPageNav />
          {/* <MainPageSerch /> */}
        </div>
        <MainPageMap />
      </S.MainWrapper>
    </>
  );
};

export default MainPage;
