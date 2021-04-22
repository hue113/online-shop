import { createSelector } from 'reselect';

// from Input selector
const selectIcon = (state) => state.icon;

export const selectLogOutHidden = createSelector(
  [selectIcon],
  (icon) => icon.logOutHidden,
);

export const selectFavouriteHidden = createSelector(
  [selectIcon],
  (icon) => icon.favouriteHidden,
);

export const selectCartHidden = createSelector([selectIcon], (icon) => icon.cartHidden);
