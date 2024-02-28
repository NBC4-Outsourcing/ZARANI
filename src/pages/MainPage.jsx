import React from 'react';
import * as S from '../components/styles/mainPageStyle';
import MainPageHeader from '../components/mainPage/MainPageHeader';
import MainPageCommunity from '../components/mainPage/MainPageCommunity';
import MainPageNav from '../components/mainPage/MainPageNav';
import MainPageKaKao from '../components/mainPage/MainPageKaKao';
import MainPageList from 'components/mainPage/MainPageList';

const MainPage = () => {
  return (
    <>
      <MainPageHeader />
      <S.MainWrapper>
        <div>
          <MainPageCommunity />
          <MainPageNav />
          <MainPageList />
        </div>
        <MainPageKaKao />
      </S.MainWrapper>
    </>
  );
};

export default MainPage;
