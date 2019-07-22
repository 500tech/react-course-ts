import { useState, useCallback } from "react";
import uuid from "uuid";

export interface Todo {
  text: string;
  id: string;
  done: boolean;
}

export function useTodosService(initialTodos: Todo[]) {
  const [todos, setTodos] = useState<Todo[]>(initialTodos);
  const toggleTodo = useCallback((todo: Todo) => {
    setTodos(todos =>
      todos.map(t =>
        t.id === todo.id
          ? {
              ...todo,
              done: !todo.done
            }
          : t
      )
    );
  }, []);

  const removeTodo = useCallback(
    (todo: Todo) => setTodos(todos => todos.filter(t => t.id !== todo.id)),
    []
  );

  const addTodo = useCallback(
    (text: string) =>
      setTodos(todos => [{ id: uuid(), text, done: false }, ...todos]),
    []
  );

  return { todos, toggleTodo, removeTodo, addTodo };
}
