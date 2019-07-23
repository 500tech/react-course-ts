import React, { useState } from "react";
import { Route, Switch, Link } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { NavigationBar } from "./NavigationBar";
import { Home } from "./Home";
import { NotFound } from "./NotFound";
import { TodosPage } from "./TodosPage";
import { lightTheme, darkTheme } from "./theme";

const App: React.FC = () => {
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
          <Route path="/todos" component={TodosPage} />
          <Route path="/" component={NotFound} />
        </Switch>
      </div>
    </ThemeProvider>
  );
};

export default App;
