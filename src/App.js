import React from "react";
import "./App.css";
import { Link, Route, Switch } from 'react-router-dom';
import Home from "./components/Home.js";
import About from "./components/About.js";
import Pizza from "./components/Pizza.js";
import styled from 'styled-components';
import { Container, Row, Col } from 'reactstrap';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText
} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const StyledLink = styled(Link)`
    text-decoration: none;

    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
    }
`;

const App = () => {
  return (
    <>
      <Container fluid = "sm">
      <header>
      <h1 className = "colorRed">Lambdadino's Pizzaria</h1>
      <Navbar bg="dark" variant="dark">
    <Nav className="mr-auto">
          <StyledLink to = "/"style={{ textDecoration: 'none' }} ><p>Home</p></StyledLink>
          <StyledLink to = "/about-us" style={{ textDecoration: 'none' }}><p>About Us</p></StyledLink>
    </Nav>
  </Navbar>
      </header>
      </Container>
      <Switch>
      <Route path="/about-us" component={About} />
      <Route path="/pizza" component={Pizza} />
      <Route path="/" component={Home} />
      </Switch>
     </>
  );
};
export default App;
