import React, { useState } from 'react';
import { deleteWrite } from './CommunitySupabase';
import {
  CommunityBtn,
  Main,
  WriteButtons,
  WriteContainer,
  WriteContent,
  WriteDate,
  WriteFoot,
  WriteHead,
  WriteImage,
  WriteListSection,
  WriteNickName
} from 'components/styles/CommunityStyle';
import CommentList from './CommentList';
import CommentInputForm from './CommentInputForm';
import { getFormattedDate } from './formattedDate';
import CommunityWriteEditForm from './CommunityWriteEditForm';
import useSetMutation from 'hooks/useSetMutations';
import defaultImage from 'assets/defaultImage.png';

const WritingList = ({ userData, writeList, commentList }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [editFormId, setEditFormId] = useState(null);
  const [writeId, setWriteId] = useState(null);
  const [mutation] = useSetMutation(deleteWrite, 'communityWriteList');

  const onClickDeleteHandler = (id) => {
    const filterComment = commentList.filter((item) => {
      return item.writeId === id;
    });
    if (filterComment.length === 0) {
      mutation.mutate(id);
    } else {
      alert('댓글이 있어서 삭제가 불가능 합니다.');
    }
  };

  const onClickEditForm = (id) => {
    setEditFormId(id);
  };

  const onClickCommentHandler = (id) => {
    setModalOpen(!modalOpen);
    if (writeId) {
      setWriteId(null);
    } else {
      setWriteId(id);
    }
  };

  return (
    <Main>
      {modalOpen ? (
        <CommentInputForm onClickCommentHandler={onClickCommentHandler} writeId={writeId} userData={userData} />
      ) : (
        false
      )}
      {writeList
        .sort((a, b) => {
          return new Date(b.date).getTime() - new Date(a.date).getTime();
        })
        .map((item) => {
          return (
            <WriteListSection key={item.id}>
              {editFormId === item.id ? (
                <CommunityWriteEditForm item={item} setEditFormId={setEditFormId} userData={userData} />
              ) : (
                <WriteContainer>
                  <WriteHead>
                    <WriteImage src={item.avatar ? item.avatar : defaultImage} />
                    <WriteNickName>{item.nickname}</WriteNickName>
                  </WriteHead>
                  <WriteContent>{item.content}</WriteContent>
                  <WriteFoot>
                    <WriteDate>{getFormattedDate(item.date)}</WriteDate>
                    <WriteButtons>
                      <CommunityBtn onClick={() => onClickCommentHandler(item.id)}>댓글</CommunityBtn>
                      {userData.email === item.userId ? (
                        <>
                          <CommunityBtn onClick={() => onClickEditForm(item.id)}>수정</CommunityBtn>
                          <CommunityBtn background={'danger'} onClick={() => onClickDeleteHandler(item.id)}>
                            삭제
                          </CommunityBtn>
                        </>
                      ) : (
                        false
                      )}
                    </WriteButtons>
                  </WriteFoot>
                </WriteContainer>
              )}
              <CommentList writeId={item.id} commentList={commentList} userData={userData} />
            </WriteListSection>
          );
        })}
    </Main>
  );
};

export default WritingList;
