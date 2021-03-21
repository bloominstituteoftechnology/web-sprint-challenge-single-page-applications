import React from "react";
import Nav from './Components/Nav.js';
import Menu from './Components/Menu.js';
import Home from './Components/Home.js';
import PizzaBuilder from './Components/PizzaBuilder.js'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

const App = () => {
  return (
    <React.Fragment>
      <Router>
        <h1 className='text-center mt-4 display-1'>Lambda Eats</h1>
        <p className='text-center mt-4 display-4'>Welcome to Lambda Eats! Click below to start your order.</p>
        <Nav />
        <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/pizza' component={PizzaBuilder}/>
        <Route path='/menu' component={Menu} />
        </Switch>
      </Router>
    </React.Fragment>
  );
};
export default App;
