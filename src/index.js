import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter as Router  } from 'react-router-dom'
import PropTypes from 'prop-types'
import "./index.css";
import App from "./App";

ReactDOM.render( <Router >
    <App />
</Router>, document.getElementById("root"));
