import { Link } from 'react-router-dom';
import styled from 'styled-components';

// :root{
//   --mainColor: #fab891;
//   --subColor1: #cae0d2;
//   --subColor2: #EEEEEE;
// }
export const HeaderArticle = styled.article`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  background-color: #fff;
  border-bottom: 2px solid var(--subColor2);
`;

export const HeaderNav = styled.section`
  width: 90%;
  min-width: 320px;
  height: 70px;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const TitleP = styled.p`
  font-size: 2rem;
  font-weight: bold;
`;

// 홈버튼
export const HomeLink = styled(Link)`
  background-color: var(--subColor1);
  height: 3rem;

  padding: 1rem 2rem;
  border: 1px solid var(--subColor1);

  border-radius: 1rem;

  font-size: 1.1rem;
`;

// 로그아웃 버튼
export const LogoutBtn = styled.button`
  background-color: var(--mainColor);
  height: 3rem;
  padding: 0.8rem 2rem;

  border: 1px solid var(--mainColor);
  border-radius: 1rem;

  font-size: 1.1rem;
`;
