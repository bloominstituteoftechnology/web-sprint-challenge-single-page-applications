import React from "react";
import { Switch, Link, Route } from 'react-router-dom'
import { BrowserRouter as Router } from 'react-router-dom'

const App = () => {
  return (
    <Router>
      <h1>Lambda Eats</h1>
      <div className='navLinks'>
        <div className='home'>
        <Link to='/'>Home</Link>
        </div>
        <div className='help'>
        <Link to='/help'>Help</Link>
        </div>
        </div>
        <div className='imgPizza'>
    <img src= ../public/Wireframes/pizza.jpg>
  </div>
    </Router>
  );
};
export default App;
