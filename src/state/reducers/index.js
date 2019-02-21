import { combineReducers } from 'redux';
import { count } from './count.reducer';
import { clicks } from './clicks.reducer';

export default combineReducers({
  count,
  clicks,
});
