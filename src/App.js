import React from "react";
import { Route } from 'react-router-dom';
import Home from './Home'
import PizzaForm from './PizzaForm';
const App = () => {
  return (
    <>
      <Route exact path='/' component={Home} />
      <Route path='/pizza' component={PizzaForm} />
    </>
  );
};
export default App;
