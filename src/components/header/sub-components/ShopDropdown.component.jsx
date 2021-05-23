import React from 'react';
import { Link } from 'react-router-dom';

const ShopDropdown = () => {
  return (
    <div className="shop-dropdown">
      <div className="gap-fill"></div>
      <div className="content px-4 d-flex flex-column align-items-start">
        <Link className="item" to="/shop">
          Shop All
        </Link>
        <Link className="item" to="/shop/women">
          Women
        </Link>
        <Link className="item" to="/shop/men">
          Men
        </Link>
        <Link className="item" to="/shop/kids">
          Kids
        </Link>
        <Link className="item" to="/shop/accessories">
          Accessories
        </Link>
        <Link className="item" to="/shop/new-arrivals">
          New Arrivals
        </Link>
        <Link className="item" to="/shop/sale">
          Hot Sale
        </Link>
      </div>
    </div>
  );
};

export default ShopDropdown;
