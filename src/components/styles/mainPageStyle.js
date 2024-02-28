import styled from 'styled-components';
import img1 from '../../assets/2.png';
import img2 from '../../assets/3.png';
import img3 from '../../assets/4.png';
import img4 from '../../assets/5.png';
import img5 from '../../assets/6.png';
import img6 from '../../assets/7.png';

//MainPage.jsx
export const MainWrapper = styled.section`
  display: flex;
  gap: 20px;
`;
//MainPageHeader.jsx
export const HeaderWrapper = styled.div`
  height: 85px;
  max-width: 100%;
  min-width: 100%;
  border-bottom: 1px solid #eeeeee;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const LogoImage = styled.img`
  width: 200px;
  height: 70px;
  margin-left: 15px;
  cursor: pointer;
`;
export const StBtn = styled.button`
  width: 100px;
  height: 45px;
  color: black;
  background-color: #cae0d2;
  border: 0px;
  border-radius: 7px;
  margin-right: 25px;
  cursor: pointer;
  &:hover {
    transition: all 0.2s;
    transform: scale(1.05);
  }
`;
export const LogoutBtn = styled.button`
  width: 100px;
  height: 45px;
  color: black;
  background-color: #fab891;
  border: 0px;
  border-radius: 7px;
  margin-right: 25px;
  cursor: pointer;
  &:hover {
    transition: all 0.2s;
    transform: scale(1.05);
  }
`;

export const LoginStyle = styled.div`
  display: flex;
  align-items: center;
  padding-top: 7px;
`;
export const AvatarStyle = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  margin-right: 25px;
  cursor: pointer;
  &:hover {
    transition: all 0.2s;
    transform: scale(1.05);
  }
`;

//MainPageCommunity.jsx
export const ComuWrapper = styled.div`
  max-width: 100%;
  min-width: 500px;
  height: 200px;
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  background-color: #eee;
  gap: 10px;
  cursor: pointer;
  &:hover {
    transition: all 0.2s;
    transform: scale(1.05);
  }
`;
export const TitleSection = styled.div`
  font-size: 30px;
  font-weight: 700;
  display: flex;
  justify-content: center;
  margin-top: 10px;
`;
export const ContentSection = styled.div`
  font-size: 20px;
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
`;

export const Content = styled.span`
  font-size: 18px;
  margin-left: 15px;
  width: 350px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;
export const Nickname = styled.span`
  font-size: 18px;
  margin-right: 15px;
  color: #999;
`;

// MainPageNav.jsx

export const NavWrapper = styled.div`
  width: 500px;
  margin-top: 20px;
  height: 250px;
`;
export const ListSection = styled.div`
  width: 100%;
  height: 50%;
  display: flex;
  justify-content: space-between;
  margin: 10px 0;
`;
export const ListIncheon = styled.div`
  display: flex;
  width: 30%;
  height: 100%;
  cursor: pointer;
  font-size: 30px;
  font-weight: 1000;
  color: white;
  align-items: center;
  justify-content: center;
  background-image: url(${img1});
  background-size: cover;
  transition: all 0.2s;
  & > p {
    text-shadow: 1px 1px 2px #000;
  }
  &:hover {
    transform: scale(1.05);
  }
  &:hover p {
    color: var(--mainColor);
    z-index: 1;
  }
  &:hover::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: rgba(255, 255, 255, 0.5);
  }
`;
export const ListKangWondo = styled.div`
  display: flex;
  width: 30%;
  height: 100%;
  cursor: pointer;
  font-size: 30px;
  font-weight: 1000;
  color: white;
  align-items: center;
  justify-content: center;
  background-image: url(${img2});
  background-size: cover;
  transition: all 0.2s;
  & > p {
    text-shadow: 1px 1px 2px #000;
  }
  &:hover {
    transform: scale(1.05);
  }
  &:hover p {
    color: var(--mainColor);
    z-index: 1;
  }
  &:hover::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: rgba(255, 255, 255, 0.5);
  }
`;
export const ListSeoul = styled.div`
  display: flex;
  width: 30%;
  height: 100%;
  cursor: pointer;
  font-size: 30px;
  font-weight: 1000;
  color: white;
  align-items: center;
  justify-content: center;
  background-image: url(${img3});
  background-size: cover;
  transition: all 0.2s;
  & > p {
    text-shadow: 1px 1px 2px #000;
  }
  &:hover {
    transform: scale(1.05);
  }
  &:hover p {
    color: var(--mainColor);
    z-index: 1;
  }
  &:hover::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: rgba(255, 255, 255, 0.5);
  }
`;
export const ListJunra = styled.div`
  display: flex;
  width: 30%;
  height: 100%;
  cursor: pointer;
  font-size: 30px;
  font-weight: 1000;
  color: white;
  align-items: center;
  justify-content: center;
  background-image: url(${img4});
  background-size: cover;
  transition: all 0.2s;
  & > p {
    text-shadow: 1px 1px 2px #000;
  }
  &:hover {
    transform: scale(1.05);
  }
  &:hover p {
    color: var(--mainColor);
    z-index: 1;
  }
  &:hover::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: rgba(255, 255, 255, 0.5);
  }
`;
export const ListChungcheonDo = styled.div`
  display: flex;
  width: 30%;
  height: 100%;
  cursor: pointer;
  font-size: 30px;
  font-weight: 1000;
  color: white;
  align-items: center;
  justify-content: center;
  background-image: url(${img5});
  background-size: cover;
  transition: all 0.2s;
  & > p {
    text-shadow: 1px 1px 2px #000;
  }
  &:hover {
    transform: scale(1.05);
  }
  &:hover p {
    color: var(--mainColor);
    z-index: 1;
  }
  &:hover::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: rgba(255, 255, 255, 0.5);
  }
`;
export const ListJeJu = styled.div`
  display: flex;
  width: 30%;
  height: 100%;
  cursor: pointer;
  font-size: 30px;
  font-weight: 1000;
  color: white;
  align-items: center;
  justify-content: center;
  background-image: url(${img6});
  background-size: cover;
  transition: all 0.2s;
  & > p {
    text-shadow: 1px 1px 2px #000;
  }
  &:hover {
    transform: scale(1.05);
  }
  &:hover p {
    color: var(--mainColor);
    z-index: 1;
  }
  &:hover::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: rgba(255, 255, 255, 0.5);
  }
`;

//MainPageMap.jsx

export const MapWrapper = styled.div`
  width: 570px;
  height: 650px;
  border: 1px solid black;
  margin-top: 30px;
`;

//MainPageSerch.jsx

export const Wrapper = styled.div`
  position: relative;
  width: 100%;
  height: 500px;
`;

export const MenuWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  width: 250px;
  margin: 10px 0 30px 10px;
  padding: 5px;
  overflow-y: auto;
  background: rgba(255, 255, 255, 0.7);
  z-index: 1;
  font-size: 12px;
  border-radius: 10px;
`;

export const PlacesList = styled.ul`
  list-style: none;
`;

export const Item = styled.li`
  position: relative;
  border-bottom: 1px solid #888;
  overflow: hidden;
  cursor: pointer;
  min-height: 65px;
`;

export const MarkerBackground = styled.span`
  float: left;
  position: absolute;
  width: 36px;
  height: 37px;
  margin: 10px 0 0 10px;
  background-image: url(https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/marker_number_blue.png);
  background-repeat: no-repeat;

  // marker_1부터 marker_15까지 background-position 적용
  background-position: ${({ index }) => `0 -${index * 46 + 10}px`};
`;

export const Info = styled.div`
  padding: 10px 0 10px 55px;
`;

export const Tel = styled.span`
  color: #009900;
`;

export const Pagination = styled.div`
  margin: 10px auto;
  text-align: center;
`;

// MainPageKaKao.jsx

export const SerchSection = styled.section`
  width: 100%;
  height: 300px;
  border: 1px solid #ccc;
  margin-top: 20px;
  overflow: auto;
`;
export const ListContent = styled.ul`
  padding: 20px;
  & > li {
    line-height: 24px;
    margin-bottom: 5px;
    border-bottom: 1px solid #ccc;
    padding-bottom: 5px;
    cursor: pointer;
    &:hover {
      transition: all 0.2s;
      transform: scale(1.02);
      color: var(--mainColor);
    }
  }
`;
export const InfoStyle = styled.div`
  width: 100px;
  height: 200px;
  border: 1px solid blue;
`;

// MainPageLanding.jsx
export const FormSearch = styled.form`
  padding: 20px 20px 0;
  width: 100%;
  display: flex;
  align-items: center;
  gap: 5px;
  & > input {
    width: 85%;
    padding: 8px 5px;
  }
  & > button {
    width: 15%;
    padding: 8px 5px;
    border-radius: 3px;
    background-color: var(--mainColor);
    border: 1px solid var(--mainColor);
    cursor: pointer;
    &:hover {
      transition: all 0.2s;
      transform: scale(1.05);
    }
  }
`;
