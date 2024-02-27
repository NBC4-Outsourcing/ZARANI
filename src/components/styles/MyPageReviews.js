import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const MyReviewsSection = styled.section`
  width: 100%;
  height: 80vh;
  &:hover,
  &:focus {
    -ms-overflow-style: none;
    overflow: scroll;
  }

  &::-webkit-scrollbar {
    display: none;
  }
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1rem;

  overflow: scroll;

  border-radius: 1rem;
  box-shadow: 0 2px 3px 2px var(--subColor2);
  gap: 1rem;
`;

export const MyReviewsArticle = styled.article``;

export const MoveLink = styled(Link)`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  box-shadow: 0 2px 3px 2px var(--subColor2);

  border-radius: 20px;

  padding: 1.4rem;
  gap: 4rem;
  &:hover {
    /* background-color: var(--subColor2);*/
    box-shadow: 0rem 0.1rem 0.6rem 0rem var(--mainColor);
    transform: scale(1.04, 1.04);
    transition: all 0.4s; // 시간차두고 바뀌도록 추가
    transition-duration: 0.5s;
  }
`;

export const StreetArticle = styled.article`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1.4rem;
`;

export const StreetNameDateDiv = styled.div`
  width: 100%;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  font-size: 1.2rem;
`;

export const StreetNamP = styled.p`
  font-weight: bold;
`;

export const ReviewNicknameP = styled.p`
  font-size: 1.2rem;
  font-weight: bold;
  text-align: end;
`;

export const MyReviewContentDiv = styled.div``;
