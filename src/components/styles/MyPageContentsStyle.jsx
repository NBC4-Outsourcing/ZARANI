import styled from 'styled-components';

export const MyPageContentsForm = styled.form`
  display: flex;
  flex-direction: row;

  padding: 38px;
`;

export const ImgWrapDiv = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ThumnailImg = styled.div`
  min-width: 80px;
  max-width: 240px;
  min-height: 80px;
  max-height: 240px;

  > img {
    width: 100%;
    height: 100%;

    border-radius: 20px;
    object-fit: cover;
  }
`;

export const ImgFileInput = styled.input`
  display: none;
`;
