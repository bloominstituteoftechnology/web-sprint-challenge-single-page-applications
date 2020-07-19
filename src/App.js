import React, { useState } from "react";
import { Route, Link, Switch } from 'react-router-dom';
import Home from './components/Home';
import Help from './components/Help';
import Form from './components/Form';
import OrderList from './components/OrderList';

const App = () => {
  const [orders, setOrders] = useState([]);

  return (
    <div className="App">
      <div className='header'>
        <nav>
          <h1>Lambda Eats</h1>
          <div className='nav-links'>
            <Link id='nav-home' to='/'>Home</Link>
            <Link id='nav-help' to='/help'>Help</Link>
          </div>
        </nav>
      </div>
      <Switch>
        <Route path='/pizza'>
          <Form orders={orders} setOrders={setOrders}/>
          <OrderList orders={orders}/>
        </Route>
        <Route path='/help' component={Help} />
        <Route exact path='/' component={Home} />
      </Switch>
    </div>
  );
};

export default App;
