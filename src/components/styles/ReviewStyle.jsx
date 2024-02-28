import styled from 'styled-components';

export const ReviewHeader = styled.div`
  padding: 10px;
  text-align: center;
  background-color: #eee;
  h1 {
    font-size: 50px;
  }
`;
export const ReviewFormWrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 5%;
`;
export const FormContainer = styled.form`
  width: 60%;
  height: 80vh;
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  border: 1px solid #eee;
  text-align: center;
`;
export const AddFormContent = styled.div`
  display: flex;
  flex-direction: row;
`;
export const AddFormImg = styled.div`
  width: 50%;
  display: flex;
  flex-direction: row;
  align-items: center;
  & > label > img {
    width: 100%;
  }
  & > label > input {
    display: none;
  }
  &input {
    height: 24px;
    outline: none;
    padding: 6px;
  }
`;
export const AddImgText = styled.div`
  cursor: pointer;
  &:hover {
    transform: scale(1.1);
  }
`;
export const AddFormTextarea = styled.textarea`
  width: 50%;
  height: 65vh;
  padding: 10px;
  border: none;
`;
export const ContentsList = styled.div`
  width: 40%;
  height: 70vh;
  background-color: skyblue;
`;
