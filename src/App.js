import React from "react";
import "./App.css"
import LoginForm from "./Components/LoginForm";
import {  Link, Route, Switch } from 'react-router-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import SignupForm from "./Components/SignupForm";
export default function App() {  

  return (
    <Router>
    <div className="App">
      <nav>
        <h1 className="store-header">Med Cabinet</h1>
        <div className="nav-links">
 
          <Link to ="/signup">Sign Up</Link>
          <Link to ="/login">Login</Link>
        </div>
      </nav>
      
      <Switch>
          <Route path="/login" component={LoginForm}/>
          <Route path ="/signup" component={SignupForm}/>
      

        </Switch>

    </div>
    </Router>
  );
}
