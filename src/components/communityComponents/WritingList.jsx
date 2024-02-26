import React, { useState } from 'react';
import { useQuery } from 'react-query';
import { deleteWrite, getCommentList, getWriteList } from './CommunitySupabase';
import {
  CommunityBtn,
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
import Loading from '../common/Loading';

const WritingList = () => {
  const { isLoading, isError, data: writeList } = useQuery('communityWriteList', getWriteList);
  const { isLoading: commentListLoading, data: commentList } = useQuery('commentWriteList', getCommentList);
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

  if (isLoading) {
    return <Loading />;
  }
  if (isError) {
    alert('글의 정보를 가져오지 못했습니다.');
    return <div>Not found</div>;
  }
  return (
    <>
      {modalOpen ? <CommentInputForm onClickCommentHandler={onClickCommentHandler} writeId={writeId} /> : false}
      {writeList
        .sort((a, b) => {
          return new Date(b.date).getTime() - new Date(a.date).getTime();
        })
        .map((item) => {
          return (
            <WriteListSection key={item.id}>
              {editFormId === item.id ? (
                <CommunityWriteEditForm item={item} setEditFormId={setEditFormId} />
              ) : (
                <WriteContainer>
                  <WriteHead>
                    <WriteImage src={item.avatar} />
                    <WriteNickName>{item.nickname}</WriteNickName>
                  </WriteHead>
                  <WriteContent>{item.content}</WriteContent>
                  <WriteFoot>
                    <WriteDate>{getFormattedDate(item.date)}</WriteDate>
                    <WriteButtons>
                      <CommunityBtn onClick={() => onClickCommentHandler(item.id)}>댓글</CommunityBtn>
                      <CommunityBtn onClick={() => onClickEditForm(item.id)}>수정</CommunityBtn>
                      <CommunityBtn background={'danger'} onClick={() => onClickDeleteHandler(item.id)}>
                        삭제
                      </CommunityBtn>
                    </WriteButtons>
                  </WriteFoot>
                </WriteContainer>
              )}
              <CommentList writeId={item.id} commentList={commentList} isLoading={commentListLoading} />
            </WriteListSection>
          );
        })}
    </>
  );
};

export default WritingList;
