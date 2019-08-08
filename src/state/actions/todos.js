import { actionCreator } from './utils';

export const POST_TODO = 'POST_TODO';
export const ADD_TODO = 'ADD_TODO';
export const DELETE_TODO = 'DELETE_TODO';
export const REMOVE_TODO = 'REMOVE_TODO';
export const UPDATE_TODO = 'UPDATE_TODO';
export const SET_TODO = 'SET_TODO';
export const SET_TODOS = 'SET_TODOS';
export const FETCH_TODOS = 'FETCH_TODOS';

export const addTodo = actionCreator(POST_TODO, todo => ({
  api: {
    group: 'add-todo',
    url: 'http://localhost:8080/todos',
    method: 'POST',
    onSuccess: ADD_TODO,
    data: todo,
  },
}));

export const fetchTodos = actionCreator(FETCH_TODOS, () => ({
  api: {
    group: 'todos',
    onSuccess: SET_TODOS,
    url: 'http://localhost:8080/todos',
  },
}));

export const updateTodo = actionCreator(UPDATE_TODO, todo => ({
  api: {
    group: 'update-todo',
    url: `http://localhost:8080/todos/${todo.id}`,
    method: 'PUT',
    onSuccess: SET_TODO,
    data: todo,
  },
}));

export const deleteTodo = actionCreator(DELETE_TODO, todo => ({
  meta: {
    api: {
      url: `http://localhost:8080/todos/${todo.id}`,
      method: 'DELETE',
      onSuccess: REMOVE_TODO,
    },
  },
}));
