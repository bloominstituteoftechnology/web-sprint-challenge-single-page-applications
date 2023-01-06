import React, { useState } from "react";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";

import styled from "styled-components";

import "../App.css";
import Home from "./Home.js";
import OrderForm from "./OrderForm.js";


const App = () => {

  const initialFormValues = {
    name: "",
    size: "",
    sauce: "",
    onions: false,
    green_pepper: false,
    olives: false,
    garlic: false,
    pineapple: false,
    special: "",
  }

  const initialErrors = {
    name: "",
    size: "",
    toppings: "",
    special: "",
  }

  // STATE
  const [formValues, setFormValues] = useState(initialFormValues);


  return (
    <>
      <h1>Lambda Eats</h1>
      <nav>
        <Link to="/">Home</Link>
        <br></br>
        <Link to="/pizza" id="order-pizza">Order</Link>
      </nav>

      <Route exact path="/" component={Home}/>
      <Route path="/pizza" component={OrderForm} />
    </>
  );
};
export default App;
