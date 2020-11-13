import React from "react";
import Form from './Form'
import { Router, Route, Link } from "react-router-dom";
import HomePage from './home'
import './App.css';
import styled from "styled-components"


const Row = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    align-items: center;
    color: black;
    padding: 10px 0px;
`



const App = () => {
  return (
<div>
<nav className="navbar">
<Link to="/">
  <button name = 'homebutton'>Home</button>
  </Link>
<br/>
<Link to="/form"> 
<button name = 'orderbutton'>Place Your Order</button>
</Link>
</nav>

<Route exact path="/" component={HomePage} />
<Route path="/Form" component={Form} />

</div>
  );
};
export default App;
