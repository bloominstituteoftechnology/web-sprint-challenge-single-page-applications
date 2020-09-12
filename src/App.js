import React from "react";
import { Route, Link, Switch } from "react-router-dom";
import Form from "./components/Form";
import HomePage from "./components/HomePage";
import image from "./components/Pizza.jpg";
//import Header from "./components/header";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <header>
            <h1 className="Lambda-pageName">Lambda Eats</h1>
            <div className="nav-links">
                <Link className="links" to="/">Home</Link>
                <Link className="links" to="/pizza">Oder Pizza Here</Link>
            </div>
      </header>
      <Switch>
        <Route path="/pizza">
          <Form />
        </Route>
        <Route path="/">
          <HomePage />
        </Route>
      </Switch>
        
        
    </div>
  );
};
export default App;
