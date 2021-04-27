import React from 'react';
import Footer from '../footer/Footer.component';
import Header from '../header/Header.component';
import ScrollTopButton from '../scroll-to-top/ScrollTopButton.component';
import ThemeSetting from '../theme-setting/ThemeSetting.component';

const Layout = ({ children }) => {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Header />
      <ThemeSetting />
      {children}
      <ScrollTopButton />
      <Footer />
    </div>
  );
};

export default Layout;
