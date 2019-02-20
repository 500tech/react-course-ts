import { createStore } from 'redux';
import mw from './middleware';
import reducer from './reducers';

/**
 * interface Action {
 *  type: string;
 *  payload?: jsonable;
 *  meta?: jsonable;
 *  error?: jsonable;
 * }
 */

export const store = createStore(reducer, mw);
