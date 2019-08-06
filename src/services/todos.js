import { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  ADD_TODO,
  TOGGLE_TODO,
  REMOVE_TODO,
  FETCH_TODOS,
  SET_TODOS,
} from 'state/actions';

export function useTodosService() {
  const todos = useSelector(state => state.todos);
  const dispatch = useDispatch();

  const toggleTodo = todo => dispatch({ type: TOGGLE_TODO, payload: todo });
  const removeTodo = todo => dispatch({ type: REMOVE_TODO, payload: todo });
  const addTodo = text => dispatch({ type: ADD_TODO, payload: text });
  const fetchTodos = useCallback(
    () =>
      dispatch({
        type: FETCH_TODOS,
        meta: {
          api: {
            onSuccess: SET_TODOS,
            url: 'https://jsonplaceholder.typicode.com/todos',
          },
        },
      }),
    [dispatch]
  );

  return { todos, toggleTodo, removeTodo, addTodo, fetchTodos };
}
