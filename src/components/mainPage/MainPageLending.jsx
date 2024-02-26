import React, { useState } from 'react';
import { setAreaInfo } from 'shared/redux/modules/areaSlice';
import { useDispatch } from 'react-redux';

function MainPageLanding() {
  const [InputText, setInputText] = useState('');

  const dispatch = useDispatch();

  const onChange = (e) => {
    setInputText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const serchData = {
      serchTxt: InputText
    };
    dispatch(setAreaInfo(serchData));
    setInputText('');
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input placeholder="검색어를 입력하세요" onChange={onChange} value={InputText} />
        <button type="submit">검색</button>
      </form>
    </>
  );
}

export default MainPageLanding;
