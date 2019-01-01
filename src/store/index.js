import { configureStore, combineReducers } from 'redux-starter-kit';

import log from './middleware/log.middleware';
import api from './middleware/api.middleware';

import todos from './todos';
import { counterReducer } from './counter';

export default configureStore({
  reducer: combineReducers({
    todos: todos.reducer,
    counter: counterReducer,
  }),
  middleware: [log, api],
  devTools: process.env.NODE_ENV !== 'production',
});

export const init = () => ({ type: 'INIT' });
