import React, { useState } from "react";
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
}

const TodoItem: React.FC<TodoProps> = ({ todo, onToggleTodo = NOOP }) => {
  const style = { textDecoration: todo.done ? "line-through" : "none" };
  return (
    <li style={style} onClick={() => onToggleTodo(todo)}>
      {todo.text}
    </li>
  );
};

interface TodoListProps {
  items: Todo[];
  onToggleTodo?: (todo: Todo) => void;
}

const TodoList: React.FC<TodoListProps> = ({ items, onToggleTodo }) => {
  return (
    <ul>
      {items.map(item => (
        <TodoItem key={item.id} todo={item} onToggleTodo={onToggleTodo} />
      ))}
    </ul>
  );
};

const App: React.FC = ({ children }) => {
  const [todos, setTodos] = useState<Todo[]>([
    { id: uuid(), text: "Learn hooks", done: false },
    { id: uuid(), text: "Eat breakfast", done: true }
  ]);
  const [color, setColor] = useState<"blue" | "red">("blue");
  const toggleTodo = (todo: Todo) => {
    // todo.done = !todo.done;
    // setTodos([...todos]);
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
  };

  return (
    <div className="container" onClick={() => setColor("red")}>
      <h1 style={{ color }}>Todo list</h1>
      {children ? <p>{children}</p> : null}
      {todos.length ? (
        <TodoList items={todos} onToggleTodo={toggleTodo} />
      ) : (
        <NoItemsEmptyState />
      )}
    </div>
  );
};

export default App;
