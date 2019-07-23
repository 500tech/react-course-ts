import React, { useState } from "react";
import uuid from "uuid";
import { Route, Switch, Link, Redirect } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { TodoAdder2 } from "./TodoAdder";
import { TodoList } from "./TodoList";
import { NavigationBar } from "./NavigationBar";
import { Home } from "./Home";
import { NotFound } from "./NotFound";
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
        <NavigationBar />
        <h1
          onClick={() =>
            setTheme(theme === lightTheme ? darkTheme : lightTheme)
          }
        >
          Todo list
        </h1>
        <div>
          <Link to="/todos">Todos</Link>
        </div>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route
            path="/todos"
            render={() => (
              <>
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
                <Route
                  path="/todos/:todoId"
                  render={({ match }) => {
                    const { todoId } = match.params;
                    const todo = todos.find(({ id }) => todoId === id);
                    if (!todo) {
                      return <Redirect to="/404" />;
                    }
                    return <p>{todo.text}</p>;
                  }}
                />
              </>
            )}
          />
          <Route path="/" component={NotFound} />
        </Switch>
      </div>
    </ThemeProvider>
  );
};

export default App;
