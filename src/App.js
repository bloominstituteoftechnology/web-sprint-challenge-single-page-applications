import React from "react";
import { Link, Route, Switch } from "react-router-dom";
import Home from "./Home";
import Form from "./Form";

const App = () => {

  return (
    <div className="header">
      <h1>Lambda Eats</h1>
      <p>Order your very own lovely pizza here!</p>
      <nav>
        <Link to="/"><button>Home</button></Link>
        <Link to="/order">
       <button className="order-pizza">Order</button>
        </Link>
      </nav>
  <Switch>
      <Route path="/order" component={Form} />
      <Route path="/" component={Home} />
  </Switch>
    </div>
  );
};
export default App;