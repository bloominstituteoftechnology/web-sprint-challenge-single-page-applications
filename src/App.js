import React, { useState, useEffect } from "react";
import { Route, Link, Switch } from "react-router-dom";
import "./App.css" //if there's time for styling
import Home from "./components/Home";
import Pizza from "./components/Pizza";
import axios from "axios";
import * as yup from "yup";
import schema from "./components/FormSchema";

const initialFormValues = {
  name: "",
  size: "",
  pepperoni: false, 
  chicken: false, 
  sausage: false,
  pineapple: false,
  instructions: "",
}

const initialFormErrors = {
  name: "",
  size: "",
}

const initialPizza = []; 
const initialDisabled = true;

const App = () => {
  //slices of state
  const [pizza, setPizza] = useState(initialPizza);
  const [formValues, setFormValues] = useState(initialFormValues);
  const [formErrors, setFormErrors] = useState(initialFormErrors);
  const [disabled, setDisabled] = useState(initialDisabled);
  
  //validation
  const validate = (name, value) => {
    yup
      .reach(schema, name)
      .validate(value)
      .then(() => {
        setFormErrors({
          ...formErrors, 
          [name]: "",
        })
      })
      .catch(error => {
        setFormErrors({
          ...formErrors, 
          [name]: error.errors,
        });
      });
  };

  //change handlers
  const onChange = (name,  value) => {
    validate(name, value);
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  //submit function
  const onSubmit = () => {
    const newPizza = {
      name: formValues.name.trim(),
      size: formValues.size,
      toppings: ["pepperoni", "chicken", "sausage", "pineapple"].filter(
        toppings => {
          return formValues[toppings];
        }
      ),
      instructions: formValues.instructions.trim()
    };
  }

  //side effects
  useEffect(() => {
    schema.isValid(formValues).then(valid => {
      setDisabled(!valid);
    });
  }, [formValues]);



  return (
      <div className="home">
        <h1>Lambda Eats!</h1>
          <p>Food for thought!</p>
        
        <div className="navlinks">
          <Link exact to="/">Home</Link>
          <Link to="/pizza">Order Here!</Link>
        </div>

        <div className="routing">
          <Switch>
            <Route path="/pizza">
              <Pizza 
              values={formValues}
              submit={onSubmit}
              change={onChange}
              errors={formErrors}
              disabled={disabled}
              />
            </Route>

            <Route exact path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </div>
  );
};
export default App;
