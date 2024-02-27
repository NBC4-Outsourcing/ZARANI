import styled from 'styled-components';

export const ReviewContainer = styled.div`
  display: flex;
  gap: 2%;
`;
// ReviewForm
export const ReviewFormComponentDiv = styled.div`
  width: 100%;
`;
export const ReviewHeader = styled.div`
  padding: 10px;
  text-align: center;
  background-color: #eee;
  h1 {
    font-size: 50px;
  }
`;
export const ReviewFormDiv = styled.div`
  width: 95%;
  margin: 0 auto;
`;

export const ReviewFormWrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 3%;
`;
export const FormContainer = styled.form`
  width: 50%;
  height: 80vh;
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  border: 1px solid #eee;
  border-radius: 5px;
`;
export const ReviewNickName = styled.div`
  width: 15%;
  margin: 0 auto;
  padding: 10px;
  font-size: 20px;
  font-weight: 700;
  text-align: center;
  background-color: var(--subColor2);
  border-radius: 10px;
`;
export const AddFormContent = styled.div`
  display: flex;
`;
export const AddFormImg = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  & > label > img {
    width: 100%;
    cursor: pointer;
  }
  & > label > input {
    display: none;
  }
  &input {
    /* height: 20px; */
    /* outline: none; */
    /* padding: 6px; */
  }
`;

export const ImgMessage = styled.div`
  margin: 0 auto;
  width: 75%;
  padding: 10px;
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
  padding: 10px;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  background-color: var(--subColor1);
  cursor: pointer;
  &:hover {
    background-color: var(--subColor2);
  }
`;

export const AddFormTextarea = styled.textarea`
  width: 50%;
  height: 65vh;
  padding: 10px;
  border: none;
  font-size: 17px;
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
  font-size: 18px;
  background-color: var(--subColor1);
  cursor: pointer;
  &:hover {
    background-color: var(--subColor2);
  }
`;

// ReviewList
export const ContentsList = styled.div`
  width: 40%;
  height: 70vh;
  background-color: skyblue;

  img {
    width: 10%;
  }
`;
