import React from 'react';
import * as S from '../styles/mainPageStyle';
import { useDispatch } from 'react-redux';
import { setAreaInfo } from 'shared/redux/modules/areaSlice';
const MainPageNav = () => {
  const dispatch = useDispatch();

  const onClick = (lat, lng) => {
    const clickArea = {
      lat: lat,
      lng: lng
    };
    dispatch(setAreaInfo(clickArea));
  };
  return (
    <S.NavWrapper>
      <S.ListSection>
        <S.ListIncheon onClick={() => onClick(37.57241118053246, 126.70242841204563)}>
          <p>경기/인천</p>
        </S.ListIncheon>
        <S.ListKangWondo onClick={() => onClick(37.39482212745786, 127.88086710334584)}>
          <p>강원도</p>
        </S.ListKangWondo>
        <S.ListSeoul onClick={() => onClick(37.54625244121143, 127.03042291956365)}>
          <p>서울</p>
        </S.ListSeoul>
      </S.ListSection>
      <S.ListSection>
        <S.ListJunra onClick={() => onClick(35.90643382159936, 126.91577497620652)}>
          <p>전라도</p>
        </S.ListJunra>
        <S.ListChungcheonDo onClick={() => onClick(36.796313439074936, 127.02578193452752)}>
          <p>충청도</p>
        </S.ListChungcheonDo>
        <S.ListJeJu onClick={() => onClick(33.492707107645444, 126.42756688516592)}>
          <p>제주도</p>
        </S.ListJeJu>
      </S.ListSection>
    </S.NavWrapper>
  );
};

export default MainPageNav;
