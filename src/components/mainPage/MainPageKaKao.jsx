import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setList } from 'shared/redux/modules/mapListSlice';
import * as S from '../styles/mainPageStyle';

const { kakao } = window;

const MainPageKaKao = () => {
  const data = useSelector((state) => state.area);
  const serchBtn = data.serchTxt.serchTxt;

  const dispatch = useDispatch();

  useEffect(() => {
    let markers = [];
    const container = document.getElementById('map');
    const options = {
      center: new kakao.maps.LatLng(33.450701, 126.570667),
      level: 3
    };
    //지도 생성
    const map = new kakao.maps.Map(container, options);

    //장소 검색 객체
    const ps = new kakao.maps.services.Places();
    //검색 결과 목록 또는 마커 클릭시 장소명 인포윈도우
    const infowindow = new kakao.maps.InfoWindow({ zIndex: 1 });

    ps.keywordSearch(serchBtn, placesSearchCB);

    function placesSearchCB(data, status, pagination) {
      if (status === kakao.maps.services.Status.OK) {
        // 정상적으로 검색이 완료됐으면
        // 검색 목록과 마커를 표출

        displayPlaces(data);

        dispatch(setList(data));
      } else if (status === kakao.maps.services.Status.ZERO_RESULT) {
        alert('검색 결과가 존재하지 않습니다.');
        return;
      } else if (status === kakao.maps.services.Status.ERROR) {
        alert('검색 결과 중 오류가 발생했습니다.');
        return;
      }
    }

    // 검색 결과 목록과 마커를 표출하는 함수
    function displayPlaces(places) {
      const bounds = new kakao.maps.LatLngBounds();

      // 검색 결과 목록에 추가된 항목들을 제거
      removeMarker();
      // 마커를 생성하고 지도에 표시
      for (let i = 0; i < places.length; i++) {
        let placePosition = new kakao.maps.LatLng(places[i].y, places[i].x),
          marker = addMarker(placePosition, i);

        // 검색된 장소 위치를 기준으로 지도 범위를 재설정하기위해
        // LatLngBounds 객체에 좌표를 추가
        bounds.extend(placePosition);
        (function (marker, title) {
          kakao.maps.event.addListener(marker, 'mouseover', function () {
            displayInfowindow(marker, title);
          });
          //마커 클릭시
          kakao.maps.event.addListener(marker, 'click', function () {
            var level = map.getLevel() - 4;
            map.setLevel(level, { anchor: this.getPosition() });
            map.addOverlayMapTypeId(kakao.maps.MapTypeId.BICYCLE);
          });

          kakao.maps.event.addListener(marker, 'mouseout', function () {
            infowindow.close();
          });
        })(marker, places[i].place_name);
      }

      // 검색된 장소 위치를 기준으로 지도 범위를 재설정
      map.setBounds(bounds);
    }

    // 마커를 생성하고 지도 위에 마커를 표시하는 함수
    function addMarker(position, idx, title) {
      const imageSrc = 'https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/marker_number_blue.png'; // 마커 이미지 url, 스프라이트 이미지를 씁니다
      const imageSize = new kakao.maps.Size(36, 37); // 마커 이미지의 크기
      const imgOptions = {
        spriteSize: new kakao.maps.Size(36, 691), // 스프라이트 이미지의 크기
        spriteOrigin: new kakao.maps.Point(0, idx * 46 + 10), // 스프라이트 이미지 중 사용할 영역의 좌상단 좌표
        offset: new kakao.maps.Point(13, 37) // 마커 좌표에 일치시킬 이미지 내에서의 좌표
      };
      const markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize, imgOptions);
      const marker = new kakao.maps.Marker({
        position: position, // 마커의 위치
        image: markerImage
      });

      marker.setMap(map); // 지도 위에 마커를 표출

      return marker;
    }
    // 지도 위에 표시되고 있는 마커를 모두 제거
    function removeMarker() {
      for (let i = 0; i < markers.length; i++) {
        markers[i].setMap(null);
      }
      markers = [];
    }

    // 인포윈도우에 장소명 표시
    function displayInfowindow(marker, title) {
      let content = '<div>' + title + '<div>';

      infowindow.setContent(content);
      infowindow.open(map, marker);
    }
  }, [serchBtn]);

  return (
    <div>
      <S.KaKaoWrap id="map"></S.KaKaoWrap>
    </div>
  );
};

export default MainPageKaKao;
