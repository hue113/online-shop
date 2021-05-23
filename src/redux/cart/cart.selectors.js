import { createSelector } from 'reselect';

// from Input selector
export const selectCart = (state) => state.cart;

export const selectCartItems = createSelector([selectCart], (state) => state.cartItems);

export const selectCartLength = createSelector([selectCartItems], (item) => {
  const quantityArray = item.map((i) => i.orders.map((o) => o.quantity));
  return quantityArray.flat().reduce((a, b) => a + b, 0);
});

export const selectCartItemOrders = createSelector([selectCartItems], (item) => {
  let cartOrders = [];
  item.map((i) => {
    return i.orders.map((o) => cartOrders.push({ product: i, order: o }));
  });
  return cartOrders;
});

export const selectCartTotal = createSelector([selectCartItems], (item) => {
  var totalArr = [];
  item.map((i) => {
    // const newItem = { price: i.price, discount: i.discount, orders: i.orders };
    const price = (i.price * (100 - i.discount)) / 100;
    let itemTotal = [];
    i.orders.map((o) => itemTotal.push(o.quantity * price));
    return totalArr.push(itemTotal);
  });
  const subtotal = totalArr.flat().reduce((a, b) => (a + b) * 1, 0);
  return subtotal.toFixed(2);
});
