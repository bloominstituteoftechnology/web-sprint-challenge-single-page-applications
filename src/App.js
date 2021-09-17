import React from "react";
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import HomePage from "./HomePage"
import PizzaForm from "./PizzaForm.js";


const App = () => {




  return (
    <>

      <Router>

        <a><Link to="/">HOME</Link></a>
        <a><Link to="/pizza">Pizza</Link></a>

        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route exact path="/pizza">
            <PizzaForm />
          </Route>
        </Switch>
      </Router>


    </>
  );
};
export default App;

