import React from "react";
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Form from './Components/Form';
import Pizza from './Components/Pizza';
import Home from './Components/Home';
import styled from "styled-components";
import './App.css';

const AppHeaderDiv = styled.div `
background-color: #282c34;
display: flex;
flex-direction: horizontal;
align-items: center;
justify-content: center;
font-size: 2rem;
color: white;
`

const AppBodyDiv = styled.div `
background-color: #282c34;
font-size: 2rem;
color: white;
height:100%;
width:100%;
`

const App = () => {
  return (
      <>
        <AppHeaderDiv>
          <h1>LAMBDA EATS</h1>
        </AppHeaderDiv>
        <AppBodyDiv>
            <Router>
            <Link to='/order-pizza'>Home</Link>
            <Link to='/pizza-form'>Form</Link>
            <Link to='/Pizza'>Pizza</Link>
            <Route path='/order-pizza' component={Home}/>
            <Route path='/pizza-form' component={Form}/>
            <Route path='/Pizza' component={Pizza}/>
            </Router>
        </AppBodyDiv>
      </>
  );
};
export default App;
