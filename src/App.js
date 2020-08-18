import React from "react";
import Pizza from './components/Pizza';
import Home from './components/Home';
import './App.css';
import { BrowserRouter as Router,  Link, Route, Switch  } from 'react-router-dom';
import styled from 'styled-components';

function App() {

  const StyledLink = styled(Link)`
  width:100px;
  padding: 10px;
  text-decoration: none;
  display: flex;
  flex-direction: row;
  float: right;
`;
  return (
    <section className="App">
      <Router>
        <nav>
          <StyledLink to="/">Home</StyledLink>
          <StyledLink to="/pizza">Order</StyledLink>
        </nav>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/pizza" component={Pizza} />
        </Switch>
      </Router> 
    </section>
  )
}

export default App;
