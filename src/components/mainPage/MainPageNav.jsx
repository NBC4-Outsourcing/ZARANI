import React from 'react';
import * as S from '../styles/mainPageStyle';
import kangwondo from '../../assets/kangwondo.png';
const MainPageNav = () => {
  return (
    <S.NavWrapper>
      <S.ListSection>
        <S.ImgList src={kangwondo} />
        <S.ImgList src={kangwondo} />
        <S.ImgList src={kangwondo} />
      </S.ListSection>
      <S.ListSection>
        <S.ImgList src={kangwondo} />
        <S.ImgList src={kangwondo} />
        <S.ImgList src={kangwondo} />
      </S.ListSection>
    </S.NavWrapper>
  );
};

export default MainPageNav;
