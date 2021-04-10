import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  const handleToggle = () => {
    setToggleMenu(!toggleMenu);
  };

  useEffect(() => {
    const navbarCollapse = document.querySelector("#basic-navbar-nav");
    if (toggleMenu === true) {
      navbarCollapse.classList.add("show");
    } else {
      navbarCollapse.classList.remove("show");
    }
  }, [toggleMenu]);

  return (
    <header className="header">
      <div className="container-fluid">
        <nav className="navbar navbar-expand-lg navbar-light d-flex justify-content-between mx-md-5 py-4">
          <div className="col-2">
            <Link className="logo" to="/">
              <h3 className="logo">Shine</h3>
            </Link>
          </div>

          <div className="navbar-nav icon-group order-md-3 ml-auto d-flex flex-row align-items-center">
            <Link className="icon mr-3" to="/login">
              <i className="bi bi-person" />
              <span className="ml-2 d-none d-lg-inline-block">Sign in</span>
            </Link>
            <Link className="icon mr-3" to="/">
              <i className="bi bi-heart" />
              <span className="ml-2 d-none d-lg-inline-block">Favourites</span>
            </Link>
            <Link className="icon mr-3" to="/">
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
            <div className="navbar-nav mx-auto align-content-center flex-wrap">
              <Link className="nav-item" to="/">
                Home
              </Link>
              <Link className="nav-item" to="/shop">
                Shop
              </Link>
              <Link className="nav-item" to="/shop/new-arrivals">
                New Arrivals
              </Link>
              <Link className="nav-item" to="/shop/sale">
                Sale
              </Link>
              <Link className="nav-item" to="/stores">
                Store Locators
              </Link>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
