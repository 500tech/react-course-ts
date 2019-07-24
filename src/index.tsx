import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider as StoreProvider } from "react-redux";
import "./index.css";
import App from "./components/App";
import { TodosProvider } from "./components/TodosProvider";
import { RouterProvider } from "./components/RouterProvider";
import store from "./state";

ReactDOM.render(
  <Router>
    <RouterProvider>
      <StoreProvider store={store}>
        <TodosProvider>
          <App />
        </TodosProvider>
      </StoreProvider>
    </RouterProvider>
  </Router>,
  document.getElementById("root")
);
