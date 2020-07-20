import React from "react";
import {Route, Switch} from 'react-router-dom'
import NavBar from './components/Navbar'
import FoodForm from './components/Pizza'
import HomePage from './components/HomePage'
//Navbar
//homepage
//foodform

const App = () => {
  return (
    <div>
    <NavBar />
      <Switch>
        <Route path='/Pizza'>
          <FoodForm />
        </Route>
        <Route exact path= '/'>
          <HomePage />
        </Route>
      </Switch>
    
      <h1>Lambda Eats</h1>
      <p>You can remove this code and create your own header</p>
    </div>
  );
};
export default App;
