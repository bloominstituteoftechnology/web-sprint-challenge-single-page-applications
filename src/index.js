import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import {BrowserRouter as Router} from 'react-router-dom'
import {ThemeProvider} from 'styled-components'
import theme from './theme'


ReactDOM.render(<ThemeProvider theme={theme}><Router><App /></Router></ThemeProvider>, document.getElementById("root"));
