import React from 'react';
import * as NS from '../styles/mainNavStyle';
import kangwondo from '../../assets/kangwondo.png';
const MainPageNav = () => {
  return (
    <NS.Wrapper>
      <NS.ListSection>
        <NS.ImgList src={kangwondo} />
        <NS.ImgList src={kangwondo} />
        <NS.ImgList src={kangwondo} />
      </NS.ListSection>
      <NS.ListSection>
        <NS.ImgList src={kangwondo} />
        <NS.ImgList src={kangwondo} />
        <NS.ImgList src={kangwondo} />
      </NS.ListSection>
    </NS.Wrapper>
  );
};

export default MainPageNav;
