import { ToggleActionTypes } from './toggle.types';

const INITIAL_STATE = {
  logOutHidden: true,
  favouriteHidden: true,
  cartHidden: true,
  productModalHidden: true,
  searchHidden: true,
};

const toggleReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ToggleActionTypes.TOOGLE_LOGOUT:
      return {
        logOutHidden: !state.logOutHidden,
        favouriteHidden: true,
        cartHidden: true,
        productModalHidden: true,
        searchHidden: state.searchHidden,
      };
    case ToggleActionTypes.TOOGLE_FAVOURITE:
      return {
        logOutHidden: true,
        favouriteHidden: !state.favouriteHidden,
        cartHidden: true,
        productModalHidden: true,
        searchHidden: state.searchHidden,
      };
    case ToggleActionTypes.TOOGLE_CART:
      return {
        logOutHidden: true,
        favouriteHidden: true,
        cartHidden: !state.cartHidden,
        productModalHidden: true,
        searchHidden: state.searchHidden,
      };
    case ToggleActionTypes.TOOGLE_PRODUCT_MODAL:
      return {
        logOutHidden: true,
        favouriteHidden: true,
        cartHidden: true,
        productModalHidden: !state.productModalHidden,
        searchHidden: state.searchHidden,
      };
    case ToggleActionTypes.TOOGLE_SEARCH:
      return {
        logOutHidden: true,
        favouriteHidden: true,
        cartHidden: true,
        productModalHidden: true,
        searchHidden: !state.searchHidden,
      };
    default:
      return state;
  }
};

export default toggleReducer;
