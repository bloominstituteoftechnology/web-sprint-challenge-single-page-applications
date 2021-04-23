import React from "react";
import Form from './Form';
import Home from './Home'
import { BrowserRouter as Router , Link, Switch,NavLink } from 'react-router-dom';


const App = () => {
  return (
    <>
    <header>
      <nav>
        <h1>Ricky's Pizzeria</h1>
        <div className ="navLinks">
          <Router>
            <Link to='/'>Home</Link>
            <Link to ='/order'>Order</Link> 

          </Router>

          
        </div>
      </nav>

    </header>
    <Home/>
      {/* <Form/> */}
    </>
  );
};
export default App;
