import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ShopDropdown from './ShopDropdown.component';

const DeskTopNav = () => {
  const [toggleShop, setToggleShop] = useState(false);
  return (
    <div className="desktop-nav flex-row justify-content-center d-none d-lg-flex">
      <Link className="item p-4" to="/">
        Home
      </Link>
      <div
        className="item shop-wrapper px-4"
        onMouseEnter={(e) => setToggleShop(true)}
        onMouseLeave={(e) => setToggleShop(false)}
        onClick={() => setToggleShop(!toggleShop)}
      >
        <Link className="item shop" to="/shop">
          Shop
        </Link>
        {toggleShop ? <ShopDropdown /> : ''}
      </div>
      <Link className="item px-4" to="/shop/new-arrivals">
        New Arrivals
      </Link>
      <div className="item">
        <Link className="sale px-3 py-2" to="/shop/sale">
          Hot Sale
        </Link>
      </div>
      <Link className="item px-4" to="/stores">
        Store Locator
      </Link>
    </div>
  );
};

export default DeskTopNav;
