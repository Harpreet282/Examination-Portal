import loginState from './login'
import { combineReducers } from "redux";

const allReducers=combineReducers({
    loginState:loginState,
})

export default allReducers;