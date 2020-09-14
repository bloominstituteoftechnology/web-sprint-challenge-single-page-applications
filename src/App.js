import React, { useState } from "react";
import "./App.css";
import { Link, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import Pizza from "./components/Pizza";
import data from "./data";

const App = () => {
  const [foodData] = useState(data);

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
          <Home foodData={foodData} />
        </Route>

        <Route path="/pizza">
          <Pizza />
        </Route>
      </Switch>
    </div>
  );
};
export default App;
