import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import Favourites from '../../favourites-dropdown/FavouritesDropdown.component';
import { selectCurrentUser } from '../../../redux/user/user.selectors';
import { selectFavouriteLength } from '../../../redux/favourite/favourite.selectors';
import { selectCartLength } from '../../../redux/cart/cart.selectors';
import {
  selectCartHidden,
  selectFavouriteHidden,
  selectLogOutHidden,
} from '../../../redux/icon/icon.selectors';
import {
  toggleFavourite,
  toggleCart,
  toggleLogOut,
} from '../../../redux/icon/icon.actions';

import SignOut from '../../sign-out/SignOut.component';
import MobileMenu from './MobileMenu.component';

const IconGroup = ({
  currentUser,
  toggleLogOut,
  showLogOut,
  toggleFavourite,
  showFavourite,
  favouriteLength,
  toggleCart,
  showCart,
  cartLength,
}) => {
  const [toggleMobile, setToggleMobile] = useState(false);

  return (
    <div className="icon-group d-flex justify-content-between">
      {/* USER icon */}
      {currentUser ? (
        <div className="item account-wrapper px-3" onClick={toggleLogOut}>
          <i className="bi bi-person icon" />
          <span className="name ml-2 d-none d-lg-inline-block">
            Hi {currentUser.name}
          </span>
          {showLogOut ? '' : <SignOut />}
        </div>
      ) : (
        <Link className="item px-3" to="/login">
          <i className="bi bi-person icon" />
          <span className="name ml-2 d-none d-lg-inline-block">Sign in</span>
        </Link>
      )}

      {/* FAVOURITE icon */}
      <div className="item favourite-wrapper px-3">
        {favouriteLength > 0 ? (
          <span className="favourite-count">{favouriteLength}</span>
        ) : (
          ''
        )}
        <div onClick={toggleFavourite}>
          <i className="bi bi-heart icon" />
          <span className="name ml-2 d-none d-lg-inline-block">Favourites</span>
        </div>
        {showFavourite ? '' : <Favourites />}
      </div>

      {/* CART icon */}
      <div className="item cart-wrapper px-3">
        {cartLength > 0 ? <span className="cart-count">{cartLength}</span> : ''}
        <div onClick={toggleCart}>
          <i className="bi bi-bag icon" />
          <span className="name ml-2 d-none d-lg-inline-block">Bags</span>
        </div>
        {showCart ? '' : <Favourites />}
      </div>

      {/* MOBILE MENU icon (hidden on desktop) */}
      <div
        className="item mobile-wrapper d-lg-none"
        onMouseEnter={(e) => setToggleMobile(true)}
        onMouseLeave={(e) => setToggleMobile(false)}
        onClick={() => setToggleMobile(!toggleMobile)}
      >
        <i className="bi bi-list icon"></i>
        {toggleMobile ? <MobileMenu /> : ''}
      </div>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  showLogOut: selectLogOutHidden,
  showFavourite: selectFavouriteHidden,
  showCart: selectCartHidden,
  favouriteLength: selectFavouriteLength,
  cartLength: selectCartLength,
});

const mapDispatchToProps = (dispatch) => ({
  toggleLogOut: () => dispatch(toggleLogOut()),
  toggleFavourite: () => dispatch(toggleFavourite()),
  toggleCart: () => dispatch(toggleCart()),
});

export default connect(mapStateToProps, mapDispatchToProps)(IconGroup);
