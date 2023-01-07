import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import axios from "axios";

import styled from "styled-components";

import "../App.css";
import Home from "./Home.js";
import OrderForm from "./OrderForm.js";
import formSchema from "../validation/formSchema.js";


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
  const [errors, setErrors] =  useState(initialErrors);
  const [orders, setOrders] = useState([]);
  const [disabled, setDisabled] = useState(false);

  const handleSubmit = event => {
    axios.post('https://reqres.in/api/orders', formValues)
      .then((res) => {
        setOrders([res.data, ...orders]);
      })
      .catch(err => console.error(err));
      setFormValues(initialFormValues);
  }

  useEffect(() => {
    axios.get("https://reqres.in/api/orders")
      .then(res => {
        console.log("Get results, ", res)
      })
      .catch(err => console.error(err));
    })


  const handleChange = (name, value) => {
    // validate here
    // console.log(`name: ${name}; value: ${value}`)
    setFormValues({...formValues, [name]: value})
  }

  // useEffect(() => {
  //   console.log(orders);
  // }, [orders])

  useEffect(() => {
    formSchema.isValid()
      .then(valid => {
        setDisabled(!valid);
      })
  }, [formValues])


  return (
    <>
      <h1>Lambda Eats</h1>
      <nav>
        <Link to="/">Home</Link>
        <br></br>
        <Link to="/pizza" id="order-pizza">Order</Link>
      </nav>

      <Route exact path="/">
          <Home />
      </Route>
      <Route path="/pizza">
          <OrderForm  values={formValues} submit={handleSubmit} change={handleChange} id="pizza-form" disabled={disabled}/>
      </Route>
    </>
  );
};
export default App;
