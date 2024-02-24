import { CommentListContainer, CommentListSection } from 'components/styles/ComunityStyle';
import React from 'react';
import { useQuery } from 'react-query';
import { getCommentList } from './supabaseTest';
import { getFormattedDate } from './formattedDate';

const CommentList = ({ writeId }) => {
  const { isLoading, isError, data } = useQuery('commentWriteList', getCommentList);

  const filterComment = data?.filter((item) => item.writeId === writeId);
  if (isLoading) {
    return <div>로딩 중입니다.</div>;
  }
  return (
    <CommentListSection>
      {filterComment.map((item) => {
        return (
          <CommentListContainer key={item.id}>
            <div>
              <p>{item.nickname}</p>
              <p>{getFormattedDate(item.date)}</p>
            </div>
            <p>{item.comment}</p>
          </CommentListContainer>
        );
      })}
    </CommentListSection>
  );
};

export default CommentList;
