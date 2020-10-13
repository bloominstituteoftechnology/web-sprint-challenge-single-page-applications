import React from "react";
import {Route, Switch, Link} from "react-router-dom";
import Pizza from"./components/pizza"
import Home from"./components/home"

const App = () => {
  return (
    <div>
      <h1>Lambda Eats</h1>
      <nav>
      <Link to="/">Home</Link>
      <Link to="/pizza">Order Here!</Link>
      </nav>
    <Switch>
      <Route exact path="/" render={()=><Home/>}/>
      <Route path="/pizza" render={()=><Pizza/>}/>
      </Switch>
    </div>
  );
};
export default App;
