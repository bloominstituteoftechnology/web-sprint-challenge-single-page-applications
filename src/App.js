import React from "react";
import Form from "./Form"
import { Route, Link, Switch, NavLink } from "react-router-dom";

const App = () => {
  return (
     <div className="header">
     
        <div className="routeBtns">  
        <h1 className="lambdaEats">Lambda Eats</h1>
        <button className="btn1">Home</button>
        <button className="btn2">Help</button>
        </div>
       
        <header><h1 className="favoriteFood">Your favorite food, delivered while coding!</h1>

        <Link to="/pizza"> <button className="homeBtn">Want Pizza? Click Here!</button></Link>
        
        </header>

        <Route exact path="/pizza">
        <Form />
        
        </Route>
        
        
     </div>

     

    
     
  );
};
export default App;
