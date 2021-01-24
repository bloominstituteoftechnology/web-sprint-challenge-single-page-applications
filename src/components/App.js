import React from "react";
import { Link, Switch, Route } from 'react-router-dom'
import Home from './Home'
import Form from './Form'

export default function App() {
  return (
    <div className='container'>
      <h1>Lambda Eats</h1>
      <p>Pizza delivered hot to your door</p>
      <div className='links'>
        <Link to='/'>Home</Link>
        <Link to='/form'>Order Now</Link>
      </div>
      

      <Switch>
        <Route path='/form'>
          <Form />
        </Route>

        <Route path={'/'}>
          <Home />
        </Route>
      </Switch>
    </div>
  );
};
