import { ComentInputFormBackGround, CommentInputFormStyle } from 'components/styles/ComunityStyle';
import React from 'react';
import { insertComment } from './supabaseTest';
import useInput from 'hooks/useInput';

const CommentInputForm = ({ onClickCommentHandler, writeId }) => {
  const [comment, , onChangeContentHandler] = useInput({
    writeComment: ''
  });
  const { writeComment } = comment;
  const onSubmitHandler = async (e) => {
    e.preventDefault();
    const newComment = {
      nickname: '보라돌이',
      userId: 'qube7089',
      writeId,
      comment: writeComment
    };
    insertComment(newComment);
    onClickCommentHandler();
  };
  return (
    <ComentInputFormBackGround>
      <CommentInputFormStyle onSubmit={onSubmitHandler}>
        <p>보라돌이</p>
        <input
          maxLength={'80'}
          placeholder="최대 80자까지만 입력할 수 있습니다."
          name="writeComment"
          value={writeComment}
          onChange={onChangeContentHandler}
        />
        <button type="submit">등록</button>
        <button type="button" onClick={onClickCommentHandler}>
          취소
        </button>
      </CommentInputFormStyle>
    </ComentInputFormBackGround>
  );
};

export default CommentInputForm;
