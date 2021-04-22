import { IconActionTypes } from './icon.types';

const INITIAL_STATE = {
  logOutHidden: true,
  favouriteHidden: true,
  cartHidden: true,
};

const iconReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case IconActionTypes.TOOGLE_LOGOUT:
      return {
        logOutHidden: !state.logOutHidden,
        favouriteHidden: true,
        cartHidden: true,
      };
    case IconActionTypes.TOOGLE_FAVOURITE:
      return {
        logOutHidden: true,
        favouriteHidden: !state.favouriteHidden,
        cartHidden: true,
      };
    case IconActionTypes.TOOGLE_CART:
      return {
        logOutHidden: true,
        favouriteHidden: true,
        cartHidden: !state.cartHidden,
      };
    default:
      return state;
  }
};

export default iconReducer;
