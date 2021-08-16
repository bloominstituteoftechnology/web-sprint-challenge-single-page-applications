
// In 1-2 sentences, explain what React's useRouteMatch hook is used for. Route match is used to determine which component to render when a route is matched.
// How would you explain form validation to someone who has never programmed before? form validation is a feature that allows you to validate user input.
// In 1-2 sentences, define end to end testing. e2e testing is a testing method that tests your application from start to finish.


import React from "react";
import './App.css'
import PizzaHeader from "./PizzaHeader";
import {Route, Link, Switch } from 'react-router-dom';
import PizzaForm from "./PizzaForm";


const App = () => {
  return (
<div className="head">
  <PizzaHeader/>
  <Switch>
     <Route exact path='/' component={PizzaHeader} />
     <Route path='/Pizza' component={PizzaForm} />

  </Switch>
</div>
);
};


export default App;
