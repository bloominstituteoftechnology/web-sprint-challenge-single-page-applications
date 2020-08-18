import React, { useState } from "react";
import Form from "./Form"
import Nav from "./Nav"
import Pizza from "./Pizza"
import {Route} from "react-router-dom";
import {BrowserRouter as Router} from "react-router-dom";
//import './Apps.css';

const App = () => {

  const [order, setOrder] = useState ([]);

  return (
  
      <Router>
        <Nav/>
        <div>
          <Route exact path = '/'>
          <h1>Lambda Eats</h1>
          </Route>
          <Route path = './Form'>
            <Form order = {order} setOrder = {setOrder}/>
          </Route>
          <Route path = './Pizaa'>
            <Pizza order = {order}/>
          </Route>
        </div>
      </Router>

  );
};
export default App;
