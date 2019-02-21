import { createStore, createDispatcher } from '../flux';
import { countReducer, clicksReducer } from './reducers';
import mw from './middleware';

export const countStore = createStore(countReducer);
export const clicksStore = createStore(clicksReducer);
export const dispatch = createDispatcher({ countStore, clicksStore }, mw);
