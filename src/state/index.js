import { createStore, combineReducers } from 'redux';
import * as reducers from 'state/reducers';

const reducer = combineReducers(reducers);

export default createStore(reducer);
