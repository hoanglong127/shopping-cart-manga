import { combineReducers, createStore } from "redux";
import categoryReducer from "./reducers/categoryReducer";
import productReducer from "./reducers/productReducer";
import cartReducer from "./reducers/cartReducer";

const rootReducer = combineReducers({
  categoryReducer,
  productReducer,
  cartReducer,
});

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
