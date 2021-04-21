import { FavouriteActionTypes } from './favourite.types';
import { addItemToCart, removeItemFromCart } from './cart.utils';

const INITIAL_STATE = {
  hidden: true,
  favouriteItems: [],
};

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FavouriteActionTypes.TOOGLE_FAVOURITE_HIDDEN:
      return {
        ...state,
        hidden: !state.hidden,
      };
    case FavouriteActionTypes.ADD_ITEM:
      return {
        ...state,
        cartItems: addItemToCart(state.cartItems, action.payload),
        // BEFORE: cartItems: [...state.cartItems, action.payload]
      };
    case FavouriteActionTypes.REMOVE_ITEM:
      return {
        ...state,
        cartItems: removeItemFromCart(state.cartItems, action.payload),
      };
    case FavouriteActionTypes.CLEAR_ITEM_FROM_LIST:
      return {
        ...state,
        cartItems: state.cartItems.filter(
          (cartItem) => cartItem.id !== action.payload.id,
        ),
      };
    case FavouriteActionTypes.CLEAR_LIST:
      return {
        ...state,
        cartItems: [],
      };
    default:
      return state;
  }
};

export default cartReducer;
