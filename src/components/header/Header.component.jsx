import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [toggleBtn, setToggleBtn] = useState(false);

  const handleToggle = () => {
    setToggleMenu(!toggleMenu);
  };

  const handleToggleBtn = () => {
    setToggleBtn(!toggleBtn);
  };

  useEffect(() => {
    const navbarCollapse = document.querySelector("#basic-navbar-nav");
    if (toggleMenu === true) {
      navbarCollapse.classList.add("show");
    } else {
      navbarCollapse.classList.remove("show");
    }
    const shopBtn = document.getElementsByClassName("dropdown-content")[0];
    if (toggleBtn === true) {
      shopBtn.classList.add("show");
    } else {
      shopBtn.classList.remove("show");
    }
  }, [toggleMenu, toggleBtn]);

  return (
    <header className="header">
      <div className="container-fluid">
        <nav className="navbar navbar-expand-lg navbar-light py-0 d-flex justify-content-between mx-md-5">
          <div className="col-2  p-0">
            <Link className="logo" to="/">
              <h3 className="logo">Shine</h3>
            </Link>
          </div>

          <div className="navbar-nav icon-group order-lg-3 ml-auto d-flex flex-row align-items-center">
            <Link className="icon mr-2" to="/login">
              <i className="bi bi-person" />
              <span className="ml-2 d-none d-lg-inline-block">Sign in</span>
            </Link>
            <Link className="icon mr-2" to="/">
              <i className="bi bi-heart" />
              <span className="ml-2 d-none d-lg-inline-block">Favourites</span>
            </Link>
            <Link className="icon mr-2" to="/">
              <i className="bi bi-bag" />
              <span className="ml-2 d-none d-lg-inline-block">Bags</span>
            </Link>

            <button
              aria-controls="basic-navbar-nav"
              type="button"
              aria-label="Toggle navigation"
              className="navbar-toggler collapsed ml-2 p-0"
              onClick={handleToggle}
            >
              <span className="navbar-toggler-icon"></span>
            </button>
          </div>

          <div className="navbar-collapse collapse" id="basic-navbar-nav">
            <div className="navbar-nav p-0 mx-auto align-content-center flex-wrap">
              <Link className="nav-item" to="/">
                Home
              </Link>
              <div className="dropdown">
                <div className="nav-item dropbtn" onClick={handleToggleBtn}>
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
        </nav>
      </div>
    </header>
  );
};

export default Header;
