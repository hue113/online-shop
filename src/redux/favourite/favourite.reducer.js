import { FavouriteActionTypes } from './favourite.types';
import { addItemToFavourite, removeItemFromFavourite } from '../../utils/helper';

// const INITIAL_STATE = [];

// const favouriteReducer = (favouriteItems = INITIAL_STATE, action) => {
//   switch (action.type) {
//     case FavouriteActionTypes.ADD_ITEM:
//       return {
//         favouriteItems: addItemToFavourite(favouriteItems, action.payload),
//       };
//     case FavouriteActionTypes.REMOVE_ITEM:
//       return {
//         favouriteItems: removeItemFromList(favouriteItems, action.payload),
//       };
//     case FavouriteActionTypes.CLEAR_ITEM_FROM_LIST:
//       return {
//         favouriteItems: favouriteItems.filter((item) => item.id !== action.payload.id),
//       };
//     case FavouriteActionTypes.CLEAR_LIST:
//       return {
//         favouriteItems: [],
//       };
//     default:
//       return favouriteItems;
//   }
// };

const INITIAL_STATE = {
  favouriteItems: [],
};

const favouriteReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FavouriteActionTypes.ADD_ITEM_TO_FAVOURITE:
      return {
        ...state,
        favouriteItems: addItemToFavourite(state.favouriteItems, action.payload),
      };
    case FavouriteActionTypes.REMOVE_ITEM_FROM_FAVOURITE:
      return {
        ...state,
        favouriteItems: removeItemFromFavourite(state.favouriteItems, action.payload),
      };
    case FavouriteActionTypes.CLEAR_ITEM_FROM_LIST:
      return {
        ...state,
        favouriteItems: state.favouriteItems.filter(
          (item) => item.id !== action.payload.id,
        ),
      };
    case FavouriteActionTypes.CLEAR_LIST:
      return {
        ...state,
        favouriteItems: [],
      };
    default:
      return state;
  }
};

export default favouriteReducer;
