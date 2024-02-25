import styled from 'styled-components';

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
export const ImgList = styled.img`
  width: 30%;
  height: 100%;
  cursor: pointer;
  &:hover {
    transition: all 0.2s;
    transform: scale(1.05);
  }
`;

//MainPageMap.jsx

export const MapWrapper = styled.div`
  width: 570px;
  height: 650px;
  border: 1px solid black;
  margin-top: 30px;
`;
