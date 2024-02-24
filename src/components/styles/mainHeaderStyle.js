import styled from 'styled-components';

export const MainWrapper = styled.div`
  display: flex;
  gap: 20px;
`;
export const Wrapper = styled.div`
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
  border: 1px solid black;
  border-radius: 50%;
  margin-right: 25px;
`;
