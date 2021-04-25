import React from 'react';
import Footer from '../footer/Footer.component';
import Header from '../header/Header.component';

const Layout = ({ children }) => {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
