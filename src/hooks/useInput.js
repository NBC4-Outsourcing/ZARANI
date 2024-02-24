const { useState } = require('react');

const useInput = () => {
  const [value, setValue] = useState('');

  const onChangeHandler = (e) => {
    setValue(e.target.value);
  };

  return [value, onChangeHandler];
};

export default useInput;
