import React, { useState, useCallback, useMemo } from "react";
import uuid from "uuid";
import "./index.css";

interface Todo {
  text: string;
  id: string;
  done: boolean;
}

function NoItemsEmptyState() {
  return <p>Oh noes, no items yet! Please create one :)</p>;
}

const NOOP = () => null;

interface TodoProps {
  todo: Todo;
  onToggleTodo?: (todo: Todo) => void;
  onRemoveTodo?: (todo: Todo) => void;
}

const TodoItem: React.FC<TodoProps> = ({
  todo,
  onToggleTodo = NOOP,
  onRemoveTodo = NOOP
}) => {
  console.log("render");
  const style = { textDecoration: todo.done ? "line-through" : "none" };
  return (
    <li
      style={style}
      onClick={e =>
        e.metaKey || e.ctrlKey ? onRemoveTodo(todo) : onToggleTodo(todo)
      }
    >
      {todo.text}
    </li>
  );
};

interface TodoListProps {
  items: Todo[];
  onToggleTodo?: (todo: Todo) => void;
  onRemoveTodo?: (todo: Todo) => void;
}

const TodoList: React.FC<TodoListProps> = ({
  items,
  onToggleTodo,
  onRemoveTodo
}) => {
  return (
    <ul>
      {items.map(item => (
        <TodoItem
          key={item.id}
          todo={item}
          onToggleTodo={onToggleTodo}
          onRemoveTodo={onRemoveTodo}
        />
      ))}
    </ul>
  );
};

function useTodosService(initialTodos: Todo[]) {
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

  return { todos, toggleTodo, removeTodo };
}

const App: React.FC = ({ children }) => {
  const { todos, toggleTodo, removeTodo } = useTodosService([
    { id: uuid(), text: "Learn hooks", done: false },
    { id: uuid(), text: "Eat breakfast", done: true }
  ]);
  const [color, setColor] = useState<"blue" | "red">("blue");

  return (
    <div className="container" onClick={() => setColor("red")}>
      <h1 style={{ color }}>Todo list</h1>
      {children ? <p>{children}</p> : null}
      {todos.length ? (
        <TodoList
          items={todos}
          onToggleTodo={toggleTodo}
          onRemoveTodo={removeTodo}
        />
      ) : (
        <NoItemsEmptyState />
      )}
    </div>
  );
};

export default App;
