import { supabase } from 'api/supabase/supabase';

export const readUserInfo = async () => {
  let { data, error } = await supabase.from('usersAccounts').select('*');
  const [spreadData] = data;
  if (error) {
    alert('오류로 인해 정보를 받아오지 못 하고 있습니다.');
  }
  return spreadData;
};
