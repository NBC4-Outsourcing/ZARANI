import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://qyahoxqikvxujxdzlhsn.supabase.co';
const supabaseKey = process.env.REACT_APP_SUPABASE_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

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

const deleteWrite = async (id) => {
  const { error } = await supabase.from('comunityWrite').delete().eq('id', id);
  if (error) {
    alert('삭제하지 못 했습니다.');
  } else {
    alert('성공적으로 삭제 되었습니다.');
  }
};

const insertComment = async (newComment) => {
  const { data, error } = await supabase.from('CommentWrite').insert([newComment]).select();
  if (!error) {
    alert('댓글을 저장하는데 성공했습니다.');
    return data;
  } else {
    console.error(error);
    alert('댓글을 저장하지 못했습니다.');
  }
};
export { insertWriting, getWriteList, deleteWrite, insertComment };
