import React from "react";
import Pizza from './components/Pizza.js'
import { Navbar, NavbarBrand } from 'reactstrap'
import {Link, Route, Switch} from 'react-router-dom'

const App = () => {
  return (
    <div>
      <header>
          <div>site name</div>
        <Navbar color="light">
          <NavbarBrand>Lambda eats</NavbarBrand>
          <div>
            <Link to="/">Home</Link>
            <Link to="/pizza">Pizza Maker</Link>
          </div>
        </Navbar>
      </header>
      <div>
      <Switch>
        <Route path="/pizza" component={Pizza} />
        <Route exact path="/" />
      </Switch>
        </div>
    </div>
  );
};
export default App;
