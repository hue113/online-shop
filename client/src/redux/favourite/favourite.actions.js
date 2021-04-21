import { FavouriteActionTypes } from './favourite.types';

export const toggleCartHidden = (state) => ({
  type: FavouriteActionTypes.TOOGLE_FAVOURITE_HIDDEN,
  // payload: state           // no need to write this, because you just need the action type, then react will automatically set the opposite for this case
});

export const addItem = (item) => ({
  type: FavouriteActionTypes.ADD_ITEM,
  payload: item,
});

export const removeItem = (item) => ({
  type: FavouriteActionTypes.REMOVE_ITEM,
  payload: item,
});

export const clearItemFromList = (item) => ({
  type: FavouriteActionTypes.CLEAR_ITEM_FROM_LIST,
  payload: item,
});

export const clearList = () => ({
  type: FavouriteActionTypes.CLEAR_LIST,
});
