import {
  CommentListButton,
  CommentListComment,
  CommentListContainer,
  CommentListInfo,
  CommentListSection
} from 'components/styles/ComunityStyle';
import React from 'react';
import { useQuery } from 'react-query';
import { deleteComment, getCommentList } from './ComunitySupabase';
import { getFormattedDate } from './formattedDate';
import useSetMutation from 'hooks/useSetMutations';

const CommentList = ({ writeId }) => {
  const { isLoading, isError, data } = useQuery('commentWriteList', getCommentList);
  const filterComment = data?.filter((item) => item.writeId === writeId);
  const [mutation] = useSetMutation(deleteComment, 'commentWriteList');

  if (isLoading) {
    return <div>로딩 중입니다.</div>;
  }
  if (isError) {
    alert('데이터를 가져오는 동안 에러가 발생했습니다.');
  }
  return (
    <CommentListSection>
      {filterComment.map((item) => {
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
