import React from "react";
import "./App.css";
import { Link, Route, Switch } from 'react-router-dom';
import Home from "./components/Home.js";
import About from "./components/About.js";
import Pizza from "./components/Pizza.js";
import HeaderOne from "./components/header"
import 'bootstrap/dist/css/bootstrap.min.css';




const App = () => {
  return (
    <>
      
      <header>
        <HeaderOne />
      </header>
      
      <Switch>
        <Route path="/about" component={About} />
        <Route path="/pizza" component={Pizza} />
        <Route path="/" component={Home} />
      </Switch>
     </>
  );
};
export default App;