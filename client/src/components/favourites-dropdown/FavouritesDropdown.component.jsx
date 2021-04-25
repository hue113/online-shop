import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import Button from '../custom-button/Button.component';
import ProductCardSmall from '../product-card/ProductCardSmall.component';

import { selectFavouriteItems } from '../../redux/favourite/favourite.selectors';
import { removeItemFromFavourite } from '../../redux/favourite/favourite.actions';

const FavouritesDropdown = ({ favourites, removeItemFromFavourite }) => {
  return (
    <div className="favourites-dropdown d-flex justify-content-between align-items-center">
      <div className="items">
        {favourites.length ? (
          favourites.map((product) => (
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
        {/* {favourites.length > 3 ? <span className="more text-center">...</span> : ''} */}
      </div>
      <Button link="/favourites" name="View All" styleClass="square color lighter" />
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  favourites: selectFavouriteItems,
});
const mapDispatchToProps = (dispatch) => ({
  removeItemFromFavourite: (item) => dispatch(removeItemFromFavourite(item)),
});

export default connect(mapStateToProps, mapDispatchToProps)(FavouritesDropdown);
