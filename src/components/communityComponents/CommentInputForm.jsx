import {
  CommentInputBtnDiv,
  CommentInputFormBackGround,
  CommentInputFormStyle,
  CommentInputTextarea,
  CommentListName,
  CommunityBtn
} from 'components/styles/CommunityStyle';
import React, { useEffect, useRef } from 'react';
import { insertComment } from './CommunitySupabase';
import useInput from 'hooks/useInput';
import useSetMutation from 'hooks/useSetMutations';

const CommentInputForm = ({ onClickCommentHandler, writeId, userData, commentListCheck, onClickCommentListBtn }) => {
  const [comment, , onChangeContentHandler] = useInput({
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
    const newComment = {
      nickname,
      userId: userData.email,
      writeId,
      comment: writeComment
    };
    mutation.mutate(newComment);
    onClickCommentHandler();
    if (commentListCheck === writeId) {
      return;
    }
    onClickCommentListBtn(writeId);
  };
  return (
    <CommentInputFormBackGround>
      <CommentInputFormStyle onSubmit={onSubmitHandler}>
        <CommentListName>{nickname}</CommentListName>
        <CommentInputTextarea
          ref={CommentInputRef}
          maxLength={'80'}
          placeholder="최대 80자까지만 입력할 수 있습니다."
          name="writeComment"
          value={writeComment}
          onChange={onChangeContentHandler}
        />
        <CommentInputBtnDiv>
          <CommunityBtn type="submit">등록</CommunityBtn>
          <CommunityBtn background={'danger'} type="button" onClick={onClickCommentHandler}>
            취소
          </CommunityBtn>
        </CommentInputBtnDiv>
      </CommentInputFormStyle>
    </CommentInputFormBackGround>
  );
};

export default CommentInputForm;
