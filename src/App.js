import React, {useState, useEffect} from "react";
import {Switch, Route} from 'react-router-dom'
import './App.css'
import axios from 'axios'
import * as yup from 'yup'

import confirmGoodOrder from './components/confirmGoodOrder'

//Pages
import Header from './components/Header'
import Home from './components/Home'
import Order from './components/Order'
import CheckOut from './components/CheckOut'

// Data for form fill-out
// Data Creation
const blankPizza = {
  pizza_size:"",
  pizza_sauce:"",
  
  //Toppings
  pepperoni: false,
  sausage: false,
  canadian_bacon: false,
  spicy_italian_sausage: false,
  grilled_chicken: false,
  onions: false,
  green_pepper: false,
  diced_tomatoes: false,
  black_olives: false,
  roasted_garlic: false,
  artichoke_hearts: false,
  three_cheese: false,
  pineapple: false,
  extra_cheese: false,

  gluten_free_crust: false,

  special_instruction: "",

  number_of_pizzas: "",
}

const pizzaErrors = {
  name_of_pizza: "",
  pizza_size: "",
  pizza_sauce: "",
  number_of_pizzas: "",
}
const initialOrder = []
const initialDisabled = true

const App = () => {

  // Slices of State
  const [order, setOrder] = useState(initialOrder)
  const [form, setForm] = useState(blankPizza)
  const [errors, setErrors] = useState(pizzaErrors)
  const [disabled, setDisabled] = useState(initialDisabled)

  // Helpers
  const postNewOrder = newOrder => {
      axios.post("notarealsite.com", newOrder)
      .then(res => {
          setOrder([...order, res.data])
          console.log(order)
      })
      .catch(err => {
          console.log(`NO PIZZA FOR YOU ${err}`)
      })
      setForm(blankPizza)
  }

  // Event Handlers
  const change = (name, value) => {
      yup.reach(confirmGoodOrder, name)
        .validate(value)
        .then(() => {
          setErrors({...errors, [name]: ""})
        })
        .catch(err => {
          setErrors({...errors, [name]: err.errors})
        })
        setForm({
          ...form,
          [name]: value
        })
        console.log(form)
    }

  const submitOrder = data => {
      const newPizza = {
          name_of_pizza: data.name_of_pizza,
          pizza_size: data.pizza_size,
          pizza_sauce: data.pizza_sauce,
          
          //Toppings
          toppings: ["pepperoni", "sausage", "canadian_bacon", "spicy_italian_sausage", "grilled_chicken", "onions", "green_pepper", "diced_tomatoes", "black_olives", "roasted_garlic", "artichoke_hearts", "three_cheese", "pineapple", "extra_cheese"].filter(topping => data[topping]),
          
          gluten_free_crust: data.gluten_free_crust,

          special_instruction: data.special_instruction.trim(),

          number_of_pizzas: data.number_of_pizzas,
          }
      postNewOrder(newPizza)
      
  }

   //Side Effects

   useEffect(() => {
    confirmGoodOrder.isValid(form)
    .then(valid => {
        setDisabled(!valid)
    })
}, [form])

console.log(`WHERE'S MY ORDER`, order)

  return (
    <div>
      <Header/>
      
      <Switch>

        <Route exact path='/'>
          <Home/>
        </Route>

        <Route path='/pizza-planet'>
          <Order
            form={form}
            change={change}
            submit={submitOrder}
            disabled={disabled}
            errors={errors}
          />
        </Route>

        <Route path='/review-order'>
          <CheckOut
            form={form}
          />
        </Route>

      </Switch>
    </div>
  );
};
export default App;
