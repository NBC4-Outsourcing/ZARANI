import {
  CommentListComment,
  CommentListContainer,
  CommentListHead,
  CommentListInfo,
  CommentListSection,
  CommunityBtn,
  NoComment
} from 'components/styles/CommunityStyle';
import React from 'react';
import { deleteComment } from './CommunitySupabase';
import { getFormattedDate } from './formattedDate';
import useSetMutation from 'hooks/useSetMutations';

const CommentList = ({ writeId, commentList, isLoading }) => {
  const filterComment = commentList?.filter((item) => item.writeId === writeId);
  const [mutation] = useSetMutation(deleteComment, 'commentWriteList');

  if (isLoading) {
    return <div>로딩 중입니다.</div>;
  }
  return (
    <CommentListSection>
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
                <CommunityBtn background={'danger'} onClick={() => mutation.mutate(item.id)}>
                  삭제
                </CommunityBtn>
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
