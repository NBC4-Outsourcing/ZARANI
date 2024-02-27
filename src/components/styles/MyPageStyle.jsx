import styled from 'styled-components';

export const MyPageContainerSection = styled.section`
  width: 100%;
  min-width: 320px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const ContentsReviewArticle = styled.article`
  width: 100%;
  min-width: 300px;
  max-width: 1280px;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  margin-top: 1.2rem;
  align-items: flex-start;
  justify-content: center;
  padding: 1rem;
  gap: 1rem;
  /* width: 100%;
  min-width: 300px;
  max-width: 1280px;

  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;

  margin-top: 1.2rem; */
  @media screen and (max-width: 768px) {
    /* 화면 너비가 768px 이하일 때 세로로 배치 */
    flex-direction: column;
  }

  /* align-items: center;
  justify-content: center;
  padding: 1rem;

  gap: 1rem; */
`;
