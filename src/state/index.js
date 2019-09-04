import { combineReducers, createStore, applyMiddleware } from 'redux';
import * as reducers from './reducers';
import mw from './middleware';

export default createStore(combineReducers(reducers), applyMiddleware(...mw));
