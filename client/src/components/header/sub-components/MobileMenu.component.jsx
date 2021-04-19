import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const MobileMenu = () => {
  const [toggleBtn, setToggleBtn] = useState(false);

  useEffect(() => {
    const shopBtn = document.querySelector(".dropdown-content");
    if (toggleBtn === true) {
      shopBtn.classList.add("show");
    } else {
      shopBtn.classList.remove("show");
    }
  }, [toggleBtn]);

  return (
    <div className="navbar-collapse collapse" id="basic-navbar-nav">
      <div className="navbar-nav p-0 mx-auto align-content-center flex-wrap">
        <Link className="nav-item" to="/">
          Home
        </Link>
        <div className="dropdown">
          <div
            className="nav-item dropbtn"
            onClick={() => setToggleBtn(!toggleBtn)}
          >
            Shop
          </div>
          <div className="dropdown-content">
            <Link className="" to="/shop">
              Shop All
            </Link>
            <Link className="" to="/shop/women">
              Women
            </Link>
            <Link className="" to="/shop/men">
              Men
            </Link>
            <Link className="" to="/shop/kids">
              Kids
            </Link>
            <Link className="" to="/shop/accessories">
              Accessories
            </Link>
            <Link className="" to="/shop/new-arrivals">
              New Arrivals
            </Link>
            <Link className="" to="/shop/sale">
              Hot Sale
            </Link>
          </div>
        </div>
        <Link className="nav-item new-arrivals" to="/shop/new-arrivals">
          New Arrivals
        </Link>
        <div className="sale">
          <Link className="nav-item" to="/shop/sale">
            Sale
          </Link>
          <div className="tag"></div>
        </div>
        <Link className="nav-item" to="/stores">
          Store Locator
        </Link>
      </div>
    </div>
  );
};

export default MobileMenu;
