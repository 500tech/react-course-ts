import * as todosActions from './todos.actions';
import { createAction } from '../utils';

// @TODO hook createTodo to server
export const createTodo = createAction(todosActions.CREATE_TODO);

export const toggleTodo = createAction(todosActions.TOGGLE_TODO);

export const getTodos = createAction(todosActions.GET_TODOS, {
  url: '/api/todos',
  successAction: todosActions.SET_TODOS,
});
