import React from 'react';
import { useQuery } from 'react-query';
import { deleteWrite, getWriteList } from './supabaseTest';
import {
  WriteButtons,
  WriteConteiner,
  WriteContent,
  WriteDate,
  WriteFoot,
  WriteHead,
  WriteImage,
  WriteListSection,
  WriteNickName
} from 'components/styles/ComunityStyle';
import CommentList from './CommentList';

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

  const onClicDeleteHandler = (id) => {
    deleteWrite(id);
  };

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
          <WriteListSection key={item.id}>
            <WriteConteiner>
              <WriteHead>
                <WriteImage src={item.avatar} />
                <WriteNickName>{item.nickname}</WriteNickName>
              </WriteHead>
              <WriteContent>{item.content.writeContent}</WriteContent>
              <WriteFoot>
                <WriteDate>{getFormattedDate(item.date)}</WriteDate>
                <WriteButtons>
                  <button>댓글</button>
                  <button onClick={() => onClicDeleteHandler(item.id)}>삭제</button>
                </WriteButtons>
              </WriteFoot>
            </WriteConteiner>
            <CommentList />
          </WriteListSection>
        );
      })}
    </>
  );
};

export default WritingList;
