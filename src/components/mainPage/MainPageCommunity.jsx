import React from 'react';
import * as S from '../styles/mainPageStyle';
import { useQuery } from 'react-query';
import { getCommunityList } from './mainPageSupabase';
import Loading from 'components/common/Loading';
import { useNavigate } from 'react-router-dom';

const MainPageCommunity = () => {
  const { isLoading, isError, data } = useQuery('communityWrite', getCommunityList);

  const navigate = useNavigate();

  const handComunity = () => {
    navigate('/community');
  };
  if (isLoading) {
    return <Loading />;
  }
  if (isError) {
    <div>Not Found Data</div>;
  }
  return (
    <S.ComuWrapper onClick={handComunity}>
      <S.TitleSection>커뮤니티</S.TitleSection>
      {data.map((item, idx) => {
        return (
          <S.ContentSection key={idx}>
            <S.Content>{item.content}</S.Content>
            <S.Nickname>{item.nickname}</S.Nickname>
          </S.ContentSection>
        );
      })}
    </S.ComuWrapper>
  );
};

export default MainPageCommunity;
