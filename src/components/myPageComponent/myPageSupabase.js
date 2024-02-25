import { supabase } from 'api/supabase/supabase';

export const readUserInfo = async () => {
  const { data, error } = await supabase.from('usersAccounts').select('*');
  const [spreadData] = data;
  if (error) {
    alert('오류로 인해 정보를 받아오지 못 하고 있습니다.');
  }
  return spreadData;
};

export const updateUserInfo = async (objectInfo, id) => {
  const { error } = await supabase.from('countries').update(objectInfo).eq('id', id);
  if (error) {
    alert('정보가 변경되지 않았습니다.');
  }
};
