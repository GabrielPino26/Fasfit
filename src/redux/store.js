import { applyMiddleware, compose, createStore } from 'redux';
import { createLogger } from 'redux-logger'
import thunkMiddleware from 'redux-thunk';

import reducer from './reducer';

const logger = createLogger()

const store = createStore(
    reducer,
    compose(
        applyMiddleware(thunkMiddleware, logger),
    )
);
export default store;
