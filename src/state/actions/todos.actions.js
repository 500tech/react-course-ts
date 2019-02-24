import * as actions from './types';
import { createAction } from './utils';

export const toggleTodo = createAction(actions.TOGGLE_TODO);
export const addTodo = createAction(actions.ADD_TODO);
export const removeTodo = createAction(actions.REMOVE_TODO);
export const setTodos = createAction(actions.SET_TODOS);
export const getTodos = () =>
  createAction(actions.GET_TODOS)(null, {
    api: {
      method: 'get',
      url: 'https://jsonplaceholder.typicode.com/todos',
      onSuccess: setTodos,
    },
  });
