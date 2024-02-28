import styled from 'styled-components';

export const MyPageContentsSection = styled.section`
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
  align-items: center;
  justify-content: space-between;
  border-radius: 1rem;

  padding: 20px;
  gap: 1.2rem;
`;

export const ImgWrapDiv = styled.div`
  display: flex;
  min-width: 240px;
  min-height: 220px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 1rem;
  gap: 1.8rem;

  @media screen and (max-width: 620px) {
    max-width: 200px;
    gap: 1.2rem;
  }
`;

export const ThumnailImg = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 220px;
  /* min-width: 100px; */
  min-height: 220px;

  > img {
    width: 100%;
    min-width: 100%;

    max-height: 220px;
    box-shadow: 0 2px 4px 3px lightgray;

    border-radius: 20px;
    object-fit: cover;
    @media screen and (max-width: 620px) {
      min-width: 200px;
      max-width: 100%;
      max-height: 100px;
      max-height: 100%;
    }
    @media screen and (max-width: 320px) {
      max-width: 100%;
      padding: 0.7rem 2rem;
      /* padding: 0.7rem 4.4rem; /* 화면 너비가 768px 이하일 때 패딩을 줄여서 찌그러지지 않도록 함 */
    }
  }
`;

export const ImgFileInput = styled.input`
  display: none;
`;

export const AddBtnLabel = styled.label`
  background-color: var(--subColor1);

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

  @media screen and (min-width: 1280px) {
    padding: 0.7rem 3.6rem;
  }
  @media screen and (max-width: 1280px) {
    padding: 0.7rem 3.8rem;
  }
  @media screen and (max-width: 620px) {
    max-width: 100%;
    padding: 0.7rem 3.8rem;
  }
`;

export const PhotoAddBtn = styled.div`
  min-width: 50px;
  max-width: 300px;
  text-align: center;

  cursor: pointer;
`;

export const ContentsBtnsDiv = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  gap: 1.2rem;
`;

export const EmailNickDiv = styled.div`
  display: flex;
  width: 100%;
  border-radius: 1rem;
  box-shadow: 0px 2px 4px 2px var(--subColor2);

  padding: 2rem;
`;

export const EmailNickWrap = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  gap: 2rem;
`;

export const EmailWrap = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;

  gap: 0.4rem;
`;

export const EmailP = styled.p`
  width: 100%;
  font-size: 1.2rem;
  font-weight: bold;
`;

export const EmailValueP = styled.p`
  width: 100%;
  font-size: 1.1rem;
`;

export const NickNameWrap = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  gap: 0.4rem;
`;

export const NickNameP = styled.p`
  width: 100%;
  font-size: 1.2rem;
  font-weight: bold;
`;

export const NickNameValueP = styled.p`
  width: 100%;
  font-size: 1.1rem;
`;

export const NickNameValuePut = styled.input`
  width: 100%;
  height: 2.4rem;

  padding: 0.8rem;
  border-radius: 0.8rem;

  font-size: 1.1rem;
  background-color: var(--subColor2);

  &:focus {
    background-color: #fff;
  }
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

export const DondNdCancelBtnDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  gap: 1rem;
`;
