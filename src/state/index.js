import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import mainReducer from './reducers';
import mw from './middleware';

export const store = createStore(mainReducer, composeWithDevTools(mw));
