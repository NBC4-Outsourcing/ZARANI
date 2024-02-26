// import React, { useEffect } from 'react';
// import * as S from '../styles/mainPageStyle';

// const MainPageSerch = () => {
//   useEffect(() => {
//     const mapContainer = document.getElementById('map');
//     const mapOption = {
//       center: new kakao.maps.LatLng(37.566826, 126.9786567),
//       level: 3
//     };

//     // 지도를 생성합니다
//     const map = new kakao.maps.Map(mapContainer, mapOption);

//     // 장소 검색 객체를 생성합니다
//     const ps = new kakao.maps.services.Places();

//     // 검색 결과 목록이나 마커를 클릭했을 때 장소명을 표출할 인포윈도우를 생성합니다
//     const infowindow = new kakao.maps.InfoWindow({ zIndex: 1 });

//     // 마커를 담을 배열입니다
//     const markers = [];

//     // 검색결과 항목을 Element로 반환하는 함수입니다
//     const getListItem = (index, place) => {
//       const itemStr = `
//         <span class="markerbg marker_${index + 1}"></span>
//         <div class="info">
//           <h5>${place.place_name}</h5>
//           <span>${place.road_address_name}</span>
//           <span class="jibun gray">${place.address_name}</span>
//           <span class="tel">${place.phone}</span>
//         </div>
//       `;

//       return (
//         <Item key={index}>
//           <MarkerBackground index={index} />
//           <Info dangerouslySetInnerHTML={{ __html: itemStr }} />
//         </Item>
//       );
//     };

//     // 검색결과 목록과 마커를 표출하는 함수입니다
//     const displayPlaces = (places) => {
//       const bounds = new kakao.maps.LatLngBounds();

//       removeAllChildNodes(placesList);

//       for (let i = 0; i < places.length; i++) {
//         const placePosition = new kakao.maps.LatLng(places[i].y, places[i].x);
//         const marker = addMarker(placePosition, i);
//         bounds.extend(placePosition);
//         markers.push(marker);
//       }

//       map.setBounds(bounds);
//     };

//     // 마커를 생성하고 지도 위에 마커를 표시하는 함수입니다
//     const addMarker = (position, index) => {
//       const imageSrc = 'https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/marker_number_blue.png';
//       const imageSize = new kakao.maps.Size(36, 37);
//       const imgOptions = {
//         spriteSize: new kakao.maps.Size(36, 691),
//         spriteOrigin: new kakao.maps.Point(0, index * 46 + 10),
//         offset: new kakao.maps.Point(13, 37)
//       };
//       const markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize, imgOptions);
//       const marker = new kakao.maps.Marker({
//         position: position,
//         image: markerImage
//       });

//       marker.setMap(map);
//       return marker;
//     };

//     // 검색 결과 목록의 자식 Element를 제거하는 함수입니다
//     const removeAllChildNodes = (parent) => {
//       while (parent.firstChild) {
//         parent.removeChild(parent.firstChild);
//       }
//     };

//     // 키워드로 장소를 검색합니다
//     const searchPlaces = (keyword) => {
//       ps.keywordSearch(keyword, (data, status) => {
//         if (status === kakao.maps.services.Status.OK) {
//           displayPlaces(data);
//         }
//       });
//     };

//     // 검색 결과 목록과 마커를 표시하는 함수입니다
//     searchPlaces('이태원 맛집');
//   }, []);
//   return (
//     <S.Wrapper>
//       <div id="map" style={{ width: '100%', height: '100%', position: 'relative', overflow: 'hidden' }} />
//       <S.MenuWrapper>
//         <div>
//           <form
//             onSubmit={(e) => {
//               e.preventDefault();
//               searchPlaces(e.target.keyword.value);
//             }}
//           >
//             키워드 : <input type="text" defaultValue="이태원 맛집" name="keyword" size="15" />
//             <button type="submit">검색하기</button>
//           </form>
//         </div>
//         <hr />
//         <S.PlacesList id="placesList" />
//         <S.Pagination id="pagination" />
//       </S.MenuWrapper>
//     </S.Wrapper>
//   );
// };

// export default MainPageSerch;
