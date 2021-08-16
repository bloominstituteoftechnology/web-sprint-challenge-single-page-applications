import React from "react";
import { Link, Route, BrowserRouter as Router } from "react-router-dom";
import PizzaForm from "./PizzaForm";
import "./App.css";


function PizzaHeader() {
return (<Router>
  <div className="nav-links">
    <div className="navBar">
      <div className="link1">
        <h1>Lambda Eats</h1>
        <Link to="/">Home</Link>


  </div>
      <div className="link2">
      <button id="order-pizza" onClick={() => {
         window.location.href = "/Form";
       
        }}>Get Pizza</button>
        <Route path="/Form">
        <PizzaForm/>
      </Route>
     </div> 
     </div>
</div>
   </Router>
   );}
export default PizzaHeader
