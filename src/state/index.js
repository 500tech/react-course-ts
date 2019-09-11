import { createStore, combineReducers, applyMiddleware } from 'redux';
import * as reducers from 'state/reducers';
import mw from 'state/middleware';

const reducer = combineReducers(reducers);

export default createStore(reducer, applyMiddleware(...mw));
