import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Home From "./Home"

// ReactDOM.render(<App />, document.getElementById("root"));
const rootElement = document.getElementById("root");
ReactDOM.render(
    <Router>
        <App />
    
    </Router>,
    rootElement

);