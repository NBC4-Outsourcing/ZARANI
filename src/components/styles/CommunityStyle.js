import { hover } from '@testing-library/user-event/dist/hover';
import styled, { css } from 'styled-components';

// 공통으로 사용할 버튼
export const CommunityBtn = styled.button`
  cursor: pointer;
  border: none;
  min-width: 50px;
  height: 30px;
  border-radius: 8px;
  transition: 0.5s ease-in-out;
  background-color: var(--subColor1);
  ${(props) =>
    props.$background === 'danger' &&
    css`
      background-color: var(--mainColor);
    `};

  &:hover {
    transform: scale(1.2);
  }
`;
// Community.jsx style
export const CommunityDiv = styled.div`
  width: 100%;
`;

export const CommunityErrorBackground = styled.div`
  background-color: var(--mainColor);
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  font-size: large;
  font-weight: bold;
`;

// CommunityHeader.jsx
export const CommunityHeaderMain = styled.header`
  border-bottom: 1px solid white;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 70px;
`;
export const CommunityHeaderTitle = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  margin-left: 10%;
`;

export const CommunityHeaderName = styled.p`
  height: 50%;
  font-size: 30px;
  font-weight: bold;
`;

export const CommunityHeaderLogoImage = styled.img`
  width: 200px;
  height: 70px;
  display: flex;
`;

export const CommunityHeaderProfileImage = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-left: auto;
`;

export const CommunityHeaderInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 40px;
`;

// InputForm.jsx style.
export const CommunityForm = styled.form`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 95%;
  height: 70px;
  box-shadow: 0px 0px 3px 0px gray;
  margin: 2.5%;
  padding: 2%;
  border-radius: 8px;
`;

export const CommunityInputName = styled.label`
  padding: 0.5% 1%;
  background-color: wheat;
  border-radius: 8px;
`;

export const CommunityInput = styled.input`
  width: 70%;
  height: 40px;
  background-color: wheat;
  border: none;
  border-radius: 12px;
  padding: 10px;
`;

// Community.jsx
export const Main = styled.main`
  margin: 2.5%;
  padding: 0.5px;
  border-radius: 12px;
  box-shadow: 0px 1px 3px 0px gray;
`;

// WriteList.jsx style.
export const WriteListSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 2% 0;
`;
export const WriteContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 80%;
  height: 250px;
  padding: 1%;
  border-radius: 12px;
  border: 2px solid lightgray;
  transition: 0.3s ease-in-out;
  &:hover {
    transform: scale(1.05);
  }
`;

export const WriteHead = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 30px;
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
  background-color: wheat;
  border-radius: 8px;
  width: 30%;
  height: 50%;
`;

export const WriteContent = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: wheat;
  height: 45%;
  padding: 1.5%;
  border-radius: 8px;
  cursor: pointer;
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
  justify-content: flex-end;
  gap: 5px;
`;

export const WriteCommentList = styled.div`
  display: none;
  width: 40%;
`;

// CommunityWriteEditForm.jsx style(WritingList.jsx 그대로 사용하는데 일부만 변경)
export const EditFormInput = styled.textarea`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 45%;
  padding: 3%;
  resize: none;
  border: none;
  border-radius: 12px;
  background-color: var(--subColor1);
`;

// CommentList.jsx style
export const CommentListSection = styled.section`
  border-radius: 12px;
  padding: 1%;
  width: 80%;
  height: 250px;
  margin-top: 10px;
  overflow: auto;
  scrollbar-width: none;
  border: 2px solid lightgray;
`;

export const CommentListTitle = styled.p`
  width: 100%;
  text-align: center;
`;

export const CommentListContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: wheat;
  border-radius: 8px;
  margin: 2%;
  min-height: 100px;
  padding: 2%;
`;

export const CommentListInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  margin: 2%;
`;

export const CommentListHead = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
  padding-bottom: 5px;
  border-bottom: 1px solid gray;
`;

export const CommentListComment = styled.p`
  margin: 1%;
  padding: 1%;
`;

export const CommentListBtnBackground = styled.div`
  margin-left: auto;
`;

export const NoComment = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
`;

// CommentInputForm.jsx style

export const CommentInputFormStyle = styled.form`
  width: 80%;
  height: 200px;
  border-radius: 8px;
  padding: 1%;
  border: 2px solid lightgray;
  margin-top: 3px;
`;

export const CommentListName = styled.p`
  width: 30%;
  height: 23%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: wheat;
  border-radius: 8px;
  margin: 0 auto;
`;

export const CommentInputTextarea = styled.textarea`
  width: 100%;
  height: 50%;
  margin-top: 5px;
  background-color: wheat;
  border: none;
  border-radius: 8px;
  padding: 15px;
  resize: none;
`;

export const CommentInputBtnDiv = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 5px;
`;
