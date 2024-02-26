import { supabase } from 'api/supabase/supabase';

const getUser = async () => {
  const {
    data: { user }
  } = await supabase.auth.getUser();
  return user;
};

const insertWriting = async (newWrite) => {
  const { error } = await supabase.from('communityWrite').insert([newWrite]).select();
  if (error) {
    console.error(error);
    alert('글을 저장하지 못했습니다.');
  }
};

const getWriteList = async () => {
  const { data, error } = await supabase.from('communityWrite').select('*');
  if (error) {
    console.error(error);
    alert('데이터를 가져오지 못 했습니다.');
  } else {
    return data;
  }
};

const updateWrite = async ([changeContent, id]) => {
  const { error } = await supabase.from('communityWrite').update(changeContent).eq('id', id);
  if (error) {
    alert('변경하지 못 했습니다.');
    console.error(error);
  }
};

const deleteWrite = async (id) => {
  const { error } = await supabase.from('communityWrite').delete().eq('id', id).select();
  if (error) {
    alert('삭제하지 못 했습니다.');
  }
};

const insertComment = async (newComment) => {
  const { error } = await supabase.from('commentWrite').insert([newComment]).select();
  if (error) {
    console.error(error);
    alert('댓글을 저장하지 못했습니다.');
  }
};

const getCommentList = async () => {
  const { data, error } = await supabase.from('commentWrite').select('*');
  if (error) {
    console.error(error);
    alert('데이터를 가져오지 못 했습니다.');
  } else {
    return data;
  }
};

const deleteComment = async (id) => {
  const { error } = await supabase.from('commentWrite').delete().eq('id', id);
  if (error) {
    alert('삭제하지 못 했습니다.');
  }
};
export { getUser, insertWriting, getWriteList, updateWrite, deleteWrite, insertComment, getCommentList, deleteComment };
