import React from "react";
import {Route, Switch} from "react-router-dom";
import Pizza from"./components/pizza"
import Home from"./components/home"

const App = () => {
  return (
    <div>
      <h1>Lambda Eats</h1>
    <Switch>
      <Route to="/" render={()=><Home/>}>Home</Route>
      <Route path="/pizza" render={()=><Pizza/>}>Pizza</Route>
      {/* <Link to="/pizza">Pizza</Link> */}
      </Switch>
    </div>
  );
};
export default App;
