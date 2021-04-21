import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import Favourites from '../../favourites/Favourites.component';
import {
  selectCurrentUser,
  selectToggleLogOut,
} from '../../../redux/user/user.selectors';
import { toggleLogOut } from '../../../redux/user/user.actions';
import SignOut from '../../sign-out/SignOut.component';

const IconGroup = ({ currentUser, toggleLogOut, stateLogOut }) => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [toggleItemsHidden, setToggleItemsHidden] = useState(true);
  // const [toggleLogOutHidden, setToggleLogOutHidden] = useState(true);

  useEffect(() => {
    console.log('icon group');
    const navbarCollapse = document.querySelector('#basic-navbar-nav');
    if (toggleMenu === true) {
      navbarCollapse.classList.add('show');
    } else {
      navbarCollapse.classList.remove('show');
    }
  }, [toggleMenu, currentUser]);

  return (
    <div className="navbar-nav icon-group order-lg-3 ml-auto d-flex flex-row align-items-center">
      {currentUser ? (
        <div className="icon mr-2" onClick={toggleLogOut}>
          <i className="bi bi-person" />
          <span className="ml-2 d-none d-lg-inline-block">Hi {currentUser.name}</span>
          {stateLogOut ? <SignOut /> : ''}
        </div>
      ) : (
        <Link className="icon mr-2 " to="/login">
          <i className="bi bi-person" />
          <span className="ml-2 d-none d-lg-inline-block">Sign in</span>
        </Link>
      )}
      {/* {toggleLogOutHidden ? '' : <SignOut />} */}
      <div
        className="favourites"
        onClick={() => setToggleItemsHidden(!toggleItemsHidden)}
      >
        <Link className="icon mr-2" to="/">
          <i className="bi bi-heart" />
          <span className="ml-2 d-none d-lg-inline-block">Favourites</span>
        </Link>
        {toggleItemsHidden ? '' : <Favourites />}
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

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  stateLogOut: selectToggleLogOut,
});

const mapDispatchToProps = (dispatch) => ({
  toggleLogOut: () => dispatch(toggleLogOut()),
});

export default connect(mapStateToProps, mapDispatchToProps)(IconGroup);
