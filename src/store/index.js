import { createStore, combineReducers } from 'redux';
import { todosReducer } from './todos';
import { counterReducer } from './counter';

export default createStore(combineReducers({
  todos: todosReducer,
  counter: counterReducer,
}));

export const init = () => ({ type: 'INIT' });
