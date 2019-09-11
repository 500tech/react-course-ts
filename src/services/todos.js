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
  const toggleTodo = todoId => {
    const todo = todos.find(t => t.id === todoId);
    if (todo) {
      dispatch({
        type: 'UPDATE_TODO',
        payload: {
          todoId,
          update: {
            completed: !todo.completed,
          },
        },
      });
    }
  };
  const removeTodo = todoId => {
    dispatch({
      type: 'REMOVE_TODO',
      payload: todoId,
    });
  };
  const addTodo = text => {
    dispatch({
      type: 'ADD_TODO',
      payload: text,
    });
  };
  return { todos, toggleTodo, removeTodo, addTodo };
}
