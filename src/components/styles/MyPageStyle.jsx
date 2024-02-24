import styled from 'styled-components';

export const MyPageContentsForm = styled.form`
  background-color: black;
  width: 500px;
  height: 500px;

  display: flex;
  flex-direction: row;

  padding: 38px;
`;

export const ThumnailImg = styled.img`
  min-width: 50px;
  max-width: 240px;
  width: 100%;
  min-height: 50px;
  max-height: 240px;

  object-fit: cover;
`;
