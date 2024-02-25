import { supabase } from 'api/supabase/supabase';

const getComunityList = async () => {
  try {
    const data = (await supabase.from('comunityWrite').select('*')).data;
    return data;
  } catch (error) {
    console.log(error);
    alert('오류가 발생 하였습니다.');
  }
};

export { getComunityList };
