import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider as StoreProvider } from "react-redux";
import "./index.css";
import App from "./components/App";
import { RouterProvider } from "./components/RouterProvider";
import store from "./state";

ReactDOM.render(
  <Router>
    <RouterProvider>
      <StoreProvider store={store}>
          <App />
      </StoreProvider>
    </RouterProvider>
  </Router>,
  document.getElementById("root")
);
