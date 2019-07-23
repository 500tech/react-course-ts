import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import "./index.css";
import App from "./components/App";
import { TodosProvider } from "./components/TodosProvider";

ReactDOM.render(
  <Router>
    <TodosProvider>
      <App />
    </TodosProvider>
  </Router>,
  document.getElementById("root")
);
