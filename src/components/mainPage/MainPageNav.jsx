import React from 'react';
import * as S from '../styles/mainPageStyle';
const MainPageNav = () => {
  return (
    <S.NavWrapper>
      <S.ListSection>
        <S.ListIncheon>
          <p>경기/인천</p>
        </S.ListIncheon>
        <S.ListKangWondo>
          <p>강원도</p>
        </S.ListKangWondo>
        <S.ListSeoul>
          <p>서울</p>
        </S.ListSeoul>
      </S.ListSection>
      <S.ListSection>
        <S.ListJunra>
          <p>전라도</p>
        </S.ListJunra>
        <S.ListChungcheonDo>
          <p>충청도</p>
        </S.ListChungcheonDo>
        <S.ListJeJu>
          <p>제주도</p>
        </S.ListJeJu>
      </S.ListSection>
    </S.NavWrapper>
  );
};

export default MainPageNav;
