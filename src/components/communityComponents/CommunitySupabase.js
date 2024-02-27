import { supabase } from 'api/supabase/supabase';
import { getLocalStorageJSON } from 'utils/getLocalStorageJSON';

const getUser = async () => {
  const { access_token } = getLocalStorageJSON();

  const {
    data: { user },
    error
  } = await supabase.auth.getUser(access_token);
  if (error) {
    console.error(error);
    return error;
  } else {
    return user;
  }
};

const insertWriting = async (newWrite) => {
  const { error: insertWrite } = await supabase.from('communityWrite').insert([newWrite]).select();
  if (insertWrite) {
    alert('글을 저장하지 못 했습니다.');
    console.error(insertWrite);
    return insertWrite;
  }
};

const getWriteList = async () => {
  const { data, error: getWrite } = await supabase.from('communityWrite').select('*');
  if (getWrite) {
    console.error(getWrite);
    alert('데이터를 가져오지 못 했습니다.');
    return getWrite;
  } else {
    return data;
  }
};

const updateWrite = async ([changeContent, id]) => {
  const { error: updateWrite } = await supabase.from('communityWrite').update(changeContent).eq('id', id);
  if (updateWrite) {
    alert('변경하지 못 했습니다.');
    console.error(updateWrite);
  }
};

const deleteWrite = async (id) => {
  const { error: deleteWrite } = await supabase.from('communityWrite').delete().eq('id', id).select();
  if (deleteWrite) {
    alert('삭제하지 못 했습니다.');
    console.error(deleteWrite);
  }
};

const insertComment = async (newComment) => {
  const { error: insertComment } = await supabase.from('commentWrite').insert([newComment]).select();
  if (insertComment) {
    console.error(insertComment);
    alert('댓글을 저장하지 못했습니다.');
  }
};

const getCommentList = async () => {
  const { data, error: getComment } = await supabase.from('commentWrite').select('*');
  if (getComment) {
    console.error(getComment);
    alert('데이터를 가져오지 못 했습니다.');
  } else {
    return data;
  }
};

const deleteComment = async (id) => {
  const { error: deleteComment } = await supabase.from('commentWrite').delete().eq('id', id);
  if (deleteComment) {
    alert('삭제하지 못 했습니다.');
    console.error(deleteComment);
  }
};
export { getUser, insertWriting, getWriteList, updateWrite, deleteWrite, insertComment, getCommentList, deleteComment };
