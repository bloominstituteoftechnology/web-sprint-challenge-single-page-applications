import React, { useState } from "react";
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import Home from './components/Home';
import Help from './components/Help';
import Form from './components/Form';
import OrderList from './components/OrderList';

const App = () => {
  const [orders, setOrders] = useState([]);

  return (
    <Router>
      <div className='header'>
        <nav>
          <h1>Lambda Eats</h1>
          <div className='nav-links'>
            <Link to='/'>Home</Link>
            <Link to='/help'>Help</Link>
          </div>
        </nav>
      </div>
      <div className="App">
        <Switch>
          <Route path='/pizza'>
            <Form orders={orders} setOrders={setOrders}/>
            <OrderList orders={orders}/>
          </Route>
          <Route path='/help' component={Help} />
          <Route exact path='/' component={Home} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
