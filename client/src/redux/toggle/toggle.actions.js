import { ToggleActionTypes } from './toggle.types';

export const toggleLogOut = () => ({
  type: ToggleActionTypes.TOOGLE_LOGOUT,
});

export const toggleFavourite = () => ({
  type: ToggleActionTypes.TOOGLE_FAVOURITE,
});

export const toggleCart = () => ({
  type: ToggleActionTypes.TOOGLE_CART,
});

export const toggleProductModal = () => ({
  type: ToggleActionTypes.TOOGLE_PRODUCT_MODAL,
});
export const toggleSearch = () => ({
  type: ToggleActionTypes.TOOGLE_SEARCH,
});
