import { createSelector } from "reselect";

const selectState = (state) => state.category;

export const selectCategories = createSelector(
  selectState,
  (category) => category.categories
  // category.categories
);

// export const selectCategories = createSelector(
//   (state) => state.categories
//   // category.categories
// );
