import React from 'react';
import { Map, MapTypeId } from 'react-kakao-maps-sdk';
import { useSelector } from 'react-redux';
import { useKakaoLoader } from 'react-kakao-maps-sdk';
const MainPageKaKao = () => {
  useKakaoLoader();
  const serchValue = useSelector((state) => state.area.value);
  return (
    <Map
      // 지도를 표시할 Container
      center={serchValue}
      style={{
        // 지도의 크기
        width: '100%',
        height: '100%'
      }}
      level={4} // 지도의 확대 레벨
    >
      <MapTypeId type={'BICYCLE'} />
    </Map>
  );
};

export default MainPageKaKao;
