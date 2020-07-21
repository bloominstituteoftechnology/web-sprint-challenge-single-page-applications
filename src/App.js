import React, {useState} from "react";
import {Route, Switch} from 'react-router-dom';
import HomePage from './Components/HomePage';
import PizzaForm from './Components/PizzaForm';
import NavBar from './Components/NavBar';




const App = () => {
  const [orders, setOrders] = useState([]);

  const addOrder = order => {
    setOrders(...orders, order);
  }

  return (
    <div>
      <NavBar /> 
      <Switch>
        <Route path='/buildapizza'>
          <PizzaForm addOrder={addOrder}/>
        </Route>
        <Route exact path="/">
          <HomePage orders={orders}/>
        </Route>
      </Switch>
    </div>
  );
};
export default App;
