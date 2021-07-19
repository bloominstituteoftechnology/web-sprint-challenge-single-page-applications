import React from "react";
import Header from './components/Header.js'
import { Navbar, NavbarBrand } from 'reactstrap'
import {Link, Route, Switch} from 'react-router-dom'

const App = () => {
  return (
    <div>
      <header>
          <div>site name</div>
        <Navbar color="light">
          <NavbarBrand>Lambda eats</NavbarBrand>
          
        </Navbar>

      </header>
        <Header />
    </div>
  );
};
export default App;
