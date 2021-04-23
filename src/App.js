import React, { useEffect,useState } from "react";
import Form from './Form';
import Home from './Home'


import { BrowserRouter as Router , Link, Switch, Route } from 'react-router-dom';


const App = () => {
  

 
  return (
    <>
      <Router>
        {/* Header */}
        <nav>
          <h1>Ricky's Pizzeria</h1>
          <div className ="navLinks">
            <Link to='/'>Home</Link>
            <Link to ='/order'>Order</Link> 
          </div>
        </nav>
        
        {/* Switch */}
        <Switch>
            {/* Form */}
            <Route path = '/order'>
              <Form/>
            </Route>

            {/* Home */}
            <Route exact path ='/'>
              <Home/>
            </Route>
          </Switch>
      </Router>
    </>
  );
};
export default App;
