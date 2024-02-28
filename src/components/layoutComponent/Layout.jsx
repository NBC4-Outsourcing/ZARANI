import { LayoutStyle } from 'components/styles/LayoutStyle';
import React from 'react';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <LayoutStyle>
      <Outlet />
    </LayoutStyle>
  );
};

export default Layout;
