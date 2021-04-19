import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import Favourites from "../../favourites/Favourites.component";

const IconGroup = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [toggleItemsHidden, setToggleItemsHidden] = useState(true);

  useEffect(() => {
    const navbarCollapse = document.querySelector("#basic-navbar-nav");
    if (toggleMenu === true) {
      navbarCollapse.classList.add("show");
    } else {
      navbarCollapse.classList.remove("show");
    }
  }, [toggleMenu]);

  return (
    <div className="navbar-nav icon-group order-lg-3 ml-auto d-flex flex-row align-items-center">
      <Link className="icon mr-2 " to="/login">
        <i className="bi bi-person" />
        <span className="ml-2 d-none d-lg-inline-block">Sign in</span>
      </Link>
      <div
        className="favourites"
        onClick={() => setToggleItemsHidden(!toggleItemsHidden)}
      >
        <Link className="icon mr-2" to="/">
          <i className="bi bi-heart" />
          <span className="ml-2 d-none d-lg-inline-block">Favourites</span>
        </Link>
        {toggleItemsHidden ? "" : <Favourites />}
      </div>
      <Link className="icon mr-2" to="/">
        <i className="bi bi-bag" />
        <span className="ml-2 d-none d-lg-inline-block">Bags</span>
      </Link>

      <button
        aria-controls="basic-navbar-nav"
        type="button"
        aria-label="Toggle navigation"
        className="navbar-toggler collapsed ml-2 p-0"
        onClick={() => setToggleMenu(!toggleMenu)}
      >
        <span className="navbar-toggler-icon"></span>
      </button>
    </div>
  );
};

export default IconGroup;
