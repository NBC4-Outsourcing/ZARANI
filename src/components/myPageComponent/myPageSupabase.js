import { supabase } from 'api/supabase/supabase';

export const updateUserAccount = async ({ nickname, avatar }) => {
  const { error } = await supabase.auth.signUp({
    options: {
      data: {
        nickname,
        avatar
      }
    }
  });
  // if (error) {
  //   alert('회원정보가 저장되지 않았습니다.');
  // }
};

export const readUserAccount = async () => {
  const { data } = await supabase.auth.getUser();
  return data;
};

export const readUserInfo = async () => {
  const { data, error } = await supabase.from('usersAccounts').select('*');
  if (error) {
    alert('오류로 인해 정보를 받아오지 못 하고 있습니다.');
  }
  return data;
};

export const updateUserInfo = async (objectInfo, id) => {
  if (!id) return;
  const { error } = await supabase.from('usersAccounts').update(objectInfo).eq('id', id);
  if (error) {
    console.log(error);
    // alert('정보가 변경되지 않았습니다.');
  }
};

export const readMyReview = async () => {
  const { data, error } = await supabase.from('reviewWrite').select('*');

  if (error) {
    alert('오류로 인해 정보를 받아오지 못 하고 있습니다.');
  }
  return data;
};

export const uploadImage = async (filePath, image) => {
  const { data, error } = await supabase.storage.from('unAuthUserImage').upload(filePath, image, {
    cacheControl: '3600',
    upsert: true
  });

  if (error) {
    console.error('파일 업로드 오류', error.message);
    alert('정보를 받아오지 못하고 있습니다.');
  }
  return data;
};

export const downloadImage = async (filePath) => {
  try {
    const { data, error } = await supabase.storage.from('unAuthUserImage').download(filePath);
    if (error) {
      alert('이미지를 받아오지 못하고 있습니다. 문의해주세요.');
      return;
    }
    return data;
  } catch (error) {
    alert('이미지를 받아오지 못하고 있습니다.');
  }
};
