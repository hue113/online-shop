import { toast } from 'react-toastify';

export const shuffleArray = (array) => {
  var currentIndex = array.length,
    temporaryValue,
    randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
  return array;
};

export const renderRatingStars = (rating) => {
  return [...Array(5)].map((el, i) =>
    // check if current star should be half
    i < rating && i + 1 > rating ? (
      <i key={i} className="bi bi-star-half icon" />
    ) : // not half, so check if current star should be full
    i < rating ? (
      <i key={i} className="bi bi-star-fill icon" />
    ) : (
      // else, current star should be empty
      <i key={i} className="bi bi-star icon" />
    ),
  );
};

export const formatPostal = (string) => {
  return (string.slice(0, 3) + ' ' + string.slice(3)).toUpperCase();
};

export const capitalizeFirstLetterEachWord = (string) => {
  const words = string.replace('-', ' ').split(' ');
  for (let i = 0; i < words.length; i++) {
    words[i] = words[i][0].toUpperCase() + words[i].substr(1);
  }
  words.join(' ');
  return words;
};

export const toastSetting = {
  position: toast.POSITION.TOP_CENTER,
  draggable: true,
};
export const toastSetting2 = {
  position: toast.POSITION.TOP_RIGHT,
  draggable: true,
};

export const toastTopCenter = (type, message) => {
  switch (type) {
    case 'error':
      toast.error(message, { position: toast.POSITION.TOP_CENTER });
      break;
    case 'success':
      toast.success(message, { position: toast.POSITION.TOP_CENTER });
      break;
    default:
      break;
  }
};

/**
 * This method calculate product price/order price based on orginal price (required), discount (required) & quantity (if yes)
 * @returns price after calculation
 */
export const calculatePrice = (price, discount, quantity) => {
  if (quantity) {
    const ItemOrderPrice = (quantity * price * (100 - discount)) / 100;
    return ItemOrderPrice.toFixed(2);
  } else return ((price * (100 - discount)) / 100).toFixed(2);
};
export const addItemToFavourite = (existingItems, itemToAdd) => {
  const existingListItem = existingItems.find((item) => item._id === itemToAdd._id);
  if (existingListItem) {
    toast.warn('Item already exists in your favourite list', toastSetting);
    return existingItems;
  }
  toast('Item was successfully added to Favourites !', toastSetting);
  return [...existingItems, itemToAdd];
};

export const addItemToCart = (existingItems, itemToAdd, orderToAdd) => {
  // CHECK IF ITEM ALREADY EXISTS IN CART
  let existingListItem = existingItems.find((item) => item._id === itemToAdd._id);

  // 1. IF ITEM EXIST --> can be either same order or new order for that ITEM
  if (existingListItem) {
    let orders = existingListItem.orders;
    const existingOrder = orders.find(
      (existOrder) =>
        existOrder.color === orderToAdd.color && existOrder.size === orderToAdd.size,
    );
    // STEP 1a. CHECK IF SAME ORDER already EXIST --> UPDATE QUANTITY FOR THAT ORDER
    if (existingOrder) {
      let foundProduct = existingListItem;
      let foundOrder = existingOrder;
      foundOrder.quantity += orderToAdd.quantity;
      let updatedOrders = foundProduct.orders.map((existOrder) =>
        existOrder.color === orderToAdd.color && existOrder.size === orderToAdd.size
          ? foundOrder
          : existOrder,
      );
      foundProduct.orders = updatedOrders;

      return existingItems.map((item) =>
        item._id === itemToAdd._id ? foundProduct : item,
      );
    }

    // STEP 1b. IF ORDER IS DIFFERENT for that ITEM --> ADD ORDER TO ITEM's ORDERS ARRAY
    else {
      let foundProduct = existingListItem;
      foundProduct.orders.push(orderToAdd);
      return existingItems.map((item) =>
        item._id === itemToAdd._id ? foundProduct : item,
      );
    }
  }

  // 2. IF ITEM DOES NOT EXIST --> ADD ITEM with NEW ORDER
  const orders = [];
  orders.push(orderToAdd);
  return [...existingItems, { ...itemToAdd, orders }];
};

export const removeItemFromFavourite = (existingItems, itemToRemove) => {
  return existingItems.filter((item) => item._id !== itemToRemove._id);
};

export const removeItemOrderFromCart = (existingItems, itemToRemove, orderToDelete) => {
  // FIND PRODUCT ITEM THAT NEEDS REMOVE ORDERS
  let existingListItem = itemToRemove;

  // 1. If that product has only 1 order -> remove that product from cart
  if (existingListItem.orders.length === 1) {
    toast.warn('Order was removed successfully', toastSetting);
    return existingItems.filter((item) => item._id !== itemToRemove._id);
  }

  // 2. If that product includes other nested orders
  // -> Filter to remove the requested order, then Update the product with new filtered orders array
  else {
    const filteredOrders = existingListItem.orders.filter(
      (o) => o.size !== orderToDelete.size || o.color !== orderToDelete.color,
    );
    existingListItem.orders = filteredOrders;
    toast.warn('Order was removed successfully', toastSetting);
    return existingItems.map((item) =>
      item._id === itemToRemove._id ? existingListItem : item,
    );
  }
};

export const decreaseQuantity = (existingItems, itemToDecrease, orderToDecrease) => {
  let existingListItem = itemToDecrease;
  // 1. If order has quantity = 1 --> remove that order from product
  if (orderToDecrease.quantity === 1) {
    const filteredOrders = existingListItem.orders.filter(
      (o) => o.size !== orderToDecrease.size || o.color !== orderToDecrease.color,
    );
    existingListItem.orders = filteredOrders;

    return existingItems.map((item) =>
      item._id === itemToDecrease._id ? existingListItem : item,
    );
  }

  // 2. If order has quantity > 1 --> Decrease quantity for that order & Update product with new orders array
  else {
    // 2a. Decrease quantity for order
    orderToDecrease.quantity -= 1;
    // 2b. Update product with new orders array
    const productOrders = existingListItem.orders.map((order) =>
      order.size !== orderToDecrease.size || order.color !== orderToDecrease.color
        ? order
        : orderToDecrease,
    );
    existingListItem.orders = productOrders;

    return existingItems.map((item) =>
      item._id === itemToDecrease._id ? existingListItem : item,
    );
  }
};

export const increaseQuantity = (existingItems, itemToIncrease, orderToIncrease) => {
  let existingListItem = itemToIncrease;
  // 1. decrease quantity for order
  orderToIncrease.quantity += 1;
  // 2. make a new updated orders array for that product
  const productOrders = existingListItem.orders.map((o) =>
    o.size !== orderToIncrease.size || o.color !== orderToIncrease.color
      ? o
      : orderToIncrease,
  );
  // 3. update that product with new order arrays
  existingListItem.orders = productOrders;

  return existingItems.map((item) =>
    item._id === itemToIncrease._id ? existingListItem : item,
  );
};

export const sortFilterProducts = (sortFilterOption, categoryProducts) => {
  let copyProducts = [...categoryProducts];
  let result;
  switch (sortFilterOption) {
    case 'popular':
      copyProducts.sort((a, b) => b.saleCount - a.saleCount);
      result = copyProducts;
      break;
    case 'price-lth':
      copyProducts.sort(
        (a, b) => a.price * (100 - a.discount) - b.price * (100 - b.discount),
      );
      result = copyProducts;
      break;
    case 'price-htl':
      copyProducts.sort(
        (a, b) => b.price * (100 - b.discount) - a.price * (100 - a.discount),
      );
      result = copyProducts;
      break;

    case '0-20':
    case '21-50':
    case '51-100':
    case '101-above':
      let range = sortFilterOption.split('-');
      if (isNaN(range[1] * 1)) {
        result = copyProducts.filter(
          (p) => calculatePrice(p.price, p.discount) * 1 > range[0] * 1,
        );
      } else {
        result = copyProducts.filter(
          (p) =>
            calculatePrice(p.price, p.discount) * 1 > range[0] * 1 &&
            calculatePrice(p.price, p.discount) * 1 < range[1] * 1,
        );
      }
      break;

    case 'red':
    case 'blue':
    case 'yellow':
    case 'pink':
    case 'white':
    case 'brown':
    case 'green':
    case 'orange':
    case 'black':
    case 'purple':
      result = categoryProducts.filter((p) => {
        return p.variation.find((i) => i.color === sortFilterOption) ? p : '';
      });
      break;

    default:
      result = categoryProducts;
      break;
  }
  return result;
};

export const getSortFilterName = (sortFilterOption) => {
  switch (sortFilterOption) {
    case 'popular':
      return 'Sort by Popularity';
    case 'price-lth':
      return 'Sort by price: Low To High';
    case 'price-htl':
      return 'Sort: Price High To Low';
    case '0-20':
    case '21-50':
    case '51-100':
    case '101-above':
      let range = sortFilterOption.split('-');
      if (isNaN(range[1] * 1)) {
        return `Filter: Price above $${range[0]}`;
      } else {
        return `Filter: Price between $${range[0]} and $${range[1]}`;
      }
    case 'red':
    case 'blue':
    case 'yellow':
    case 'pink':
    case 'white':
    case 'brown':
    case 'green':
    case 'orange':
    case 'black':
    case 'purple':
      return `Sort by color: ${sortFilterOption}`;
    default:
      break;
  }
};
