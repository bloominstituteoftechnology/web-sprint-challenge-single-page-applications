
import React, { useState } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import "./App.css";
import Form from "./components/Form";
const App = () => {
  return (
  <div>
    
     <nav className="sitenav">
       <h1>Lambda Eats</h1>
       <a href="#" className="atags">OrderNow</a>  
       <a href="#" className="atags">Other</a>
     </nav>
     <div className="imgcontainer">
        <img src="https://source.unsplash.com/F6-U5fGAOik" className="img1"></img>
        <div class="text-block"> 
         <h1>The Best pizza in California</h1>
         <p>You name it! We make it!</p>
         <a href="#" class="myButton">create here</a> 
        </div>
     </div>
    
  </div>
   
  );
};
export default App;