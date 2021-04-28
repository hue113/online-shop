import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import Button from '../custom-button/Button.component';
import ProductCardSmall from '../product-card/ProductCardSmall.component';

import { selectFavouriteItems } from '../../redux/favourite/favourite.selectors';
import { removeItemFromFavourite } from '../../redux/favourite/favourite.actions';
import { toggleFavourite } from '../../redux/toggle/toggle.actions';

const FavouritesDropdown = ({ favourites, removeItemFromFavourite, toggleFavourite }) => {
  return (
    <div className="favourites-dropdown">
      <div className="gap-fill" />
      <div className="favourites-dropdown-wrapper d-flex flex-column justify-content-between">
        <div className="items">
          {favourites.length ? (
            favourites.slice(0, 3).map((product) => (
              <div className="wrapper d-flex flex-row" key={product.sku}>
                <ProductCardSmall product={product} />
                <span
                  className="remove p-3 m-auto"
                  onClick={() => removeItemFromFavourite(product)}
                >
                  <i className="bi bi-x" />
                </span>
              </div>
            ))
          ) : (
            <span className="empty-message">Your wishlist is empty.</span>
          )}
          {favourites.length > 3 ? <span className="more text-center">...</span> : ''}
        </div>
        <div onClick={toggleFavourite} className="text-center pb-2 mt-auto">
          <Button link="/favourites" name="View All" styleClass="square color lighter" />
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  favourites: selectFavouriteItems,
});
const mapDispatchToProps = (dispatch) => ({
  removeItemFromFavourite: (item) => dispatch(removeItemFromFavourite(item)),
  toggleFavourite: () => dispatch(toggleFavourite()),
});

export default connect(mapStateToProps, mapDispatchToProps)(FavouritesDropdown);
