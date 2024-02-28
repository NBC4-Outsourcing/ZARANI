import styled from 'styled-components';

// ReviewPage
export const ReviewContainer = styled.div`
  width: 100%;
  display: flex;
  text-align: center;
  justify-content: space-around;
  padding: 0 1%;
`;

// ReviewHeader
export const ReviewHeaderDiv = styled.div`
  width: 100%;
  padding: 1rem;
  margin-bottom: 2%;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  box-shadow: 0 2px 3px 2px var(--subColor2);
  background-color: var(--subColor2);
  h1 {
    font-size: 3rem;
  }
`;

export const Title = styled.div`
  padding: 0 1rem;

  text-align: center;
  font-size: 2rem;
  font-weight: bold;
`;

// ReviewForm
export const ReviewFormComponentDiv = styled.div`
  width: 48%;
`;

export const ReviewFormWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;
export const FormContainer = styled.form`
  width: 100%;
  height: 90vh;
  padding: 1rem;
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  box-shadow: 0rem 0rem 0.3rem 0rem var(--subColor2);
  border-radius: 1rem;
`;
export const ReviewNickName = styled.div`
  width: 15%;
  margin: 0 auto;
  padding: 1rem;
  font-size: 1rem;
  font-weight: 700;
  text-align: center;
  background-color: var(--subColor2);
  border-radius: 1rem;
`;
export const AddFormContent = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;
export const AddFormImg = styled.div`
  width: 45%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

  & > label > img {
    width: 100%;
    cursor: pointer;
    box-shadow: 0rem 0rem 0.3rem 0rem var(--subColor2);
    border-radius: 1rem;
    &:hover {
      transition: all 0.5s;
      transform: scale(1.05, 1.05);
    }
  }
  & > label > input {
    display: none;
  }
`;

export const ImgMessage = styled.div`
  margin: 0 auto;
  width: 100%;
  padding: 0 2rem;
  display: flex;
  align-items: flex-end;
  text-align: center;
  flex-direction: row;
  justify-content: space-evenly;
  img {
    width: 10%;
  }
`;
export const ImgCancelBtn = styled.button`
  width: 40%;
  padding: 0.5rem;
  border: none;
  border-radius: 5px;
  font-size: 1rem;
  background-color: var(--subColor1);
  cursor: pointer;
  &:hover {
    background-color: var(--subColor2);
  }
`;

export const AddFormTextarea = styled.textarea`
  width: 50%;
  height: 60vh;
  padding: 1rem;
  border: none;
  font-size: 1.2rem;
`;

export const AddBtnDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  margin: 0 1%;
`;

export const AddBtn = styled.button`
  width: 15%;
  padding: 7px;
  border: none;
  border-radius: 5px;
  font-size: 1.2rem;
  background-color: var(--subColor1);
  cursor: pointer;
  &:hover {
    background-color: var(--subColor2);
    transition: all 0.5s;
    transform: scale(1.05, 1.2);
  }
`;

// ReviewList
export const ContentsList = styled.div`
  width: 40%;
  padding: 1rem 0;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  border-radius: 1rem;
`;

export const ListMapWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const ContentWrapper = styled.div`
  width: 95%;
  height: 50vh;
  display: flex;
  flex-direction: row;
  align-items: center;
  img {
    width: 60%;
    height: 35vh;
    padding: 1rem;
    object-fit: contain;
  }
`;
export const ToggleContent = styled.div`
  padding: 1rem;
  width: 95%;
  box-shadow: 0 2px 3px 2px var(--subColor2);
  background-color: var(--subColor2);
  border-radius: 1rem;
  white-space: nowrap; /* 텍스트를 한 줄에만 표시 */
  overflow: hidden; /* 넘치는 텍스트를 숨김 */
  text-overflow: ellipsis; /* 넘치는 텍스트를 줄임표로 표시 */
  max-width: 93vh;
  &:hover {
    background-color: var(--mainColor);
    box-shadow: 0rem 0rem 0.3rem 0rem var(--mainColor);
    transition: all 0.5s;
    transform: scale(1.05, 1.2);
  }
`;
export const ContentImgWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ListNickName = styled.div`
  width: 50%;
  padding: 1rem;
  border-radius: 1rem;
  font-size: 1.2rem;
  font-weight: 700;
  background-color: var(--subColor2);
`;
export const ContentBtnsWrapper = styled.div`
  width: 100%;
  height: 35vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`;
export const ListContent = styled.div`
  height: 30vh;
  width: 100%;
  padding: 1rem;
  border-radius: 0.5rem;
  background-color: var(--subColor2);
`;

export const ContentBtns = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  button {
    width: 30%;
    padding: 0.5rem;
    border: none;
    border-radius: 0.5rem;
    cursor: pointer;
  }
  button:nth-child(1) {
    background-color: var(--subColor1);
    &:hover {
      background-color: var(--subColor2);
      transition: all 0.5s;
      transform: scale(1.05, 1.05);
    }
  }
  button:nth-child(2) {
    background-color: var(--mainColor);
    &:hover {
      background-color: var(--subColor2);
      transition: all 0.5s;
      transform: scale(1.05, 1.05);
    }
  }
`;

// ReviewUpdateForm
export const UpdateList = styled.div`
  width: 95%;
  height: 50vh;
  display: flex;
  flex-direction: column;
`;

export const UpdateImgWrapper = styled.div`
  width: 100%;
  height: 50vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  & > label > img {
    width: 70%;
    cursor: pointer;
    box-shadow: 0rem 0rem 0.3rem 0rem var(--subColor2);
    border-radius: 1rem;
    &:hover {
      transition: all 0.5s;
      transform: scale(1.05, 1.05);
    }
  }
  > label > input {
    display: none;
  }
`;

export const UpdateImg = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 2rem;
`;
export const UpdateBtnsWrapper = styled.div`
  width: 100%;
  height: 35vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`;
export const UpdateText = styled.textarea`
  width: 100%;
  height: 25vh;
  padding: 1rem;
  border-radius: 0.5rem;
`;
