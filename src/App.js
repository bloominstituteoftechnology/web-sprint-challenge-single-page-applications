import React from "react";
import axios from 'axios';
import { Route, Switch } from 'react-router-dom';
import Homepage from './components/Homepage.js';
import PizzaForm from './components/PizzaForm.js';


const App = () => {
  return (
    <div>   
      <Switch>
        <Route path="/pizza">
          <PizzaForm />
        </Route>
        <Route path="/">
          <Homepage />
        </Route>
      </Switch>
    </div>
  );
};
export default App;