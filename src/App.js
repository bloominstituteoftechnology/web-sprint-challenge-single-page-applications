import React, {useState} from "react";
import {BrowserRouter as Router} from 'react-router-dom';
import {Route} from 'react-router-dom'
import Form from './components/Form'
import Pizza from './components/Pizza'
import Navigation from './components/Navigation'
import './App.css'

const App = () => {

    const [order, setOrder] = useState([]);

  return (
    <Router>
      <Navigation />
      <div>
        <Route exact path="/">
          <p>PIZZA</p>
          <p>Order Form</p>
        </Route>
        <Route path="/components/Form">
          <Form order={order} setOrder={setOrder} />
        </Route>
        <Route path ="/components./Pizza">
          <Pizza order={order} />
        </Route>
        </div>

      </Router>
  )
}

export default App;
