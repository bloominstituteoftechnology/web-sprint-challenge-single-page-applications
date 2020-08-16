import React from "react";
import { Link, Route, Switch } from 'react-router-dom';
import Home from "./components/Home.js";
import About from "./components/About.js";
import Pizza from "./components/Pizza.js";
const App = () => {
  return (
    <>
      <h1>Lambdadino's Pizzaria</h1>
      <header>
        <p>Home To The Famouse American Style of Turtle Neck Pizza!</p>
        <nav>
          <Link to = "/">Home</Link>
          <Link to = "/about-us">About Us</Link>
          </nav>
      </header>
      <Switch>
      <Route path="/about-us" component={About} />
      <Route path="/pizza" component={Pizza} />
      <Route path="/" component={Home} />
      </Switch>
     </>
  );
};
export default App;
