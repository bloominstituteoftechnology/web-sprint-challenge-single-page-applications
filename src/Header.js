import React from "react";
import { Link, Route } from "react-router-dom";
import PizzaForm from "./PizzaForm";
import App from "./App";
import "./App.css";
import Logo from "./Pizza.jpg";

function PizzaHeader() {
  return (
    <div className="nav-links">
      <div className="navBar">
      <div className="link1">
        <Link to="/">Home</Link>
      </div>
      <div className="link2">
        <Link to="/Form">Order Online</Link>
     </div> 
     </div>
      <h1>Ratatouille's Pizzeria</h1>
      <img src={Logo} alt ="pizza"/>
      <Route exact path="/">
        <App/>
      </Route>
      <Route path="/Form">
        <PizzaForm/>
      </Route>
   </div>
   );}
export default PizzaHeader
