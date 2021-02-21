import React from "react";
import './App.css'
import { Link, Route, Router } from "react-router-dom";
import PizzaForm from "./PizzaForm";
import "./App.css";
import './Pizza.jpg'
const App = () => {
  return (
<div className="link">
  <Router><Link to="/Form">
    <button onClick={(e)=> e.preventDefault}>Pizza Time!</button></Link>
      <Route path="/Form">
        <PizzaForm/>
      </Route>
      </Router>
</div>
);
};
export default App;