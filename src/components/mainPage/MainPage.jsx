import React from 'react';
import * as MS from '../styles/mainHeaderStyle';
import MainPageHeader from './MainPageHeader';
import MainPageComunity from './MainPageComunity';
import MainPageNav from './MainPageNav';
import MainPageMap from './MainPageMap';

const MainPage = () => {
  return (
    <>
      <MainPageHeader />
      <MS.MainWrapper>
        <div>
          <MainPageComunity />
          <MainPageNav />
        </div>
        <MainPageMap />
      </MS.MainWrapper>
    </>
  );
};

export default MainPage;
