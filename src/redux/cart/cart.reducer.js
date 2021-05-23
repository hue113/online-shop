import { CartActionTypes } from './cart.types';
import {
  addItemToCart,
  decreaseQuantity,
  increaseQuantity,
  removeItemOrderFromCart,
} from '../../utils/helper';

const INITIAL_STATE = {
  cartItems: [],
};

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CartActionTypes.ADD_ITEM_TO_CART:
      return {
        ...state,
        cartItems: addItemToCart(state.cartItems, action.payload1, action.payload2),
      };
    case CartActionTypes.REMOVE_ITEM_ORDER_FROM_CART:
      return {
        ...state,
        cartItems: removeItemOrderFromCart(
          state.cartItems,
          action.payload1,
          action.payload2,
        ),
      };
    case CartActionTypes.DECREASE_QUANTITY:
      return {
        ...state,
        cartItems: decreaseQuantity(state.cartItems, action.payload1, action.payload2),
      };
    case CartActionTypes.INCREASE_QUANTITY:
      return {
        ...state,
        cartItems: increaseQuantity(state.cartItems, action.payload1, action.payload2),
      };
    case CartActionTypes.CLEAR_ITEM_FROM_CART:
      return {
        ...state,
        cartItems: state.cartItems.filter((item) => item.id !== action.payload.id),
      };
    case CartActionTypes.CLEAR_LIST:
      return {
        ...state,
        cartItems: [],
      };
    default:
      return state;
  }
};

export default cartReducer;
