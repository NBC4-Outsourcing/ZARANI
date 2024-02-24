import { ComunityForm, ComunityInput } from 'components/styles/ComunityStyle';
import useInput from 'hooks/useInput';

const InputForm = () => {
  const [content, onChangeContentHandler] = useInput();

  return (
    <ComunityForm>
      <label>보라돌이</label>
      <ComunityInput
        maxLength={'80'}
        placeholder="최대 80자까지만 입력할 수 있습니다."
        value={content}
        onChange={onChangeContentHandler}
      />
      <button>등록</button>
    </ComunityForm>
  );
};

export default InputForm;
