import React from "react";
import Pizza from './components/Pizza.js'
import { Navbar, NavbarBrand, Jumbotron, Container } from 'reactstrap'
import {Link, Route, Switch} from 'react-router-dom'

const App = () => {
  return (
    <div className="container">
      <header>
          <div>React Sprint 2021</div>
        <Navbar color="light">
          <NavbarBrand>Lambda eats</NavbarBrand>
          <div>
            <Link to="/">Home</Link>{'  '}
            <Link to="/pizza">Pizza Maker</Link>
          </div>
        </Navbar>
      </header>
      <div className="container">
        <Jumbotron fluid>
          <Container fluid>
            <h1 className="display-4">Welcome</h1>
            <p className="lead">We pride ourselves in serving the best Pizza</p>
            <Link to="/pizza">Order Now!</Link>
          </Container>
        </Jumbotron>
      </div>
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
