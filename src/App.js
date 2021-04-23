import axios from 'axios';
import React, { useState, useEffect } from "react";
import { Route, Switch } from 'react-router-dom';
import "./App.css"
import * as yup from 'yup';

/// "components" ///
import HomePage from './home';
import PizzaForm from './pizzaform';
import Nav from './nav';
import formSchema from './formSchema';




//----INITIAL FORM VALUES-----///
//----INITIAL FORM VALUES-----///
//----INITIAL FORM VALUES-----///

const initialFormValues = {
  name:'',
  size:'',
  pepperoni: 'false',
  jalapeno:'false',
  ham:'false',
  pineapple:'false',
  instructions:'',
};

const initialFormErrors = {
  name: "Name required to place order.",
  size: "Please a pizza size for order."
};

const App = () => {
// Set states //
  const [formValues, setFormValues] = useState(initialFormValues);
  const [formErrors, setFormErrors] = useState(initialFormErrors);
  const [disabled, setDisabled] = useState(true);
  
  // axios
  //.post (url, payload)
  const postPizza = orders => {
    axios.post('https://reqres.in/api/orders', orders)
      .then(res => {
        console.log(res.data)
      })
      .catch(err => {
        console.log(err);
      })
      setFormValues(initialFormValues)
  };

  const inputChange = (name, value) => {
    yup.reach(formSchema, name)
      .validate(value)
      .then(() => {setFormErrors({...formErrors, [name]: ''})})
      .catch(err => {setFormErrors({...formErrors, [name]: err.errors[0]})})
    setFormValues({
      ...formValues,
      [name]: value
    })
  }
  const formSubmit = () => {
    const pizza = {
      name: formValues.name.trim(),
      size: formValues.size.trim(),
      toppings: ['pepperoni', 'jalapeno', 'ham', 'pineapple'].filter(topping => formValues[topping])
    }
    postPizza(pizza)
  }
  useEffect(() => {
    formSchema.isValid(formValues).then(valid => setDisabled(!valid))
  }, [formValues])

  return (
    // use switch from most specific to least 
    <>
    {/* <h1>Hello World</h1> */}
     <Switch>
      <Route path="/pizza">
        <Nav />
        <PizzaForm 
        values={formValues} 
        change={inputChange} 
        submit={formSubmit} 
        errors={formErrors} 
        disabled = {disabled}/>
      </Route>
      <Route id='order-pizza' path="/">
        <Nav />
        <HomePage />
      </Route>
    </Switch>
    </>
  );
};


export default App;
