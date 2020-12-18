import React, { useState, useEffect } from "react";
import { Route, Link, Switch } from "react-router-dom"
import HomePage from "./HomePage";
import Form from "./Form"
import Pizza from "./Pizza"

const App = () => {
  return (
    <div className ="App">
      <nav>
      <h1 className="store-header"> Lambda Eats</h1>
      <div className="nav-links">
      <p>Pizza Shop</p>
      <Link to="/">Home</Link>
      
      </div>
      </nav>
    </div>
//   <Switch>
//   <Route path={"/items-list/:itemId"}>
//     <Item items={stock} />
//   </Route>
//   <Route path="/items-list">
//     <ItemsList items={stock} />
//   </Route>
//   <Route path="/">
//     <Home />
//   </Route>
// </Switch>
  
  
  );

};
export default App;
