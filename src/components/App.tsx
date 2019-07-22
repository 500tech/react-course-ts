import React, { useState } from "react";
import uuid from "uuid";
import { TodoList } from "./TodoList";
import { useTodosService } from "../services/todos";

function NoItemsEmptyState() {
  return <p>Oh noes, no items yet! Please create one :)</p>;
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
