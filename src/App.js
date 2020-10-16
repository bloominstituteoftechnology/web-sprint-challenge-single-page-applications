import React from "react";
import { Route, Link, Switch } from "react-router-dom";
import "./App.css" //if there's time for styling
import Home from "./components/Home";
import Pizza from "./components/Pizza";
//schema?


const App = () => {
  return (
      <div className="home">
        <h1>Lambda Eats!</h1>
          <p>Food for thought!</p>
        
        <div className="navlinks">
          <Link exact to="/">Home</Link>
          <Link to="/pizza">Order Here!</Link>
        </div>
      </div>
  );
};
export default App;
