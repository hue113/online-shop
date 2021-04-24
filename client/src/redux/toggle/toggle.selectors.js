import { createSelector } from 'reselect';

// from Input selector
const selectToggle = (state) => state.toggle;

export const selectLogOutHidden = createSelector(
  [selectToggle],
  (toggle) => toggle.logOutHidden,
);

export const selectFavouriteHidden = createSelector(
  [selectToggle],
  (toggle) => toggle.favouriteHidden,
);

export const selectCartHidden = createSelector(
  [selectToggle],
  (toggle) => toggle.cartHidden,
);

export const selectProductModalHidden = createSelector(
  [selectToggle],
  (toggle) => toggle.productModalHidden,
);
