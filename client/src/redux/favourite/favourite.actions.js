import { FavouriteActionTypes } from './favourite.types';

export const addItemToFavourite = (item) => ({
  type: FavouriteActionTypes.ADD_ITEM_TO_FAVOURITE,
  payload: item,
});

export const removeItemFromFavourite = (item) => ({
  type: FavouriteActionTypes.REMOVE_ITEM_FROM_FAVOURITE,
  payload: item,
});

export const clearItemFromList = (item) => ({
  type: FavouriteActionTypes.CLEAR_ITEM_FROM_LIST,
  payload: item,
});

export const clearList = () => ({
  type: FavouriteActionTypes.CLEAR_LIST,
});
