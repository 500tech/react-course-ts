import { useState, useCallback } from 'react';
import { getId } from 'utils';

export function useTodosService() {
  const [todos, setTodos] = useState([
    { id: getId(), title: 'Do this', completed: false },
    { id: getId(), title: 'Do that', completed: true },
  ]);
  const toggleTodo = useCallback(todoId => {
    setTodos(todos =>
      todos.map(todo => {
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
    setTodos(todos =>
      todos.filter(todo => {
        return todo.id !== todoId;
      })
    );
  }, []);
  return { todos, toggleTodo, removeTodo };
}
