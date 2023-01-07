import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import axios from "axios";

import styled from "styled-components";

import "./App.css";
import Home from "./components/Home.js";
import OrderForm from "./components/OrderForm.js";
import formSchema from "./validation/formSchema.js";


const App = () => {

  // all values in the form are set to empty strings or to false (for checkboxes)
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

  // all errors are set to empty strings to start with
  const initialErrors = {
    name: "",
    size: "",
    toppings: "",
    special: "",
  }

  // STATE
    // the values of what is currently in the form of OrderForm.js
  const [formValues, setFormValues] = useState(initialFormValues);
    // the errors occuring from validating the formValues, which are strings from formSchema.js
  const [errors, setErrors] =  useState(initialErrors);
    // a total list of all the pizzas added to order
  const [orders, setOrders] = useState([]);
    // disabled status of the submit button
  const [disabled, setDisabled] = useState(false);

  // what happens when the "Submit" button is clicked
  const handleSubmit = event => {
    postNewOrder(formValues);
  }


  // TODO - This adds a new order to the orders array, and ideally it will also post to an external API.
  const postNewOrder = newOrder => {
    axios.post('https://reqres.in/api/orders', formValues)
      .then((res) => {
        setOrders([res.data, ...orders]);
      })
      .catch(err => console.error(err));
      setFormValues(initialFormValues);

  }

  // this updates the formValues with each change to the form, and also updates the errors if a formValue does not fit the requirements.
  const handleChange = (name, value) => {
    // validate here
    // console.log(`name: ${name}; value: ${value}`)
    setFormValues({...formValues, [name]: value})
  }

  // sets the disabled status of the Submit button on the form
  useEffect(() => {
    formSchema.isValid()
      .then(valid => {
        setDisabled(!valid);
      })
  }, [formValues])

    // testing arry that prints a list of all the orders to the console
  // useEffect(() => {
  //   console.log(orders);
  // }, [orders])


  // JSX return
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
