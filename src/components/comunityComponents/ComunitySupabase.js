import { supabase } from 'api/supabase/supabase';

const insertWriting = async (newWrite) => {
  const { data, error } = await supabase.from('comunityWrite').insert([newWrite]).select();
  if (!error) {
    alert('글을 저장하는데 성공했습니다.');
    return data;
  } else {
    console.error(error);
    alert('글을 저장하지 못했습니다.');
  }
};

const getWriteList = async () => {
  const { data, error } = await supabase.from('comunityWrite').select('*');
  if (!error) {
    return data;
  } else {
    console.error(error);
    alert('데이터를 가져오지 못 했습니다.');
  }
};

const updateWrite = async (changeContent, id) => {
  const { error } = await supabase.from('comunityWrite').update(changeContent).eq('id', id);
  if (error) {
    alert('변경하지 못 했습니다.');
    console.error(error);
  } else {
    alert('내용을 성공적으로 수정했습니다.');
    return;
  }
};

const deleteWrite = async (id) => {
  const { error } = await supabase.from('comunityWrite').delete().eq('id', id).select();
  if (error) {
    alert('삭제하지 못 했습니다.');
  } else {
    alert('성공적으로 삭제 되었습니다.');
  }
};

const insertComment = async (newComment) => {
  const { data, error } = await supabase.from('commentWrite').insert([newComment]).select();
  if (!error) {
    alert('댓글을 저장하는데 성공했습니다.');
    return data;
  } else {
    console.error(error);
    alert('댓글을 저장하지 못했습니다.');
  }
};

const getCommentList = async () => {
  const { data, error } = await supabase.from('commentWrite').select('*');
  if (!error) {
    return data;
  } else {
    console.error(error);
    alert('데이터를 가져오지 못 했습니다.');
  }
};

const deleteComment = async (id) => {
  const { error } = await supabase.from('commentWrite').delete().eq('id', id);
  if (error) {
    alert('삭제하지 못 했습니다.');
  } else {
    alert('성공적으로 삭제 되었습니다.');
  }
};
export { insertWriting, getWriteList, updateWrite, deleteWrite, insertComment, getCommentList, deleteComment };
