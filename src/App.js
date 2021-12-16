import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Form from "./Components/Form";
import Home from "./Components/Homepage";




const App = () => {
  return (
    <div className="header">
      <h1>Hey, click that form link above and start building the pizza of your dreams!!</h1>
      <nav>
      <Link to="/"><button id="home-button">Home</button></Link>
      <Link to="/pizza"><button id="order-pizza">Order Pizza!</button></Link>
      </nav>
      <Switch>
      <Route path="/pizza" component={Form} />
        <Route path="/" component={Home} />
      </Switch>
    </div>
  );
};
export default App;

