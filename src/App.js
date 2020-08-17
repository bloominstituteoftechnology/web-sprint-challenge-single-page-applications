import React, { useState } from "react";
import { Route } from "react-router-dom";

import NavBar from "./components/NavBar";
import Home from "./components/Home";
import PizzaForm from "./components/PizzaForm";

const App = () => {
  const [pizzaOrders, setPizzaOrders] = useState([]);

  return (
    <>
      {console.log(pizzaOrders)}
      <h1>Lambda Eats</h1>
      <NavBar />

      <Route exact path="/">
        <Home orders={pizzaOrders} />
      </Route>

      <Route path="/pizza">
        <PizzaForm />
      </Route>
    </>
  );
};
export default App;
