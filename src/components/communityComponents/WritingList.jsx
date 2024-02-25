import React, { useState } from 'react';
import { useQuery } from 'react-query';
import { deleteWrite, getWriteList } from './CommunitySupabase';
import {
  WriteButtons,
  WriteConteiner,
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

const WritingList = () => {
  const { isLoading, isError, data } = useQuery('communityWriteList', getWriteList);
  const [modalOpen, setModalOpen] = useState(false);
  const [editFormId, setEditFormId] = useState(null);
  const [writeId, setWriteId] = useState(null);

  const [mutation] = useSetMutation(deleteWrite, 'communityWriteList');

  const onClicDeleteHandler = (id) => {
    mutation.mutate(id);
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
    return <div>로딩 중입니다</div>;
  }
  if (isError) {
    alert('글의 정보를 가져오지 못했습니다.');
    return <div>Not found</div>;
  }
  return (
    <>
      {modalOpen ? <CommentInputForm onClickCommentHandler={onClickCommentHandler} writeId={writeId} /> : false}
      {data
        .sort((a, b) => {
          return new Date(b.date).getTime() - new Date(a.date).getTime();
        })
        .map((item) => {
          return (
            <WriteListSection key={item.id}>
              {editFormId === item.id ? (
                <CommunityWriteEditForm item={item} setEditFormId={setEditFormId} />
              ) : (
                <WriteConteiner>
                  <WriteHead>
                    <WriteImage src={item.avatar} />
                    <WriteNickName>{item.nickname}</WriteNickName>
                  </WriteHead>
                  <WriteContent>{item.content}</WriteContent>
                  <WriteFoot>
                    <WriteDate>{getFormattedDate(item.date)}</WriteDate>
                    <WriteButtons>
                      <button onClick={() => onClickCommentHandler(item.id)}>댓글</button>
                      <button onClick={() => onClickEditForm(item.id)}>수정</button>
                      <button onClick={() => onClicDeleteHandler(item.id)}>삭제</button>
                    </WriteButtons>
                  </WriteFoot>
                </WriteConteiner>
              )}
              <CommentList writeId={item.id} />
            </WriteListSection>
          );
        })}
    </>
  );
};

export default WritingList;
