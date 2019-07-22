import React, { useState } from "react";
import uuid from "uuid";
import { ThemeProvider } from "styled-components";
import { TodoAdder2 } from "./TodoAdder";
import { TodoList } from "./TodoList";
import { useTodosService } from "../services/todos";
import { lightTheme, darkTheme } from "./theme";

function NoItemsEmptyState() {
  return <p>Oh noes, no items yet! Please create one :)</p>;
}

const App: React.FC = () => {
  const { todos, toggleTodo, removeTodo, addTodo } = useTodosService([
    { id: uuid(), text: "Learn hooks", done: false },
    { id: uuid(), text: "Eat breakfast", done: true }
  ]);
  const [theme, setTheme] = useState<typeof lightTheme | typeof darkTheme>(
    lightTheme
  );

  return (
    <ThemeProvider theme={theme}>
      <div className="container">
        <h1
          onClick={() =>
            setTheme(theme === lightTheme ? darkTheme : lightTheme)
          }
        >
          Todo list
        </h1>
        <TodoAdder2 onAddTodo={addTodo} />
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
    </ThemeProvider>
  );
};

export default App;
