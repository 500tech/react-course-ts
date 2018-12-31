import { createStore, combineReducers, applyMiddleware } from 'redux';

import log from './middleware/log.middleware';

import { todosReducer } from './todos';
import { counterReducer } from './counter';

export default createStore(
  combineReducers({
    todos: todosReducer,
    counter: counterReducer,
  }),
  applyMiddleware(log, log)
);

export const init = () => ({ type: 'INIT' });
