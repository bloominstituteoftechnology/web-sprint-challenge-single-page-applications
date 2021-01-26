import React from "react";
import FormInput from "./Form";
import { BrowserRouter, Route, Link } from 'react-router-dom'
import styled from 'styled-components'

const StyledH1 = styled.h1`
  font-size: 65px;
  text-align: center;
  font-family: 'Permanent Marker', cursive;
  color: red;
`

const Tagline = styled.h4`
  font-size: 20px;
  text-align: center;
  background-color: none;
  font-style: italic;

`

function Home() {
  return (
  <div className='home-style'>
  <StyledH1>Lambda Eats</StyledH1>
  <Tagline>"Your favorite food delivered while coding!"</Tagline>
  <img src='https://images.pexels.com/photos/4392030/pexels-photo-4392030.jpeg?cs=srgb&dl=pexels-norma-mortenson-4392030.jpg&fm=jpg'/>
  </div>
  )
}

const App = () => {
  return (
    
    <div className='App'>
      <BrowserRouter>
    <div className='links'>
      <Link to='/'>Home</Link>
      <Link to='/pizza'>Order Now</Link>
      <Link to='/about'>About</Link>
  </div>
    <div className='paths'>
      
      <Route exact path='/' component={Home} />
      <Route path='/pizza' component={FormInput}/>
  </div>
      </BrowserRouter>
  </div>
      

      
      
    
  );
};
export default App;
