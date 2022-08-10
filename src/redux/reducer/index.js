
import { combineReducers } from "redux";
import loginState from "./login";
import loadingState from "./loader";
import  examCreateReducer from './CreateExam'

const allReducers=combineReducers({
    loginState:loginState,
    loadingState:loadingState,
    examCreateReducer:examCreateReducer,
})
export default allReducers;
