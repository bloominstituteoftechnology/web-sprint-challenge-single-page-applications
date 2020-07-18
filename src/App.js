import React from "react";
import {Route, Switch, Router} from 'react-router-dom';
import Home from './Components/HomePage';
import Order from './Components/PizzaForm';



const App = () => {
  return (
    <div>
      <NavBar /> 
      <Switch>
        <Route path='/buildapizza'>
          <PizzaForm/>
        </Route>
        <Route exact path="/">
          <HomePage/>
        </Route>
      </Switch>
    </div>
  );
};
export default App;
