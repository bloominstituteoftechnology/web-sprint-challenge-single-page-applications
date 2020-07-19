import React from "react";
import {Route, Switch} from 'react-router-dom'
//Navbar
//homepage
//foodform

const App = () => {
  return (
    <div>
    <NavBar />
      <Switch>
        <Route path='/foodform'>
          <FoodForm />
        </Route>
        <Route exact path= '/'>
          <FoodForm />
        </Route>
      </Switch>
    
      <h1>Lambda Eats</h1>
      <p>You can remove this code and create your own header</p>
    </div>
  );
};
export default App;
