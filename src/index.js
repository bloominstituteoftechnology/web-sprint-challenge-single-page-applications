import React from "react";
import ReactDOM from "react-dom";
import "../src/components/style/App.css";
import App from "./App";
import "./components/style/index.css";
import { BrowserRouter as Router } from "react-router-dom";

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById("root")
);
