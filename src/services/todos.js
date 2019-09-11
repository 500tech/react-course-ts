import { useCallback } from 'react';
import { getUniqueId } from 'utils';
import { useTodosContext } from 'providers/todos';

/**
 * interface Todo {
 *  id: number;
 *  title: string;
 *  completed: boolean;
 * }
 */

export function useTodos() {
  const [todos, setTodos] = useTodosContext();
  const toggleTodo = useCallback(
    todoId => {
      setTodos(currentTodosProvidedByReact =>
        currentTodosProvidedByReact.map(todo => {
          if (todo.id === todoId) {
            return {
              ...todo,
              completed: !todo.completed,
            };
          }
          return todo;
        })
      );
    },
    [setTodos]
  );
  const removeTodo = useCallback(
    todoId => {
      setTodos(todos => todos.filter(todo => todo.id !== todoId));
    },
    [setTodos]
  );
  const addTodo = useCallback(
    text => {
      const todo = { id: getUniqueId(), title: text, completed: false };
      setTodos(todos => [todo, ...todos]);
    },
    [setTodos]
  );
  return { todos, toggleTodo, removeTodo, addTodo };
}
