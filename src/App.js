import React, { useState } from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import PizzaForm from './components/PizzaForm'

const App = () => {
  
  return (
    <BrowserRouter>
      <h1>Lambda Eats</h1>
      <p>You can remove this code and create your own header</p>
      <Link to='/'>Home</Link>
      <Link to='/Pizza'>Make a Pie!</Link>

      <Route exact path='/' component={App} />
      <Route path='/Pizza' component={PizzaForm} />
    </BrowserRouter>
  );
};
export default App;
