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

export const capitalizeFirstLetterEachWord = (string) => {
  const words = string.replace('-', ' ').split(' ');
  for (let i = 0; i < words.length; i++) {
    words[i] = words[i][0].toUpperCase() + words[i].substr(1);
  }
  words.join(' ');
  return words;
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

export const addItemToFavourite = (existingItems, itemToAdd) => {
  // console.log('existingItems', existingItems);
  // console.log('itemToAdd', itemToAdd);
  const existingListItem = existingItems.find((item) => item._id === itemToAdd._id);
  if (existingListItem) {
    return existingItems;
  }
  // if item is not found in array, we will return the original existingItems and add base quantity =1
  return [...existingItems, itemToAdd];
};

export const addItemToCart = (existingItems, itemToAdd, orderToAdd) => {
  // CHECK IF ITEM ALREADY EXISTS IN CART
  let existingListItem = existingItems.find((item) => item._id === itemToAdd._id);
  // 1a. IF ITEM EXIST
  if (existingListItem) {
    let orders = existingListItem.orders;

    const existingOrder = orders.find(
      (existOrder) =>
        existOrder.color === orderToAdd.color && existOrder.size === orderToAdd.size,
    );
    // STEP 2a. CHECK IF SAME ORDER EXIST --> QUANTITY + 1 FOR THAT ORDER
    if (existingOrder) {
      let foundProduct = existingListItem;
      let foundOrder = existingOrder;
      foundOrder.quantity += 1;
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

    // STEP 2b. IF ORDER IS DIFFERENT --> ADD ORDER TO ARRAYS
    else {
      let foundProduct = existingListItem;
      foundProduct.orders.push(orderToAdd);
      return existingItems.map((item) =>
        item._id === itemToAdd._id ? foundProduct : item,
      );
    }
  }

  // 1b. IF ITEM DOES NOT EXIST
  const orders = [];
  orders.push(orderToAdd);
  return [...existingItems, { ...itemToAdd, orders }];
};

export const removeItemFromFavourite = (existingItems, itemToRemove) => {
  return existingItems.filter((item) => item._id !== itemToRemove._id);
};

export const removeItemFromCart = (existingItems, itemToRemove) => {
  const existingListItem = existingItems.find((item) => item._id === itemToRemove._id);
  if (existingListItem.quantity === 1) {
    return existingItems.filter((item) => item.id !== itemToRemove.id);
  }
  return existingItems.map((item) =>
    item.id === itemToRemove.id ? { ...item, quantity: item.quantity - 1 } : item,
  );
};
