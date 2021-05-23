import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ShopDropdown from './ShopDropdown.component';

const MobileMenu = () => {
  const [toggleShop, setToggleShop] = useState(false);
  console.log(toggleShop);

  return (
    <div className="mobile-menu">
      <div className="gap-fill"></div>
      <div className="mobile-menu-inner">
        <div className="mobile-item">
          <Link to="/">Home</Link>
        </div>
        <div
          className="mobile-item shop-wrapper"
          // onMouseEnter={(e) => setToggleShop(true)}
          // onMouseLeave={(e) => setToggleShop(false)}
          onClick={() => setToggleShop(!toggleShop)}
        >
          <Link className="shop" to="/shop">
            Shop
          </Link>
          {toggleShop ? <ShopDropdown /> : ''}
        </div>
        <div className="mobile-item">
          <Link className="" to="/shop/new-arrivals">
            New Arrivals
          </Link>
        </div>
        <div className="mobile-item">
          <Link className="" to="/shop/sale">
            Hot Sale
          </Link>
        </div>
        <div className="mobile-item">
          <Link className="" to="/stores">
            Store Locator
          </Link>
        </div>
      </div>
      <div className="invisible">A</div>
    </div>
  );
};

export default MobileMenu;
