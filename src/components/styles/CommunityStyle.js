import styled, { css } from 'styled-components';

// 공통으로 사용할 버튼
export const CommunityBtn = styled.button`
  border: none;
  background-color: lightgray;
  width: 40px;
  height: 25px;
  border-radius: 8px;
  background-color: var(--subColor1);
  margin: auto;
  ${(props) =>
    props.background === 'danger' &&
    css`
      background-color: var(--mainColor);
      margin: 0 0 0 auto;
    `};
`;
// Community.jsx style
export const CommunityDiv = styled.div`
  width: 100%;
`;

// InputForm.jsx style.
export const CommunityForm = styled.form`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 95%;
  height: 50px;
  box-shadow: 0px 0px 3px 1px gray;
  margin: 2.5%;
  border-radius: 8px;
`;

export const CommunityInput = styled.input`
  width: 40%;
  height: 70%;
`;

// Community.jsx
export const Main = styled.main`
  margin: 2.5%;
  padding: 0.5px;
  background-color: lightgray;
`;

// WriteList.jsx style.
export const WriteListSection = styled.section`
  display: flex;
  justify-content: space-evenly;
  margin: 2% 0;
`;
export const WriteContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 40%;
  height: 250px;
  padding: 1%;
  background-color: whitesmoke;
  border-radius: 12px;
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
  background-color: lightgray;
  border-radius: 8px;
  width: 40%;
  height: 35%;
  margin: 0 auto;
`;

export const WriteContent = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: lightgrey;
  height: 35%;
  padding: 1.5%;
  border-radius: 8px;
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
  width: 50%;
  display: flex;
  justify-content: space-between;
`;

// CommunityWriteEditForm.jsx style(WritingList.jsx 그대로 사용하는데 일부만 변경)
export const EditFormInput = styled.textarea`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid black;
  height: 35%;
  padding: 1.5%;
`;

// CommentList.jsx style
export const CommentListSection = styled.section`
  background-color: whitesmoke;
  border-radius: 12px;
  padding: 1%;
  width: 40%;
  height: 250px;
  overflow: auto;
`;

export const CommentListContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: lightgray;
  border-radius: 8px;
  margin: 2%;
  min-height: 100px;
  padding: 2%;
`;

export const CommentListInfo = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

export const CommentListComment = styled.p`
  background-color: whitesmoke;
  margin: 1%;
  padding: 1%;
  border-radius: 8px;
  min-height: 50px;
`;

// CommentInputForm.jsx style
export const CommentInputFormBackGround = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgb(0, 0, 0, 0.8);
`;

export const CommentInputFormStyle = styled.form`
  width: 300px;
  height: 200px;
  z-index: 999;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 8px;
  background-color: whitesmoke;
  padding: 1%;
`;
