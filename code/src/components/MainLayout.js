import React from 'react';
import Sidebar from './Sidebar';
import Header from './Header';

function MainLayout({ children }) {
  return (
    <div className="container">
      <Header />
      <div className="flex ">
        <Sidebar />
        <div className="main-box">{children}</div>
      </div>
    </div>
  );
}

export default MainLayout;
