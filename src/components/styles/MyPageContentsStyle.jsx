import styled from 'styled-components';

// :root{
//   --mainColor: #fab891;
//   --subColor1: #cae0d2;
//   --subColor2: #EEEEEE;
// }

export const MyPageContentsArticle = styled.article`
  width: 100%;
  grid-template-columns: repeat(auto-fill, minmax(500px, 2fr));
  grid-auto-rows: auto;
  align-items: center;
  justify-content: center;
  padding: 1rem;

  border-radius: 1rem;
  box-shadow: 0 2px 3px 2px var(--subColor2);
`;

export const MyPageContentsForm = styled.form`
  display: flex;
  flex-direction: row;

  border-radius: 1rem;

  padding: 38px;
  gap: 1.2rem;
`;

export const ImgWrapDiv = styled.div`
  display: flex;
  flex-direction: column;

  border-radius: 1rem;
  gap: 2.2rem;
`;

export const ThumnailImg = styled.div`
  min-width: 100px;
  max-width: 240px;
  /* min-height: 100px; */
  max-height: 240px;

  > img {
    width: 100%;
    height: 100%;
    box-shadow: 0 2px 3px 2px lightgray;

    border-radius: 20px;
    object-fit: cover;
  }
`;

export const ImgFileInput = styled.input`
  display: none;
`;

export const addBtnLabel = styled.label`
  background-color: var(--subColor1);
  width: 500px;

  border-radius: 1rem;
  padding: 1rem 2rem;
`;
