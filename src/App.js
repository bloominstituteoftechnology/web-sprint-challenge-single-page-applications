import React from "react";
import { Route, Link, Switch } from 'react-router-dom'
import OrderForm from "./components/OrderForm";
import Home from './components/Home'
import Help from './components/Help'



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
      <Route path='/orderForm'>
        <OrderForm />
      </Route>
      <Route path='/help'>
        <Help />
      </Route>
      <Route path='/'>
        <Home />
      </Route>
    </Switch>

      
    </>
  );
};
export default App;
