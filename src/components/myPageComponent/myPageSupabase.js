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

export const updateImage = async (filePath, image) => {
  const { data, error } = await supabase.storage.from('unAuthUserImage').upload(filePath, image, {
    cacheControl: '3600',
    upsert: false
  });
  alert('수정이 완료됐습니다.!');
  console.log(error);
  if (error) {
    alert('파일이 업로드 되지 않았어용.');
    return;
  }
};
