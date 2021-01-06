import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// Components
import Home from './AppComponents/Home';
import OrderConfirmation from './AppComponents/OrderConfirmation';
import PizzaForm from './AppComponents/PizzaForm';
import HeaderNav from './HeaderNav';

const App = () => {
  const [orders, setOrders] = useState([]);

  const addToOrders = (inputOrder) => {
    setOrders([...orders, inputOrder]);
  };

  console.log(orders);
  return (
    <>
      <Router>
        <HeaderNav />
        <Switch>
          <Route path="/orderConfirmation">
            <OrderConfirmation order={orders[orders.length - 1]} />
          </Route>
          <Route path="/pizza">
            <PizzaForm addToOrders={(input) => addToOrders(input)} />
          </Route>
          <Route path="/" component={Home} />
        </Switch>
      </Router>
    </>
  );
};
export default App;
