import { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  ADD_TODO,
  TOGGLE_TODO,
  REMOVE_TODO,
  FETCH_TODOS,
  SET_TODOS,
  POST_TODO,
  SET_TODO,
  DELETE_TODO,
} from 'state/actions';

export function useTodosService() {
  const todos = useSelector(state => state.todos);
  const dispatch = useDispatch();

  const toggleTodo = todo => {
    const updatedResource = {
      ...todo,
      completed: !todo.completed,
    };
    dispatch({
      type: TOGGLE_TODO,
      payload: updatedResource,
      meta: {
        api: {
          group: 'todos',
          url: `https://jsonplaceholder.typicode.com/todos/${todo.id}`,
          method: 'PUT',
          data: updatedResource,
          onSuccess: SET_TODO,
        },
      },
    });
  };
  const removeTodo = todo =>
    dispatch({
      type: DELETE_TODO,
      payload: todo,
      meta: {
        api: {
          group: 'todos',
          url: `https://jsonplaceholder.typicode.com/todos/${todo.id}`,
          method: 'DELETE',
          onSuccess: REMOVE_TODO,
        },
      },
    });
  const addTodo = text => {
    const partialTodo = { completed: false, title: text };
    dispatch({
      type: POST_TODO,
      payload: partialTodo,
      meta: {
        api: {
          group: 'todos',
          url: 'https://jsonplaceholder.typicode.com/todos',
          method: 'POST',
          data: partialTodo,
          onSuccess: ADD_TODO,
        },
      },
    });
  };
  const fetchTodos = useCallback(
    () =>
      dispatch({
        type: FETCH_TODOS,
        meta: {
          api: {
            group: 'todos',
            onSuccess: SET_TODOS,
            url: 'https://jsonplaceholder.typicode.com/todos',
          },
        },
      }),
    [dispatch]
  );

  return { todos, toggleTodo, removeTodo, addTodo, fetchTodos };
}
