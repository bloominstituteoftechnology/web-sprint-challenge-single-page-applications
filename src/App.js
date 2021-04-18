import React, { useState, useEffect } from "react";
import Home from './PizzaHome.js'
import PizzaForm from './PizzaForm.js'
import Nav from './PizzaNav.js'
import './App.css'
import { Route, Switch } from 'react-router-dom'
import * as yup from 'yup'
import PizzaSchema from './PizzaSchema.js'
import axios from 'axios'

const initialFormValues = {
  name: '',
  size: '',
  pepperoni: false,
  olives: false,
  jalapenos: false,
  mushrooms: false,
  instructions: ''
}
const initialFormErrors = {
  name: 'Please provide a name',
  size: 'Please choose a size',
}

export default function App() {

  const [formValues, setFormValues] = useState(initialFormValues)
  const [formErrors, setFormErrors] = useState(initialFormErrors)
  const [disabled, setDisabled] = useState(true)

  const createPizza = pizza => {
    axios
      .post('https://reqres.in/api/pizza', pizza)
      .then(response => {
        console.log(response.data)
      })
      .catch(error => {
        console.log(error);
      })
    setFormValues(initialFormValues)
  }

  const inputChange = (name, value) => {
    yup.reach(PizzaSchema, name)
      .validate(value)
      .then(() => {
        setFormErrors({ ...formErrors, [name]: '' })
      })
      .catch(err => {
        setFormErrors({ ...formErrors, [name]: err.errors[0] })
      })
    setFormValues({
      ...formValues,
      [name]: value
    })
  }

  const formSubmit = () => {
    const pizza = {
      name: formValues.name.trim(),
      size: formValues.size.trim(),
      toppings: ['pepperoni', 'olives', 'onions', 'peppers'].filter(topping => formValues[topping])
    }
    createPizza(pizza)
  }
  useEffect(() => {
    PizzaSchema.isValid(formValues).then(valid => setDisabled(!valid))
  }, [formValues])

  return (
    <>
      <Switch>
        <Route path="/pizza">
          <Nav />
          <PizzaForm
            values={formValues}
            change={inputChange}
            submit={formSubmit}
            errors={formErrors}
            disabled={disabled} />
        </Route>
        <Route path="/">
          <Nav />
          <Home />
        </Route>
      </Switch>

    </>
  )

};

