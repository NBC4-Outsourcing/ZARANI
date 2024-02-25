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
  const { error } = await supabase.from('usersAccounts').update(objectInfo).eq('id', id);
  if (error) {
    console.log(error);
    alert('정보가 변경되지 않았습니다.');
  }
};

export const uploadImage = async (filePath, image) => {
  try {
    const { data, error } = await supabase.storage.from('unAuthUserImage').upload(filePath, image, {
      cacheControl: '3600',
      upsert: true
    });

    if (error) {
      console.error('파일 업로드 오류:', error.message);
      throw error;
    }
    return data;
  } catch (error) {
    console.log(error);
  }
};
