import React from "react";
import {Route, Switch} from 'react-router-dom';
import HomePage from './Components/HomePage';
import PizzaForm from './Components/PizzaForm';
import NavBar from './Components/NavBar'



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
