import { createSelector } from 'reselect';

// from Input selector
export const selectCart = (state) => state.cart;

export const selectCartItems = createSelector([selectCart], (state) => state.cartItems);

export const selectCartLength = createSelector(
  [selectCartItems],
  (state) => state.length,
);
