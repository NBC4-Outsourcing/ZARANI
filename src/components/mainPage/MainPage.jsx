import React from 'react';
import * as S from '../styles/mainPageStyle';
import MainPageHeader from './MainPageHeader';
import MainPageCommunity from './MainPageCommunity';
import MainPageNav from './MainPageNav';
import MainPageKaKao from './MainPageKaKao';

const MainPage = () => {
  return (
    <>
      <MainPageHeader />
      <S.MainWrapper>
        <div>
          <MainPageCommunity />
          <MainPageNav />
        </div>
        <MainPageKaKao />
      </S.MainWrapper>
    </>
  );
};

export default MainPage;
