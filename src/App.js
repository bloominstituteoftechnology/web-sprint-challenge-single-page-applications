import React, {useState} from "react";
import Form from "./components/Form"
import Pizza from './components/Pizza'
import Nav from './components/Nav'
import {BrowserRouter as Router} from 'react-router-dom'
import {Route} from 'react-router-dom'
import './App.css';

const App = () => {
  const [order, setOrder] = useState([]);

  return (
    <Router>
      <Nav />
      <div>
        <Route exact path = '/'>
          <h1>Lambda Eats</h1>
        </Route>
        <Route path = './components/Form'>
          <Form order = {order} setOrder = {setOrder}/>
        </Route>
        <Route path = './components/Pizza'>
          <Pizza order = {order} />
        </Route>
      </div>
    </Router>
  );
};
export default App;
