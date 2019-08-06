import uuid from 'uuid';
import { useContext } from 'react';
import { TodosContext } from 'providers/Todos';

export function useTodosService() {
  const [todos, setTodos] = useContext(TodosContext);

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
