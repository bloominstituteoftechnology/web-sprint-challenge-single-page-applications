import React, { useState, useEffect } from "react";
import { Route, Link, Switch } from 'react-router-dom'; 
import Home from './components/Home';
import Pizza from './components/Pizza';
import './App.css';
import axios from 'axios';
import * as yup from "yup";
import schema from "./validation/formSchema";

const initialFormValues = {
  name: '',
  size: '',
  pepperoni: false,
  spin: false,
  feta: false,
  mushrooms: false,
  instructions: '',
}
const initialFormErrors = {
  name: '',
  size: '',
  instructions: '',
}
const initialOrders = [];
const initialDisabled = true;

const App = () => {
  const [orders, setOrders] = useState(initialOrders);
  const [formValues, setFormValues] = useState(initialFormValues);
  const [formErrors, setFormErrors] = useState(initialFormErrors);
  const [disabled, setDisabled] = useState(initialDisabled);


  const postNewOrders = (newOrder) => {
    axios
      .post("https://reqres.in/", newOrder)
      .then((res) => {
        setOrders([res.data, ...orders]);
        setFormValues(initialFormValues);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const inputChange = (name, value) => {
    yup
      .reach(schema, name)
      .validate(value) 
      .then(() => {
        setFormErrors({
          ...formErrors,
          [name]: "",
        });
      })
      .catch((err) => {
        setFormErrors({
          ...formErrors,
          [name]: err.errors[0],
        });
      });

    setFormValues({
      ...formValues,
      [name]: value, 
    });
  };

  const formSubmit = () => {
    const newOrders = {
      name: formValues.name.trim(),
      size: formValues.size.trim(),
      toppings: ["pepperoni", "spinach", "feta", "mushrooms"].filter(
        (topping) => formValues[topping]
      ),
      instructions: formValues.instructions.trim(),
    };
    
    postNewOrders(newOrders);
  };

  useEffect(() => {
    schema.isValid(formValues).then((valid) => {
      setDisabled(!valid);
    });
  }, [formValues]);

  return (
    <>
      <header>
        <h1>Lambda Eats</h1>
        <nav className="navigation">
          <Link className="nav" to="/">Home</Link>
          <Link className="nav" to="/pizza">Pizza</Link>
        </nav>
      </header>
      <Switch>

        <Route path="/pizza">
          <Pizza
          values={formValues}
          change={inputChange}
          submit={formSubmit}
          disabled={disabled}
          errors={formErrors}
          orders={orders}
          />
        </Route>

        <Route path="/"> 
          <Home />
        </Route>

      </Switch>
    </>
  );
};

export default App;
