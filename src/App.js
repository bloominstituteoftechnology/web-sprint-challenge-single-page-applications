import React from "react";
import { Route, Link } from "react-router-dom";
import PizzaForm from './components/PizzaForm'

const App = () => {
  
  return (
    <div>
      <p>You can remove this code and create your own header</p>
      <Link to='/'>Home</Link>
      <Link to='/Pizza'>Make a Pie!</Link>

      <Route exact path='/'><h1>Lambda Eats</h1></Route>
      <Route path='/Pizza' component={PizzaForm} />
    </div>
  );
};
export default App;
