import React from "react";
import PizzaForm from './Form';
import { Route, Link } from 'react-router-dom';
import Home from './Home';

const App = () => {
  return (
    <>
      {/* <Home /> */}
      
      {/* <PizzaForm /> */}
      <div>
        <Route exact path ='/' component = {Home}></Route>
        <Route path ='/Form' component ={PizzaForm}></Route>
      </div>
    </>
  
  );
};
export default App;
