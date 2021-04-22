import { IconActionTypes } from './icon.types';

export const toggleLogOut = () => ({
  type: IconActionTypes.TOOGLE_LOGOUT,
});

export const toggleFavourite = () => ({
  type: IconActionTypes.TOOGLE_FAVOURITE,
});

export const toggleCart = () => ({
  type: IconActionTypes.TOOGLE_CART,
});
