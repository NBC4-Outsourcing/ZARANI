import React from 'react';
import * as S from '../styles/mainPageStyle';
import { useQuery } from 'react-query';
import { getCommunityList } from './mainPageSupabase';
import Loading from 'components/common/Loading';

const MainPageCommunity = () => {
  const { isLoading, isError, data } = useQuery('communityWrite', getCommunityList);

  if (isLoading) {
    return <Loading />;
  }
  if (isError) {
    <div>Not Found Data</div>;
  }
  return (
    <S.ComuWrapper>
      <S.TitleSection>커뮤니티</S.TitleSection>
      {console.log(data)}
      {data.map((item) => {
        return (
          <S.ContentSection>
            <S.Content>{item.content}</S.Content>

            <S.Nickname>{item.nickname}</S.Nickname>
          </S.ContentSection>
        );
      })}
    </S.ComuWrapper>
  );
};

export default MainPageCommunity;
