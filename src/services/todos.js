import uuid from 'uuid';
import { useState } from 'react';

export function useTodosService(initialTodos) {
  const [todos, setTodos] = useState(initialTodos);

  const toggleTodo = todo => {
    return setTodos(
      todos.map(t =>
        t.id === todo.id
          ? {
              ...todo,
              done: !todo.done,
            }
          : t
      )
    );
  };

  const removeTodo = todo => setTodos(todos.filter(({ id }) => id !== todo.id));
  const addTodo = text =>
    setTodos([
      {
        id: uuid(),
        text,
        done: false,
      },
      ...todos,
    ]);
  return { todos, toggleTodo, removeTodo, addTodo };
}
