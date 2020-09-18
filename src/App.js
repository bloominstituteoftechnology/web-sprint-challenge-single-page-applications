import React, { useState } from "react";
import { Route } from "react-router-dom";
import Nav from "./Components/Nav";
import OrderForm from "./Components/OrderForm";
import Cart from "./Components/Cart";
import Home from "./Components/Home";

const App = () => {
  const [order, setOrder] = useState([]);
  console.log("App -> order", order)  

  return (
    <>
    <Nav />
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/order">
        <OrderForm order={order} setOrder={setOrder} />
      </Route>
      <Route exact path="/cart">
        <Cart order={order} />
      </Route>
    </>
  );
}; 
export default App;


