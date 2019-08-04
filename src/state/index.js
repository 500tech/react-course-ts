import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';
import mw from './middleware';

export default createStore(reducers, applyMiddleware(...mw));
