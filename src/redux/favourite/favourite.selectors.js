import { createSelector } from 'reselect';

// from Input selector
export const selectFavourite = (state) => state.favourite;

export const selectFavouriteItems = createSelector(
  [selectFavourite],
  (state) => state.favouriteItems,
);

export const selectFavouriteLength = createSelector(
  [selectFavouriteItems],
  (state) => state.length,
);
