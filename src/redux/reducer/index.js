import loginState from './login'
import loadingState from './loader';
import { combineReducers } from "redux";

const allReducers=combineReducers({
    loginState:loginState,
    loadingState:loadingState,
})

export default allReducers;