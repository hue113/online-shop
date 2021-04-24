import { ToggleActionTypes } from './toggle.types';

const INITIAL_STATE = {
  logOutHidden: true,
  favouriteHidden: true,
  cartHidden: true,
  productModalHidden: true,
};

const toggleReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ToggleActionTypes.TOOGLE_LOGOUT:
      return {
        logOutHidden: !state.logOutHidden,
        favouriteHidden: true,
        cartHidden: true,
        productModalHidden: true,
      };
    case ToggleActionTypes.TOOGLE_FAVOURITE:
      return {
        logOutHidden: true,
        favouriteHidden: !state.favouriteHidden,
        cartHidden: true,
        productModalHidden: true,
      };
    case ToggleActionTypes.TOOGLE_CART:
      return {
        logOutHidden: true,
        favouriteHidden: true,
        cartHidden: !state.cartHidden,
        productModalHidden: true,
      };
    // case ToggleActionTypes.TOOGLE_PRODUCT_MODAL:
    //   return {
    //     logOutHidden: true,
    //     favouriteHidden: true,
    //     cartHidden: true,
    //     productModalHidden: action.payload,
    //   };
    default:
      return state;
  }
};

export default toggleReducer;
