import { createStore } from 'redux';
import mainReducer from './reducers';
import mw from './middleware';

export const store = createStore(mainReducer, mw);
