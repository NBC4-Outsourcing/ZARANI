import styled from 'styled-components';

export const MyPageContainerSection = styled.section`
  width: 100%;
  min-width: 320px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const UseMyStreetDosDiv = styled.div`
  width: 100%;
  min-width: 300px;
  max-width: 1280px;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  align-items: flex-start;
  justify-content: center;
  padding: 1rem;
  gap: 2rem;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

export const MyStreetsDiv = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  padding: 0.8rem;

  border-radius: 1rem;
  background-color: rgba(250, 184, 145, 0.8);
`;

export const MyStreetP = styled.p`
  font-size: 1.4rem;
  font-weight: bold;
  padding: 0.4rem 1rem;
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

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;
