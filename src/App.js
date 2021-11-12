import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Form from "./Components/Form";
import Home from "./Components/Homepage";


const App = () => {
  return (
    <Router>
      <div>
        <Link to="/">Home</Link>
      </div>
      <div>
        <Link id="order-pizza" to="/pizza">
          Form
        </Link>
      </div>
      <hr />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/pizza">
          <Form />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;