import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import userReducer from "./user/user.reducer";
// import sectionReducer from "./home/section.reducer";
// import productReducer from "./product/product.reducer";
// import cartReducer from "./cart/cart.reducer";

const persistConfig = {
  key: "root", // start from the root
  storage, // check import cai j thi type vao day
  // whitelist: ["cart"], // array of string name of reducers you wanna use
  // stateReconciler: autoMergeLevel2
};

const rootReducer = combineReducers({
  user: userReducer,
});

export default persistReducer(persistConfig, rootReducer);
