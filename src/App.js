import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import axios from "axios";
import * as yup from "yup";

import styled from "styled-components";

import "./App.css";
import Home from "./components/Home.js";
import OrderForm from "./components/OrderForm.js";
import formSchema from "./validation/formSchema.js";


const HeaderBar = styled.header`
  height: 5rem;
  display: flex;
  justify-content: space-between;
  align-content: center;
  padding: 2rem;
  border-bottom: 2px solid black;

  h1 {
    font-size: 1.5rem;
    font-family: "Andale Mono", monospace;
  }

  .link {
    margin: .2rem;
    padding: 1rem;
    background: white;
    font-family: sans-serif;
    background-color: black;
    color: white;
    text-decoration: none;
  }
`;


const App = () => {

  // all values in the form are set to empty strings or to false (for checkboxes)
  const initialFormValues = {
    name: "",
    size: "",
    sauce: "",
    garlic: false,
    green_pepper: false,
    olives: false,
    onions: false,
    pineapple: false,
    special: "",
  }

  // all errors are set to empty strings to start with
  const initialErrors = {
    name: "",
    size: "",
    sauce: "",
    special: "",
  }

  const initialDisabled = true;

  // STATE
    // the values of what is currently in the form of OrderForm.js
  const [formValues, setFormValues] = useState(initialFormValues);
    // the errors occuring from validating the formValues, which are strings from formSchema.js
  const [errors, setErrors] =  useState(initialErrors);
    // a total list of all the pizzas added to order
  const [orders, setOrders] = useState([]);
    // disabled status of the submit button
  const [disabled, setDisabled] = useState(initialDisabled);

  // what happens when the "Submit" button is clicked
  const handleSubmit = () => {
    const newOrder = {
      name: formValues.name.trim(),
      size: formValues.size,
      toppings: ["garlic", "green_pepper", "olives", "onions", "pineapple"].filter(topping => !!formValues[topping]),
      special: formValues.special.trim(),
    };
    postNewOrder(newOrder);
  }

  // This adds a new order to the orders array, and ideally it will also post to an external API.
  const postNewOrder = newOrder => {
    axios.post('https://reqres.in/api/orders', newOrder)
      .then(res => {
          console.log("res.data: ", res.data);
          setOrders([res.data, ...orders])
          setFormValues(initialFormValues)
      })
      .catch(err => console.error(err))
  }

  //  useEffect(() => {
  //   getOrders();
  // }, [])

  // this updates the formValues with each change to the form, and also updates the errors if a formValue does not fit the requirements.
  const handleChange = (name, value) => {
    validate(name, value);
    setFormValues({...formValues, [name]: value})
  }

  const validate = (name, value) => {
    yup.reach(formSchema, name)
       .validate(value)
       .then(() => setErrors({...errors, [name]: ""}))
       .catch((err) => {
        console.log(err.errors[0])
        setErrors({...errors, [name]: err.errors[0]})
       })
  }

  // sets the disabled status of the Submit button on the form
  useEffect(() => {
    formSchema.isValid(formValues)
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
      <HeaderBar>
            <h1>Bloomtech Eats</h1>
            <nav>
              <Link to="/" className="link">Home</Link>
              <Link to="/pizza" className="link" id="order-pizza">Order</Link>
            </nav>
      </HeaderBar>

      <Route exact path="/">
          <Home />
      </Route>
      <Route path="/pizza">
          <OrderForm  
            values={formValues} 
            submit={handleSubmit} 
            change={handleChange} 
            id="pizza-form" 
            disabled={disabled}
            errors={errors}
          />
      </Route>
    </>
  );
};
export default App;