import { supabase } from 'api/supabase/supabase';

export const readUserInfo = async () => {
  let { data, error } = await supabase.from('usersAccounts').select('*');
  console.log(data);
  return data;
};
