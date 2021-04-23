import { createSelector } from 'reselect';

// from Input selector
export const selectCart = (state) => state.cart;

export const selectCartItems = createSelector([selectCart], (state) => state.cartItems);

export const selectCartLength = createSelector([selectCartItems], (item) => {
  const quantityArray = item.map((i) => i.orders.map((o) => o.quantity));
  return quantityArray.flat().reduce((a, b) => a + b, 0);
});
