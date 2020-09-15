import React from "react";
import Home from "./Home"
import Pizza from "./Pizza"
import { Route, Link } from "react-router-dom"

const App = () => {
  return (
    <>
      <h1>Lambda Eats</h1>
      <Link to="/">Home</Link>
      <Link to="/Pizza">Order Now</Link>





      <Route exact path="/">
        <Home />
      </Route>

      <Route path="/Pizza">
        <Pizza />
      </Route>
      
    </>
  );
};
export default App;
