import React from 'react';
import * as S from '../styles/mainPageStyle';
import { useQuery } from 'react-query';
import { getCommunityList } from './mainPageSupabase';

const MainPageCommunity = () => {
  const { isLoading, isError, data } = useQuery('communityWrite', getCommunityList);

  if (isLoading) {
    return <div>로딩중 입니다.</div>;
  }
  if (isError) {
    <div>Not Found Data</div>;
  }
  return (
    <S.ComuWrapper>
      <S.TitleSection>커뮤니티</S.TitleSection>
      <S.ContentSection>
        {/* map으로 그릴 부분 */}
        <S.Content>커뮤니티 글 내용</S.Content>
        <S.Nickname>유저 닉네임</S.Nickname>
      </S.ContentSection>
    </S.ComuWrapper>
  );
};

export default MainPageCommunity;
