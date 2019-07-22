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

interface TodoProps {
  todo: Todo;
}

const TodoItem: React.FC<TodoProps> = ({ todo }) => {
  const style = { textDecoration: todo.done ? "line-through" : "none" };
  return <li style={style}>{todo.text}</li>;
};

interface TodoListProps {
  items: Todo[];
}

const TodoList: React.FC<TodoListProps> = ({ items }) => {
  return (
    <ul>
      {items.map(item => (
        <TodoItem key={item.id} todo={item} />
      ))}
    </ul>
  );
};

const App: React.FC = ({ children }) => {
  const [todos] = useState<Todo[]>([
    { id: uuid(), text: "Learn hooks", done: false },
    { id: uuid(), text: "Order lunch", done: true }
  ]);
  const [color, setColor] = useState("blue");

  return (
    <div className="container" onClick={() => setColor("red")}>
      <h1 style={{ color }}>Todo list</h1>
      {children ? <p>{children}</p> : null}
      {todos.length ? <TodoList items={todos} /> : <NoItemsEmptyState />}
    </div>
  );
};

export default App;
