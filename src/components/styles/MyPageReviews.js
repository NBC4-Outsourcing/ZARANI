import styled from 'styled-components';

export const MyReviewsSection = styled.section`
  width: 100%;
  grid-template-columns: repeat(auto-fill, minmax(500px, 2fr));
  grid-auto-rows: auto;
  align-items: center;
  justify-content: center;
  padding: 1rem;

  border-radius: 1rem;
  box-shadow: 0 2px 3px 2px var(--subColor2);
`;
