import React from 'react';
import { Provider } from 'react-redux';
import { store } from './store';
import { createStore } from 'redux';
import myReducer from './reducers/index';

const getStore = (initialState = {}) => {
    if (global.storeInstance) return global.storeInstance;
    const storeInstance = createStore(myReducer, initialState);
    global.storeInstance = storeInstance;
    return storeInstance;
};

// method 1
export default props => {
    return <Provider store={store}>{props.children}</Provider>;
};

// method 2
/* export default props => {
    return (
        <Provider store={getStore(props.initialState)}>
            {props.children}
        </Provider>
    );
};
 */