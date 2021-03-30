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
    <header className="header py-4 px-md-2">
      <div className="container-fluid">
        <nav className="navbar navbar-expand-md navbar-light d-flex justify-content-between p-0">
          <div className="">
            <Link className="logo" to="/">
              <h3 className="logo">Shine</h3>
            </Link>
          </div>

          <div className="navbar-nav icon-group order-md-3 ml-auto d-flex flex-row align-items-baseline">
            <Link className="icon" to="/">
              <i className="bi bi-person" />
            </Link>
            <Link className="icon" to="/">
              <i className="bi bi-heart" />
            </Link>
            <Link className="icon" to="/">
              <i className="bi bi-bag" />
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
              <Link className="nav-item" to="/">
                Shop
              </Link>
              <Link className="nav-item" to="/">
                New Arrivals
              </Link>
              <Link className="nav-item" to="/">
                Sale
              </Link>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
