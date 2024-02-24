import { createClient } from '@supabase/supabase-js';
const supabaseUrl = 'https://zcxvtpduxgfcqjbsfxgo.supabase.co';
const supabaseKey = process.env.REACT_APP_SUPABASE_MY_PAGE_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

export const readUserInfo = async () => {
  let { data, error } = await supabase.from('myPage').select('*');
  return data;
};
