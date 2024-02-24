import React from 'react';
import { useQuery } from 'react-query';
import { getWriteList } from './supabaseTest';
import { WriteDiv } from 'components/styles/ComunityStyle';

const WritingList = () => {
  const { isLoading, isError, data } = useQuery('comunityWriteList', getWriteList);

  const getFormattedDate = (date) =>
    new Date(date).toLocaleDateString('ko', {
      year: '2-digit',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit'
    });

  if (isLoading) {
    return <div>로딩 중입니다</div>;
  }
  if (isError) {
    alert('글의 정보를 가져오지 못했습니다.');
    return <div>Not found</div>;
  }
  return (
    <>
      {data.map((item) => {
        return (
          <WriteDiv key={item.id}>
            <img src={item.avatar} />
            <p>{item.nickname}</p>
            <p>{item.content.writeContent}</p>
            <p>{getFormattedDate(item.date)}</p>
          </WriteDiv>
        );
      })}
    </>
  );
};

export default WritingList;
