import { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';

/**
 * interface Todo {
 *  id: number;
 *  title: string;
 *  completed: boolean;
 * }
 */

export function useTodos() {
  const todos = useSelector(state => state.todos);
  const dispatch = useDispatch();
  const fetchTodos = useCallback(() => {
    dispatch({
      type: 'FETCH_TODOS',
      meta: {
        api: {
          url: 'https://jsonplaceholder.typicode.com/todos',
          onSuccess: 'SET_TODOS',
        },
      },
    });
  }, [dispatch]);
  const setTodo = (todoId, update) => {
    dispatch({
      type: 'UPDATE_TODO',
      payload: {
        todoId,
        update,
      },
      meta: {
        api: {
          url: `https://jsonplaceholder.typicode.com/todos/${todoId}`,
          method: 'PATCH',
          data: update,
          onSuccess: 'SET_TODO',
        },
      },
    });
  };
  const toggleTodo = todoId => {
    const todo = todos.find(t => t.id === todoId);
    if (todo) {
      return setTodo(todoId, {
        completed: !todo.completed,
      });
    }
  };
  const removeTodo = todoId => {
    dispatch({
      type: 'DELETE_TODO',
      payload: todoId,
      meta: {
        api: {
          url: `https://jsonplaceholder.typicode.com/todos/${todoId}`,
          method: 'DELETE',
          onSuccess: 'REMOVE_TODO',
        },
      },
    });
  };
  const addTodo = text => {
    dispatch({
      type: 'CREATE_TODO',
      payload: { title: text, completed: false },
      meta: {
        api: {
          onSuccess: 'ADD_TODO',
          method: 'POST',
          url: 'https://jsonplaceholder.typicode.com/todos',
          data: { title: text, completed: false },
        },
      },
    });
  };
  return { todos, toggleTodo, removeTodo, addTodo, fetchTodos };
}
