import React from 'react';
import HomeNavbar from '../inc/navbar';

const Layout = ({ children }) => {
  return (
    <div>
      <HomeNavbar />
      {children}
    </div>
  );
};

export default Layout;