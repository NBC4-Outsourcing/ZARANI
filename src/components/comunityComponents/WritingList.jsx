import React from 'react';
import { useQuery } from 'react-query';
import { getWriteList } from './supabaseTest';

const WritingList = () => {
  const { isLoading, isError, data } = useQuery('comunityWriteList', getWriteList);

  if (isLoading) {
    return <div>로딩 중입니다</div>;
  }
  return <div>Writin</div>;
};

export default WritingList;
