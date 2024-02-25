import {
  EditFormInput,
  WriteButtons,
  WriteConteiner,
  WriteDate,
  WriteFoot,
  WriteHead,
  WriteImage,
  WriteNickName
} from 'components/styles/ComunityStyle';
import React from 'react';
import { getFormattedDate } from './formattedDate';

const ComunityWriteEditForm = ({ item, setEditFormId }) => {
  const onClickCancleBtn = () => {
    setEditFormId(null);
  };
  return (
    <WriteConteiner>
      <WriteHead>
        <WriteImage src={item.avatar} />
        <WriteNickName>0
            6{item.nickname}</WriteNickName>
      </WriteHead>
      <EditFormInput>{item.content}</EditFormInput>
      <WriteFoot>
        <WriteDate>{getFormattedDate(item.date)}</WriteDate>
        <WriteButtons>
          <button>수정완료</button>
          <button onClick={onClickCancleBtn}>취소</button>
        </WriteButtons>
      </WriteFoot>
    </WriteConteiner>
  );
};

export default ComunityWriteEditForm;
