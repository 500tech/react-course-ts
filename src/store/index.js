import { createStore } from 'redux';
import { todosReducer } from './todos';

export default createStore(todosReducer);

export const init = () => ({ type: 'INIT' });
