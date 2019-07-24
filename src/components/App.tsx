import React, { lazy, Suspense } from "react";
import { Route, Switch, Link } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { NavigationBar } from "./NavigationBar";
import { Home } from "./Home";
import { NotFound } from "./NotFound";
import { themes, lightTheme } from "../theme";
import { useAppSelector, useAction } from "../services/state";
import { changeTheme } from "../state/actions";
const TodosPage = lazy(() => import("./TodosPage"));

const App: React.FC = () => {
  const theme = useAppSelector(state => {
    return themes[state.theme];
  });
  const doChangeTheme = useAction(changeTheme);

  return (
    <ThemeProvider theme={theme}>
      <div className="container">
        <NavigationBar />
        <h1
          onClick={() => {
            doChangeTheme(theme === lightTheme ? "dark" : "light");
          }}
        >
          Todo list
        </h1>
        <div>
          <Link to="/todos">Todos</Link>
        </div>
        <Suspense fallback={<p>Loading...</p>}>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/todos" component={TodosPage} />
            <Route path="/" component={NotFound} />
          </Switch>
        </Suspense>
      </div>
    </ThemeProvider>
  );
};

export default App;
