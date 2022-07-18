import  examCreateReducer from './CreateExam'
import { combineReducers } from 'redux';
import loginState from './login';
import loadingState from './loader';

const allReducers=combineReducers({
    loginState:loginState,
    loadingState:loadingState,
    examCreateReducer:examCreateReducer,
})
export default allReducers;
