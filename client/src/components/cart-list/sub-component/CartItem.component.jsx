import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { toggleCart } from '../../../redux/toggle/toggle.actions';
import {
  removeItemOrderFromCart,
  decreaseQuantity,
  increaseQuantity,
} from '../../../redux/cart/cart.actions';
import { selectCartItemOrders } from '../../../redux/cart/cart.selectors';
import { calculatePrice } from '../../../utils/helper';

const CartItem = ({
  product,
  toggleCart,
  removeItemOrderFromCart,
  order,
  decreaseQuantity,
  increaseQuantity,
}) => {
  const { name, image, price, discount, sku } = product;
  const { size, color, quantity } = order;

  return (
    <>
      <div className="cart-item row d-flex flex-wrap mx-2 my-4 pt-3 pb-4">
        <div className="image pr-2" onClick={() => toggleCart(false)}>
          <Link to={`/products/${name.toLowerCase().replace(/ /g, '-')}.${sku}`}>
            <img src={image} alt="" />
          </Link>
        </div>
        <div className="detail pl-4 d-flex flex-column">
          <h5 className="mb-2 name bold">
            <Link to={`/products/${name.toLowerCase().replace(/ /g, '-')}.${sku}`}>
              {name}
            </Link>
          </h5>
          <div className="choice mt-1 mb-3">
            <span className="choice-color"> Color: {color}</span>
            <span className="choice-size">Size: {size.toUpperCase()}</span>
            <div className="choice-quantity my-2 text-center d-flex">
              <i
                className="bi bi-dash icon"
                onClick={() => decreaseQuantity(product, order)}
              />
              <div className="quantity mx-4">
                <span className="mx-3">Qty: {quantity}</span>
              </div>
              <i
                className="bi bi-plus icon"
                onClick={() => increaseQuantity(product, order)}
              />
            </div>
          </div>
          <div className="price">
            {discount === 0 ? (
              <>
                <span className="mr-3">${price.toFixed(2)}</span>
                <span className="quantity">{quantity}</span>
              </>
            ) : (
              <>
                <span className="mr-4 old-price">${price.toFixed(2)}</span>
                <span className="sale-price mr-3">
                  ${calculatePrice(price, discount)}
                </span>
                <span className="quantity">{quantity}</span>
              </>
            )}
          </div>
        </div>

        <div className="item-total bold align-self-end ml-auto pb-4">
          ${calculatePrice(price, discount, quantity)}
        </div>

        <i
          className="bi bi-trash remove-icon icon pt-3"
          onClick={() => removeItemOrderFromCart(product, order)}
        />
      </div>
    </>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItemOrders: selectCartItemOrders, // must put it here to force getting updated order quantity
});

const mapDispatchToProps = (dispatch) => ({
  toggleCart: () => dispatch(toggleCart()),
  removeItemOrderFromCart: (item, order) =>
    dispatch(removeItemOrderFromCart(item, order)),
  decreaseQuantity: (item, order) => dispatch(decreaseQuantity(item, order)),
  increaseQuantity: (item, order) => dispatch(increaseQuantity(item, order)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CartItem);
