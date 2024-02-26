import {
  CommunityBtn,
  EditFormInput,
  WriteButtons,
  WriteContainer,
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
import defaultImage from 'assets/defaultImage.png';

const CommunityWriteEditForm = ({ item, setEditFormId }) => {
  const [mutation] = useSetMutation(updateWrite, 'communityWriteList');
  const [changeContent, , onChangeContentHandler, ,] = useInput({
    changeContents: item.content
  });

  const { changeContents } = changeContent;

  const onClickChangeContentBtn = (id) => {
    const newContent = {
      content: changeContents
    };
    mutation.mutate([newContent, id]);
    setEditFormId(null);
  };

  const onClickCancelBtn = () => {
    setEditFormId(null);
  };
  return (
    <WriteContainer>
      <WriteHead>
        <WriteImage src={item.avatar ? item.avatar : defaultImage} />
        <WriteNickName>{item.nickname}</WriteNickName>
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
          <CommunityBtn onClick={() => onClickChangeContentBtn(item.id)}>수정완료</CommunityBtn>
          <CommunityBtn background={'danger'} onClick={onClickCancelBtn}>
            취소
          </CommunityBtn>
        </WriteButtons>
      </WriteFoot>
    </WriteContainer>
  );
};

export default CommunityWriteEditForm;
