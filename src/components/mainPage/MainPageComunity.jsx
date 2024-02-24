import React from 'react';
import * as CS from '../styles/mainComunityStyle';

const MainPageComunity = () => {
  return (
    <CS.Wrapper>
      <CS.TitleSection>커뮤니티</CS.TitleSection>
      <CS.ContentSection>
        {/* map으로 그릴 부분 */}
        <CS.Content>커뮤니티 글 내용</CS.Content>
        <CS.Nickname>유저 닉네임</CS.Nickname>
      </CS.ContentSection>
    </CS.Wrapper>
  );
};

export default MainPageComunity;
