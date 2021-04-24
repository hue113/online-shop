import { CartActionTypes } from './cart.types';

export const addItemToCart = (item, order) => ({
  type: CartActionTypes.ADD_ITEM_TO_CART,
  payload1: item,
  payload2: order,
});

export const removeItemOrderFromCart = (item, order) => ({
  type: CartActionTypes.REMOVE_ITEM_ORDER_FROM_CART,
  payload1: item,
  payload2: order,
});

export const decreaseQuantity = (item, order) => ({
  type: CartActionTypes.DECREASE_QUANTITY,
  payload1: item,
  payload2: order,
});

export const increaseQuantity = (item, order) => ({
  type: CartActionTypes.INCREASE_QUANTITY,
  payload1: item,
  payload2: order,
});

export const clearItemOrderFromCart = (item) => ({
  type: CartActionTypes.CLEAR_ITEM_FROM_CART,
  payload: item,
});

export const clearList = () => ({
  type: CartActionTypes.CLEAR_LIST,
});
