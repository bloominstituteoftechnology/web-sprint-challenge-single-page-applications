import React, {useState} from "react";

import { Route } from 'react-router-dom'
import "./index.css";
import Home from './Compnents/Home'
import Pizza from './Compnents/Pizza'
import axios from 'axios'

const App = () => {

  const updatePizza = (p) =>  {
   
    
    axios.post(`https://reqres.in/api/users`, p )
      .then(res => {

        console.log(res.data);


      })
  }

  return (
    <>
      <nav>
        <h1 id ='logo'>Lambda Eats</h1>
        <div id ='navButts'>
          <button id ='homeButt'>Home</button>
          <button id ='helpButt'>Help</button>
          
        </div>
      </nav>
      <Route exact path="/" component={Home}/>
      <Route path="/pizza" render={(props) => (<Pizza updatePizza={updatePizza}  />)}/>
    </>
  );
};
export default App;
