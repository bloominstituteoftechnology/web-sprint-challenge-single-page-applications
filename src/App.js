import React from "react";
import {Route, Router} from 'react-router-dom';
import Home from './Components/Home';
import Order from './Components/Order';



const App = () => {
  return (
    <>
      <h1>Lambda Eats</h1>
      <Route exact path='/' component={Home}/>
      <Route path='./order' component={Order}/>
      <p>You can remove this code and create your own header</p>
    </>
  );
};
export default App;
