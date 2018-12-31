import { createStore } from 'redux';
import todosReducer from './todos.reducer';

export default createStore(todosReducer);

export const init = () => ({ type: 'INIT' });
