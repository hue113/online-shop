import React from "react";
import Footer from "../footer/Footer.component";
import Header from "../header/Header.component";

const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
