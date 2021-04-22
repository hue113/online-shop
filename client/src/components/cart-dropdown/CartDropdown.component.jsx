import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import Button from '../custom-button/Button.component';
import ProductCardSmall from '../product-card/ProductCardSmall.component';

import { selectFavouriteItems } from '../../redux/favourite/favourite.selectors';
import { removeItemFromFavourite } from '../../redux/favourite/favourite.actions';

const CartDropdown = ({ favourites, removeItemFromFavourite }) => {
  // console.log(favourites);

  console.log('cart dropdown');
  // useEffect(() => {
  //   return () => {};
  // }, [favourites]);

  return (
    <div className="cart-dropdown d-flex justify-content-between align-items-center">
      <div className="items">
        {favourites.length ? (
          favourites.slice(0, 3).map((product) => (
            <div className="wrapper d-flex flex-row" key={product.sku}>
              <ProductCardSmall product={product} />
              <span
                className="remove p-3 m-auto"
                onClick={() => removeItemFromFavourite(product)}
                // onClick={() => console.log('click')}
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
      <Button name="View All" styleClass="square color" />
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  // carts: selectCartItems,
});
const mapDispatchToProps = (dispatch) => ({
  // removeItemFromFavourite: (item) => dispatch(removeItemFromFavourite(item)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CartDropdown);
