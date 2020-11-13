import React, { useState } from "react";
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import PizzaForm from './Components/PizzaForm';
import './App.css';

const App = () => {
  return (
    <Router>
      <div className='header'>
        <h1>Lambda Eats</h1>
        <div>
          <button id='home'><Link to ='/'>Home</Link></button>
          <button id='pizza'><Link to ='./pizza'>Build Pizza</Link></button>
          <button id='help'>Help</button>
        </div>
      </div> 
      <div>
        <Switch>
          <Route exact path='/' />
          <Route path='PizzaForm' component={PizzaForm} />
        </Switch>
      </div>
      <PizzaForm />
    </Router>
  );
};
export default App;
