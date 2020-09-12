import React from "react";
import "./App.css";
import { Link, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import Pizza from "./components/Pizza";

const App = () => {
  return (
    <div className="App">
      <div className="header">
        <h2>Lambda Eats</h2>
        <div className="nav-buttons">
          <button>
            <Link exact to="/">
              Home
            </Link>
          </button>
          <button>Help</button>
        </div>
      </div>

      <Switch>
        <Route exact path="/">
          <Home />
        </Route>

        <Route path="/pizza">
          <Pizza />
        </Route>
      </Switch>
    </div>
  );
};
export default App;
