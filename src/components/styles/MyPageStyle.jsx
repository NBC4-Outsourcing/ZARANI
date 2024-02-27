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

  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(500px, 2fr));
  grid-auto-rows: auto;
  align-items: center;
  justify-content: center;
  padding: 1rem;

  gap: 1rem;
`;
