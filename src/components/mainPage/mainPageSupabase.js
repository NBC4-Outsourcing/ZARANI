import { supabase } from 'api/supabase/supabase';

const getCommunityList = async () => {
  try {
    const data = (await supabase.from('communityWrite').select('*')).data;
    const list = [data[0], data[1], data[2]];
    return list;
  } catch (error) {
    console.log(error);
    alert('오류가 발생 하였습니다.');
  }
};
const getUserImage = async () => {
  try {
    const data = (await supabase.from('usersAccounts').select('*')).data;
    return data[0].avatar;
  } catch (error) {
    console.log(error);
    alert('오류가 발생 하였습니다.');
  }
};

export { getCommunityList, getUserImage };
