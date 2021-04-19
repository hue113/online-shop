import { createSelector } from "reselect";

const selectState = (state) => state.product;

export const selectProducts = createSelector(
  selectState,
  (product) => product.products
);

export const selectWomenProducts = createSelector(selectProducts, (products) =>
  products.filter((p) => p.category === "607b4a406a8ae23bbfd5a9da")
);

export const selectMenProducts = createSelector(selectProducts, (products) =>
  products.filter((p) => p.category === "607b4a8b6a8ae23bbfd5a9db")
);

export const selectKidsProducts = createSelector(selectProducts, (products) =>
  products.filter((p) => p.category === "607b4a9c6a8ae23bbfd5a9dc")
);

export const selectAccessoriesProducts = createSelector(
  selectProducts,
  (products) =>
    products.filter((p) => p.category === "607b4ab76a8ae23bbfd5a9dd")
);

export const selectNewArrivalsProducts = createSelector(
  selectProducts,
  (products) =>
    products.filter((p) => p.category === "607b4d71a07c4d3cd29eec13")
);

export const selectSaleProducts = createSelector(selectProducts, (products) =>
  products.filter((p) => p.discount !== 0)
);

// export const selectIsProductsLoaded = createSelector(
//   selectState,
//   (product) => Boolean(product) // if collections get loaded -> true; otherwise, false
//   // alternative: Boolean(shop.collections)
// );
