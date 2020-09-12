import React from "react";
import { NavLink, Route, Switch } from "react-router-dom";
import Form from "./components/Form";
import HomePage from "./components/HomePage";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      
        <Route exact path="/">
          <HomePage />
        </Route>
        
    </div>
  );
};
export default App;
