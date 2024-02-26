import { CommunityBtn, CommunityForm, CommunityInput, CommunityInputName } from 'components/styles/CommunityStyle';
import useInput from 'hooks/useInput';
import { insertWriting } from './CommunitySupabase';
import useSetMutation from 'hooks/useSetMutations';

const CommunityInputForm = ({ userData }) => {
  // 커뮤니티 글 input value,onchange
  const [content, , onChangeContentHandler, reset] = useInput({
    writeContent: ''
  });
  const { avatar, nickname } = userData.user_metadata;

  const { writeContent } = content;
  const [mutation] = useSetMutation(insertWriting, 'communityWriteList');

  // 커뮤니티 글 등록 함수
  const onSubmitHandler = async (e) => {
    e.preventDefault();
    if (!writeContent) {
      alert('내용을 입력해주시기 바랍니다.');
      return;
    }
    const newWrite = {
      nickname,
      userId: userData.email,
      avatar,
      content: writeContent
    };
    mutation.mutate(newWrite);
    reset();
  };

  return (
    <div>
      <CommunityForm onSubmit={onSubmitHandler}>
        <CommunityInputName>{nickname}</CommunityInputName>
        <CommunityInput
          maxLength={'80'}
          placeholder="최대 80자까지만 입력할 수 있습니다."
          name="writeContent"
          value={writeContent}
          onChange={onChangeContentHandler}
        />
        <CommunityBtn type="submit">등록</CommunityBtn>
      </CommunityForm>
    </div>
  );
};

export default CommunityInputForm;
