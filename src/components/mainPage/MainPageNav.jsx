import React from 'react';
import * as S from '../styles/mainPageStyle';
import { useDispatch } from 'react-redux';
import { setAreaInfo } from 'shared/redux/modules/areaSlice';
const MainPageNav = () => {
  const dispatch = useDispatch();

  const onClick = (serchTxt) => {
    const clickArea = {
      serchTxt
    };
    dispatch(setAreaInfo(clickArea));
  };
  return (
    <S.NavWrapper>
      <S.ListSection>
        <S.ListIncheon onClick={() => onClick('경기 인천 자전거 길')}>
          <p>경기/인천</p>
        </S.ListIncheon>
        <S.ListKangWondo onClick={() => onClick('강원도 자전거 길')}>
          <p>강원도</p>
        </S.ListKangWondo>
        <S.ListSeoul onClick={() => onClick('서울 자전거 길')}>
          <p>서울</p>
        </S.ListSeoul>
      </S.ListSection>
      <S.ListSection>
        <S.ListJunra onClick={() => onClick('전라도 자전거 길')}>
          <p>전라도</p>
        </S.ListJunra>
        <S.ListChungcheonDo onClick={() => onClick('충청도 자전거 길')}>
          <p>충청도</p>
        </S.ListChungcheonDo>
        <S.ListJeJu onClick={() => onClick('제주도 자전거 길')}>
          <p>제주도</p>
        </S.ListJeJu>
      </S.ListSection>
    </S.NavWrapper>
  );
};

export default MainPageNav;
