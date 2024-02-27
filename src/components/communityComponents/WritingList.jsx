import React, { useRef, useState } from 'react';
import { deleteWrite } from './CommunitySupabase';
import {
  CommunityBtn,
  Main,
  WriteButtons,
  WriteCommentList,
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
  const [editFormId, setEditFormId] = useState(null);
  const [writeId, setWriteId] = useState(null);
  const [commentWriteCheck, setCommentWriteCheck] = useState(null);
  const [commentListCheck, setCommentListCheck] = useState(null);
  const [mutation] = useSetMutation(deleteWrite, 'communityWriteList');

  const onClickDeleteHandler = (id) => {
    const filterComment = commentList.filter((item) => {
      return item.writeId === id;
    });
    if (filterComment.length === 0) {
      if (window.confirm('삭제하시겠습니까?')) mutation.mutate(id);
    } else {
      alert('댓글이 있어서 삭제가 불가능 합니다.');
    }
  };

  const onClickEditForm = (id) => {
    setEditFormId(id);
  };

  const onClickCommentHandler = (id) => {
    if (commentWriteCheck === id) {
      setCommentWriteCheck(null);
    } else {
      setCommentWriteCheck(id);
    }
    if (writeId) {
      setWriteId(null);
    } else {
      setWriteId(id);
    }
  };

  const onClickCommentListBtn = (id) => {
    if (id === commentListCheck) {
      setCommentListCheck(null);
    } else {
      setCommentListCheck(id);
    }
  };

  return (
    <Main>
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
                  <WriteContent
                    onClick={() => {
                      onClickCommentListBtn(item.id);
                    }}
                  >
                    {item.content}
                  </WriteContent>
                  <WriteFoot>
                    <WriteDate>{getFormattedDate(item.date)}</WriteDate>
                    <WriteButtons>
                      <CommunityBtn onClick={() => onClickCommentHandler(item.id)}>댓글</CommunityBtn>
                      {userData.email === item.userId ? (
                        <>
                          <CommunityBtn onClick={() => onClickEditForm(item.id)}>수정</CommunityBtn>
                          <CommunityBtn $background={'danger'} onClick={() => onClickDeleteHandler(item.id)}>
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
              {commentWriteCheck === item.id ? (
                <CommentInputForm
                  onClickCommentHandler={onClickCommentHandler}
                  writeId={writeId}
                  userData={userData}
                  commentListCheck={commentListCheck}
                  onClickCommentListBtn={onClickCommentListBtn}
                />
              ) : (
                false
              )}

              {commentListCheck === item.id ? (
                <CommentList writeId={item.id} commentList={commentList} userData={userData} />
              ) : (
                false
              )}
            </WriteListSection>
          );
        })}
    </Main>
  );
};

export default WritingList;
