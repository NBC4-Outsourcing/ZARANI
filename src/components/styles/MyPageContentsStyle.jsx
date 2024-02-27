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

  padding: 30px;
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

export const AddBtnLabel = styled.label`
  background-color: var(--subColor1);
  width: 100%;
  padding: 0.7rem 4.4rem;

  border-radius: 0.8rem;

  box-shadow: 0rem 0rem 0.3rem 0rem var(--subColor1);
  text-align: center;
  font-size: 1.2rem;

  cursor: pointer;

  &:hover {
    background-color: var(--subColor2);
    box-shadow: 0rem 0rem 0.3rem 0rem var(--subColor2);
    transform: scale(2, 2);
    transition: all 0.3s; // 시간차두고 바뀌도록 추가
    transition-duration: 0.2s;
  }
`;

export const PhotoAddBtn = styled.div`
  min-width: 50px;
  max-width: 300px;
  cursor: pointer;
`;

export const EditBtn = styled.button`
  background-color: var(--subColor1);
  width: 100%;
  padding: 0.7rem 2rem;

  border: none;
  border-radius: 0.8rem;

  box-shadow: 0rem 0rem 0.3rem 0rem var(--subColor1);
  text-align: center;
  font-size: 1.2rem;

  cursor: pointer;

  &:hover {
    background-color: var(--subColor2);
    box-shadow: 0rem 0rem 0.3rem 0rem var(--subColor2);
    transition: all 0.5s; // 시간차두고 바뀌도록 추가
    transform: scale(1.06, 1.06);
  }
`;

export const DoneBtn = styled.button`
  background-color: var(--subColor1);
  padding: 0.7rem 2rem;

  border: none;
  border-radius: 0.8rem;

  box-shadow: 0rem 0rem 0.3rem 0rem var(--subColor1);
  text-align: center;
  font-size: 1.2rem;

  cursor: pointer;

  &:hover {
    background-color: var(--subColor2);
    box-shadow: 0rem 0rem 0.3rem 0rem var(--subColor2);
    transition: all 0.5s; // 시간차두고 바뀌도록 추가
    transform: scale(1.06, 1.06);
  }
`;

export const CancelBtn = styled.button`
  background-color: var(--mainColor);

  padding: 0.7rem 2rem;

  border: none;
  border-radius: 0.8rem;

  box-shadow: 0rem 0rem 0.3rem 0rem var(--mainColor);
  text-align: center;
  font-size: 1.2rem;

  cursor: pointer;

  &:hover {
    background-color: var(--mainColor);
    box-shadow: 0rem 0rem 0.3rem 0rem var(--mainColor);
    transition: all 0.5s; // 시간차두고 바뀌도록 추가
    transform: scale(1.06, 1.06);
  }
`;
