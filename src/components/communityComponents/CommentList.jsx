import {
  CommentListButton,
  CommentListComment,
  CommentListContainer,
  CommentListInfo,
  CommentListSection
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
      {filterComment
        .sort((a, b) => {
          return new Date(b.date).getTime() - new Date(a.date).getTime();
        })
        .map((item) => {
          return (
            <CommentListContainer key={item.id}>
              <CommentListInfo>
                <p>{item.nickname}</p>
                <p>{getFormattedDate(item.date)}</p>
              </CommentListInfo>
              <CommentListComment>{item.comment}</CommentListComment>
              <CommentListButton onClick={() => mutation.mutate(item.id)}>삭제</CommentListButton>
            </CommentListContainer>
          );
        })}
    </CommentListSection>
  );
};

export default CommentList;
