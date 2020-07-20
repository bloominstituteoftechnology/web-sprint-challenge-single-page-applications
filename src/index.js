import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import {  BrowserRouter } from 'react-router-dom'
import NavBar from './components/Navbar'
import FoodForm from './components/Pizza'
import HomePage from './components/HomePage'




ReactDOM.render(
<BrowserRouter>
<React.StrictMode>
    <App />
</React.StrictMode>
</BrowserRouter>

, document.getElementById("root"));
