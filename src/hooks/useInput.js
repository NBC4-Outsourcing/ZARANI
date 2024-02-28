import { useCallback, useState } from 'react';

const useInput = (initialForm) => {
  const [form, setForm] = useState(initialForm);

  //onChange
  const onChange = useCallback((e) => {
    const { name, value } = e.target;
    setForm((preForm) => ({ ...preForm, [name]: value }));
  }, []);
  const reset = useCallback(() => setForm(initialForm), [initialForm]);

  return [form, setForm, onChange, reset];
};

export default useInput;
