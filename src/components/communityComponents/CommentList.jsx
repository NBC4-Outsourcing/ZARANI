import {
  CommentListBtnBackground,
  CommentListComment,
  CommentListContainer,
  CommentListHead,
  CommentListInfo,
  CommentListSection,
  CommentListTitle,
  CommunityBtn,
  NoComment
} from 'components/styles/CommunityStyle';
import React from 'react';
import { deleteComment } from './CommunitySupabase';
import { getFormattedDate } from './formattedDate';
import useSetMutation from 'hooks/useSetMutations';

const CommentList = ({ writeId, commentList, userData }) => {
  const filterComment = commentList?.filter((item) => item.writeId === writeId);
  const [mutation] = useSetMutation(deleteComment, 'commentWriteList');

  const onClickCommentDeleteHandler = (id) => {
    if (window.confirm('삭제하시겠습니까?')) mutation.mutate(id);
  };

  return (
    <CommentListSection>
      <CommentListTitle>댓글 목록</CommentListTitle>
      {filterComment.length !== 0 ? (
        filterComment
          .sort((a, b) => {
            return new Date(b.date).getTime() - new Date(a.date).getTime();
          })
          .map((item) => {
            return (
              <CommentListContainer key={item.id}>
                <CommentListInfo>
                  <CommentListHead>
                    <p>{getFormattedDate(item.date)}</p>
                    <p>{item.nickname}</p>
                  </CommentListHead>
                  <CommentListComment>{item.comment}</CommentListComment>
                </CommentListInfo>
                {userData.email === item.userId ? (
                  <CommentListBtnBackground>
                    <CommunityBtn $background={'danger'} onClick={() => onClickCommentDeleteHandler(item.id)}>
                      삭제
                    </CommunityBtn>
                  </CommentListBtnBackground>
                ) : (
                  false
                )}
              </CommentListContainer>
            );
          })
      ) : (
        <NoComment>댓글이 없습니다.</NoComment>
      )}
    </CommentListSection>
  );
};

export default CommentList;
