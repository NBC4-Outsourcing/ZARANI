import React from 'react';
import * as S from '../styles/mainPageStyle';

const MainPageComunity = () => {
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

export default MainPageComunity;
