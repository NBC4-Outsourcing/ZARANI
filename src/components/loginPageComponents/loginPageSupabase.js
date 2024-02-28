import { supabase } from 'api/supabase/supabase';

// auth 에서 유저의 정보를 가져옴
export const getLoginUserInfo = async () => {
  const { data } = await supabase.auth.getUser();
  return data;
};

// DB에서 데이터를 가져옴
export const getCurrentLoggedInUserList = async () => {
  const { data: currentUserList, error: getCurrentUserError } = await supabase.from('usersAccounts').select('*');
  if (getCurrentUserError) {
    return console.log('get User-Email List from DB => ', getCurrentUserError);
  }
  return currentUserList;
};

// DB에 데이터를 추가함 (data: 객체 형태)
export const insertCurrentLoginUser = async (data) => {
  const { error: insertUserError } = await supabase.from('usersAccounts').insert(data);
  if (insertUserError) {
    return console.log('insert User-Info Error => ', insertUserError);
  }
};

// DB에서 유저의 정보를 삭제함
export const removeCurrentLoginUser = async (data) => {
  const { error: removeUserError } = await supabase.from('usersAccounts').delete().eq('uid', data);
  if (removeUserError) {
    return console.log('remove User-Info Error => ', removeUserError);
  }
};
