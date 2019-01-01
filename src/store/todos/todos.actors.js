import * as todosActions from './todos.actions';
import { createAction } from '../utils';

export const createTodo = createAction(todosActions.CREATE_TODO, todo => ({
  url: '/api/todos',
  method: 'POST',
  body: todo,
  successAction: todosActions.ADD_TODO
}));

export const toggleTodo = createAction(todosActions.TOGGLE_TODO);

export const getTodos = createAction(todosActions.GET_TODOS, {
  url: '/api/todos',
  successAction: todosActions.SET_TODOS,
});
