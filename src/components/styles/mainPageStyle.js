import styled from 'styled-components';
import img1 from '../../assets/2.png';
import img2 from '../../assets/3.png';
import img3 from '../../assets/4.png';
import img4 from '../../assets/5.png';
import img5 from '../../assets/6.png';
import img6 from '../../assets/7.png';

//MainPage.jsx
export const MainWrapper = styled.div`
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

//MainPageComunity.jsx
export const ComuWrapper = styled.div`
  max-width: 100%;
  min-width: 500px;
  height: 200px;
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  background-color: #f0f0f0;
`;
export const TitleSection = styled.div`
  font-size: 30px;
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
`;
export const Nickname = styled.span`
  font-size: 18px;
  margin-right: 15px;
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
  &:hover {
    transform: scale(1.05);
  }
  &:hover p {
    color: red;
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
  &:hover {
    transform: scale(1.05);
  }
  &:hover p {
    color: red;
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
  &:hover {
    transform: scale(1.05);
  }
  &:hover p {
    color: red;
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
  &:hover {
    transform: scale(1.05);
  }
  &:hover p {
    color: red;
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
  &:hover {
    transform: scale(1.05);
  }
  &:hover p {
    color: red;
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
  &:hover {
    transform: scale(1.05);
  }
  &:hover p {
    color: red;
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
