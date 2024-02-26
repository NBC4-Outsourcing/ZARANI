import React from 'react';
import * as S from '../styles/mainPageStyle';
import MainPageHeader from './MainPageHeader';
import MainPageCommunity from './MainPageCommunity';
import MainPageNav from './MainPageNav';
import MainPageMap from './MainPageMap';

const MainPage = () => {
  return (
    <>
      <MainPageHeader />
      <S.MainWrapper>
        <div>
          <MainPageCommunity />
          <MainPageNav />
        </div>
        <MainPageMap />
      </S.MainWrapper>
    </>
  );
};

export default MainPage;
