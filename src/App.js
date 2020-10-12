import React from "react";
import {Route, Link} from "react-router-dom";
import Pizza from"./components/pizza"

const App = () => {
  return (
    <div>
      <h1>Lambda Eats</h1>
      <Link to="/">Home</Link>
      <Route exact path="/pizza" component={Pizza}>Home</Route>
      <Link to="/pizza">Pizza</Link>
    </div>
  );
};
export default App;
