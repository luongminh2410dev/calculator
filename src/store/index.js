import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import reducers from '../reducers';

const middlewares = [thunk];


const store = createStore(
    reducers,
    undefined,
    compose(applyMiddleware(...middlewares)),
);

export default store;
