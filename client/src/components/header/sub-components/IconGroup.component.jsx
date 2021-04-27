import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { createPortal } from 'react-dom';
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
} from '../../../redux/toggle/toggle.selectors';
import {
  toggleFavourite,
  toggleCart,
  toggleLogOut,
} from '../../../redux/toggle/toggle.actions';

import SignOut from '../../sign-out/SignOut.component';
import MobileMenu from './MobileMenu.component';
import CartList from '../../cart-list/CartList.component';

const cartModalContainer = document.getElementById('cart_modal');

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
        <div
          className="item account-wrapper px-3"
          onMouseEnter={toggleLogOut}
          onMouseLeave={toggleLogOut}
          onClick={toggleLogOut}
        >
          <Link className="item px-3" to="/account">
            <i className="bi bi-person icon" />
            <span className="name ml-2 d-none d-lg-inline-block">
              Hi {currentUser.name}
            </span>
          </Link>
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
        <div onClick={toggleFavourite} onMouseEnter={toggleFavourite}>
          {favouriteLength > 0 ? (
            <span className="favourite-count">{favouriteLength}</span>
          ) : (
            ''
          )}
          <div>
            <i className="bi bi-heart icon" />
            <span className="name ml-2 d-none d-lg-inline-block">Favourites</span>
          </div>
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

        {showCart ? '' : createPortal(<CartList />, cartModalContainer)}
      </div>

      {/* MOBILE MENU icon (hidden on desktop) */}
      <div
        className="item mobile-wrapper d-lg-none"
        // onMouseEnter={(e) => setToggleMobile(true)}
        // onMouseLeave={(e) => setToggleMobile(false)}
      >
        <i className="bi bi-list icon" onClick={() => setToggleMobile(!toggleMobile)} />
        {/* <MobileMenu /> */}
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
  // showProductModal: selectProductModalHidden,
  favouriteLength: selectFavouriteLength,
  cartLength: selectCartLength,
});

const mapDispatchToProps = (dispatch) => ({
  toggleLogOut: () => dispatch(toggleLogOut()),
  toggleFavourite: () => dispatch(toggleFavourite()),
  toggleCart: () => dispatch(toggleCart()),
  // toggleProductModal: () => dispatch(toggleProductModal()),
});

export default connect(mapStateToProps, mapDispatchToProps)(IconGroup);
