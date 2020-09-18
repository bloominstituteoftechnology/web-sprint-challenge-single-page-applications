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



/*

  
  

/*
  // const tempOrder = [{
  //   customer: "Tiffany",
  //   toppingsChecked: [{ name: 'Grilled Chicken', id: 'grilled-chicken', isChecked: false },
  //   { name: 'Onions', id: 'onions', isChecked: false },
  //   { name: 'Green Pepper', id: 'green-pepper', isChecked: false }],
  //   size: "Medium",
  // }]
  */