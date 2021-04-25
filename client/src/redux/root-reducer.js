import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import userReducer from './user/user.reducer';
import productReducer from './product/product.reducer';
import categoryReducer from './category/category.reducer';
import favouriteReducer from './favourite/favourite.reducer';
import cartReducer from './cart/cart.reducer';
import toggleReducer from './toggle/toggle.reducer';

const persistConfig = {
  key: 'root', // start from the root
  storage, // check import cai j thi type vao day
  whitelist: ['product', 'category', 'favourite', 'cart'], // array of string name of reducers you wanna use
};

const rootReducer = combineReducers({
  user: userReducer,
  product: productReducer,
  category: categoryReducer,
  favourite: favouriteReducer,
  cart: cartReducer,
  toggle: toggleReducer,
});

export default persistReducer(persistConfig, rootReducer);
