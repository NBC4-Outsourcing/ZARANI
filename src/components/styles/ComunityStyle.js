import styled from 'styled-components';

// InputForm.jsx style.
export const ComunityForm = styled.form`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 95%;
  height: 50px;
  box-shadow: 0px 0px 3px 1px gray;
  margin: 2.5%;
  border-radius: 8px;
`;

export const ComunityInput = styled.input`
  width: 40%;
  height: 70%;
`;

// WriteList.jsx style.
export const WriteListSection = styled.section`
  display: flex;
  justify-content: space-evenly;
  margin: 2% 0;
`;
export const WriteConteiner = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border: 1px solid black;
  width: 40%;
  height: 250px;
  padding: 1%;
`;

export const WriteHead = styled.div`
  display: flex;
  align-items: center;
`;

export const WriteImage = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 50%;
`;

export const WriteNickName = styled.label`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid black;
  width: 40%;
  height: 35%;
  margin: 0 5%;
`;

export const WriteContent = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid black;
  height: 35%;
  padding: 1.5%;
`;

export const WriteFoot = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const WriteDate = styled.p`
  font-size: 14px;
`;

export const WriteButtons = styled.div`
  width: 30%;
  display: flex;
  justify-content: space-between;
`;

// CommentList.jsx style
export const CommentListSection = styled.section`
  border: 1px solid black;
  width: 40%;
`;
