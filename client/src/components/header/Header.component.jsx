import React from 'react';

import IconGroup from './sub-components/IconGroup.component';
import Logo from './sub-components/Logo.component';
import MobileMenu from './sub-components/MobileMenu.component';

const Header = () => {
  return (
    <header className="header">
      <div className="container-fluid">
        <nav className="navbar navbar-expand-lg navbar-light py-0 d-flex justify-content-between mx-md-5">
          <Logo />
          <IconGroup />
          <MobileMenu />
        </nav>
      </div>
    </header>
  );
};

export default Header;
