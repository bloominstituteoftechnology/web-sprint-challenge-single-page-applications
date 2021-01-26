import React from "react";
import {Switch, Route } from "react-router-dom";
import Nav from "./navigation"
import Home from "./home"
import Shop from "./shop"

const App = () => {
  return (
    <>
      <div className="App">
        <Nav />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/shop" component={Shop} />
        </Switch>
      </div>
    </>
  );
};
export default App;
