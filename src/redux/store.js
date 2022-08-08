import { legacy_createStore } from "redux";
import allReducers from "./reducer";

const store = legacy_createStore(
  allReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
export default store;
