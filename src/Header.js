import React from "react";
import { Link, Route } from "react-router-dom";
import Form from "./Form";
import Home from "./Home";
import "./App.css";
import Logo from "./Pizza.jpg";


function Header() {
  return (
    <div className="nav-links">
      <div className="navBar">
      <div className="linkA">
        <Link to="/">Home</Link>
      </div>
      <div className="linkB">
        <Link to="/Form">Order Now</Link>
     </div> 
     </div>
      <h1>Mama Mia's Pizzeria</h1>
      <img src={Logo} alt ="pizza"/>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/Form">
        <Form />
      </Route>
   </div>
   
  );
}
export default Header;