import React from "react";
import ReactDOM from "react-dom";
// import { BrowserRouter } from "react-router-dom";
import { HashRouter } from "react-router-dom";
import App from "./App";
// Global imports 
import "./index.css";
import 'animate.css';
import 'bootstrap/dist/css/bootstrap.min.css';




ReactDOM.render(
    <React.StrictMode>
        <HashRouter>
            <App />
        </HashRouter>
    </React.StrictMode>,
    document.getElementById("root"));
