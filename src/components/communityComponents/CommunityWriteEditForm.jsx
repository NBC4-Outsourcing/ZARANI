import {
  EditFormInput,
  WriteButtons,
  WriteConteiner,
  WriteDate,
  WriteFoot,
  WriteHead,
  WriteImage,
  WriteNickName
} from 'components/styles/CommunityStyle';
import React from 'react';
import { getFormattedDate } from './formattedDate';
import useInput from 'hooks/useInput';
import { updateWrite } from './CommunitySupabase';
import useSetMutation from 'hooks/useSetMutations';

const CommunityWriteEditForm = ({ item, setEditFormId }) => {
  const [mutation] = useSetMutation(updateWrite, 'communityWriteList');
  const [changeContent, , onChangeContentHandler, ,] = useInput({
    changeContents: item.content
  });

  const { changeContents } = changeContent;

  const onClickChnageContentBtn = (id) => {
    const newContent = {
      content: changeContents
    };
    const check = [newContent, id];
    mutation.mutate(check);
    setEditFormId(null);
  };

  const onClickCancleBtn = () => {
    setEditFormId(null);
  };
  return (
    <WriteConteiner>
      <WriteHead>
        <WriteImage src={item.avatar} />
        <WriteNickName>0 6{item.nickname}</WriteNickName>
      </WriteHead>
      <EditFormInput
        name="changeContents"
        value={changeContents}
        onChange={onChangeContentHandler}
        maxLength={'80'}
        placeholder="최대 80자까지 입력할 수 있습니다."
      />
      <WriteFoot>
        <WriteDate>{getFormattedDate(item.date)}</WriteDate>
        <WriteButtons>
          <button onClick={() => onClickChnageContentBtn(item.id)}>수정완료</button>
          <button onClick={onClickCancleBtn}>취소</button>
        </WriteButtons>
      </WriteFoot>
    </WriteConteiner>
  );
};

export default CommunityWriteEditForm;
