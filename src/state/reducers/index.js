import { combineReducers } from 'redux';
import { count } from './count.reducer';
import { clicks } from './clicks.reducer';
import { todos } from './todos.reducer';

export default combineReducers({
  count,
  clicks,
  todos,
});
