import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import userReducer from './user/user.reducer';
import productReducer from './product/product.reducer';
import categoryReducer from './category/category.reducer';
import favouriteReducer from './favourite/favourite.reducer';
import cartReducer from './cart/cart.reducer';
import iconReducer from './icon/icon.reducer';

const persistConfig = {
  key: 'root', // start from the root
  storage, // check import cai j thi type vao day
  whitelist: ['product', 'category'], // array of string name of reducers you wanna use
};

const rootReducer = combineReducers({
  user: userReducer,
  product: productReducer,
  category: categoryReducer,
  favourite: favouriteReducer,
  cart: cartReducer,
  icon: iconReducer,
});

export default persistReducer(persistConfig, rootReducer);
