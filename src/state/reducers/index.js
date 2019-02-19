import { combineReducers } from 'redux';
import count from './count.reducer';
import todos from './todos.reducer';

export default combineReducers({ count, todos });
