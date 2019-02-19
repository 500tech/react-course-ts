import { createStore } from 'redux';
import reducer from './reducers';
import mw from './middleware';

export default createStore(reducer, mw);
