import loginState from './login'
import  examCreateReducer from './CreateExam'
import loadingState from './loader';
import { combineReducers } from "redux";

const allReducers=combineReducers({
    loginState:loginState,
    loadingState:loadingState,
    examCreateReducer:examCreateReducer,
})

export default allReducers;