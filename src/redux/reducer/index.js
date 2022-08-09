import { combineReducers } from "redux";
import loginState from "./login";
import loadingState from "./loader";

const allReducers = combineReducers({
  loginState,
  loadingState,
});

export default allReducers;
