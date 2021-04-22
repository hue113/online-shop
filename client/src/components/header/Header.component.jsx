import React from 'react';
import DesktopNav from './sub-components/DesktopNav.component';

import IconGroup from './sub-components/IconGroup.component';
import Logo from './sub-components/Logo.component';

const Header = () => {
  return (
    <header className="header px-4 py-4 ">
      <div className="container-fluid">
        <div className="d-flex justify-content-between">
          <Logo />
          <DesktopNav />
          <IconGroup />
        </div>
      </div>
    </header>
  );
};

export default Header;
