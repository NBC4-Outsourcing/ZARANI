import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import MainPageLanding from './MainPageLending';
import * as S from '../styles/mainPageStyle';

const { kakao } = window;

const MainPageKaKao = () => {
  const [list, setList] = useState([]);
  const data = useSelector((state) => state.area);
  const serchBtn = data.serchTxt.serchTxt;

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
    console.log(infowindow);

    ps.keywordSearch(serchBtn, placesSearchCB);

    function placesSearchCB(data, status, pagination) {
      if (status === kakao.maps.services.Status.OK) {
        // 정상적으로 검색이 완료됐으면
        // 검색 목록과 마커를 표출

        displayPlaces(data);

        setList(data);
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

        // 마커와 검색결과 항목에 mouseover 했을때
        // 해당 장소에 인포윈도우에 장소명을 표시
        // mouseout 했을 때는 인포윈도우를 닫음
        (function (marker, title) {
          kakao.maps.event.addListener(marker, 'mouseover', function () {
            displayInfowindow(marker, title);
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
      let content = '<div style="padding:5px;z-index:1;">' + title + '</div>';

      infowindow.setContent(content);
      infowindow.open(map, marker);
    }
  }, [serchBtn]);
  console.log(list);
  return (
    <div>
      <div
        id="map"
        style={{ width: '500px', height: '481px', position: 'relative', overflow: 'hidden', marginTop: '30px' }}
      ></div>

      <S.SerchSection>
        <MainPageLanding />
        <S.ListContent>
          {console.log(list)}
          {list.map((item, idx) => {
            return (
              <li key={idx}>
                <p>{idx + 1}</p>
                <p>{item.place_name}</p>
                <p>{item.place_name}</p>
              </li>
            );
          })}
        </S.ListContent>
      </S.SerchSection>
    </div>
  );
};

export default MainPageKaKao;
