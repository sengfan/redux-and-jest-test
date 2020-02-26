import { combineReducers } from 'redux';
import commentReducer from './comments';
const myReducer = combineReducers({ comments: commentReducer });
export default myReducer;
