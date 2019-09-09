import { useState, useCallback } from 'react';
import { getUniqueId } from 'utils';

/**
 * interface Todo {
 *  id: number;
 *  title: string;
 *  completed: boolean;
 * }
 */

const TODOS = [
  { id: getUniqueId(), title: 'Go home', completed: false },
  { id: getUniqueId(), title: 'Order 10bis', completed: true },
  { id: getUniqueId(), title: 'Take a break', completed: false },
];

export function useTodos() {
  const [todos, setTodos] = useState(TODOS);
  const toggleTodo = useCallback(todoId => {
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
  }, []);
  const removeTodo = useCallback(todoId => {
    setTodos(todos => todos.filter(todo => todo.id !== todoId));
  }, []);
  return { todos, toggleTodo, removeTodo };
}
