import {
  CommentInputBtnDiv,
  CommentInputFormStyle,
  CommentInputTextarea,
  CommentListName,
  CommunityBtn
} from 'components/styles/CommunityStyle';
import React, { useEffect, useRef } from 'react';
import { insertComment } from './CommunitySupabase';
import useInput from 'hooks/useInput';
import useSetMutation from 'hooks/useSetMutations';

const CommentInputForm = ({ writeId, userData }) => {
  const [comment, , onChangeContentHandler, reset] = useInput({
    writeComment: ''
  });
  const CommentInputRef = useRef(null);
  const [mutation] = useSetMutation(insertComment, 'commentWriteList');
  const { writeComment } = comment;
  const { nickname } = userData.user_metadata;
  useEffect(() => {
    CommentInputRef.current.focus();
  }, []);
  const onSubmitHandler = async (e) => {
    e.preventDefault();
    if (!writeComment) {
      alert('댓글을 작성해주시기 바랍니다.');
      return;
    }
    if (window.confirm('댓글을 작성하시겠습니까?')) {
      const newComment = {
        nickname,
        userId: userData.email,
        writeId,
        comment: writeComment
      };
      mutation.mutate(newComment);
      reset();
    }
  };
  return (
    <CommentInputFormStyle onSubmit={onSubmitHandler}>
      <CommentListName>{nickname}</CommentListName>
      <CommentInputTextarea
        ref={CommentInputRef}
        maxLength={'80'}
        placeholder="최대 80자까지만 입력할 수 있습니다. (게시글을 누를경우 여기에 작성된 댓글들을 볼 수 있습니다.)"
        name="writeComment"
        value={writeComment}
        onChange={onChangeContentHandler}
      />
      <CommentInputBtnDiv>
        <CommunityBtn type="submit">등록</CommunityBtn>
      </CommentInputBtnDiv>
    </CommentInputFormStyle>
  );
};

export default CommentInputForm;
