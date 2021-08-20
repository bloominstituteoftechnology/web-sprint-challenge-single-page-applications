import React from "react";
import { render } from 'react-dom';
import { BrowserRouter as Router } from "react-router-dom";
import "./styles.less";
import App from "./App";

render(
    <Router>
        <App />
    </Router>
    , document.querySelector('#root')
);
