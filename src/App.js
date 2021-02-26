import React from "react";

import Home from './components/Home'
import Help from './components/Help'
import { Route, Link, Switch } from 'react-router-dom'

const App = () => {
  return (
    <>
    <header>
      <h1>Lambda Eats</h1>
      <div className='navLinks'>
        <Link to='/'>Home</Link>
        <Link to='/Help'>Help</Link>
      </div>
    </header>

    <Switch>
      <Route path='/'>
        <Home />
      </Route>
    </Switch>

      
    </>
  );
};
export default App;
