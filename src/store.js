import { createStore } from 'redux';
import myReducer from './reducers/index';
export const store = window.store || createStore(myReducer, {});
window.store = store;
