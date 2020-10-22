import React, { useState, useEffect } from "react";
import { Route, Link, Switch, Router } from 'react-router-dom';
import PizzaForm from './PizzaForm'
import './App.css'
import Home from './Home'
import Pizza from './Pizza'
import schema from "./validation/PizzaFormSchema";
import * as yup from "yup";

const initialFormValues = {
  size: '',
  sauces: '',
  pepperoni: false,
  italianSausage: false,
  canadianBacon: false,
  chicken: false,
  hamburger: false,
  spicyItalianSausage: false,
  pineapple: false,
  blackOlives: false,
  jalepenoPeppers: false,
  onions: false,
  greenPeppers: false,
  mushrooms: false,
}

const initialFormErrors = {
  size: '',
  sauces: '',
  specialInstructions: '',
}

const initalPizzaOrder = []
const initialDisabled = true

const App = () => {

  const [pizzaOrder, setPizzaOrder] = useState(initalPizzaOrder)
  const [formValues, setFormValues] = useState(initialFormValues)
  const [formErrors, setFormErrors] = useState(initialFormErrors)
  const [disabled, setdisabled] = useState(initialDisabled)

  const validate = (name, value) => {
    yup.reach(schema, name)
    .validate(value)
    .then(valid => {
      setFormErrors({...formErrors,[name]: ''})
    })
    .catch(err => {
      setFormErrors({...formErrors,[name]: err.errors[0]})
    })
  }

  const updateFrom = (name, value) => {
    validate(name, value)
    setFormValues({...formValues,[name]: value,})
  }

  const submitForm = () => {
    const newPizzaOrder = {
      size: formValues.size,
      sauces: formValues.sauces,
      toppings: ['pepperoni', 'italianSausage', 'canadianBacon', 'chicken',
      'hamburger', 'spicyItalianSausage', 'pineapple', 'blackOlives',
      'jalapenoPeppers', 'onions', 'greenPeppers', 'mushrooms'].filter(
        (topping) => formValues[topping]),
      specialInstructions: formValues.specialInstructions.trim(),
    }

    const fakeAxiosPost = (url, {size, sauces, pepperoni, italianSausage, canadianBacon, chicken,
    hamburger, spicyItalianSausage, pineapple, blackOlives, jalepenoPeppers, onions, greenPeppers, mushrooms, specialInstructions}) => {
      const newPizzaOrder = {size, sauces, pepperoni, italianSausage, canadianBacon, chicken, hamburger, spicyItalianSausage, pineapple, blackOlives, jalepenoPeppers, onions, greenPeppers, mushrooms, specialInstructions}
        return Promise.resolve({ status: 200, success: true, data: newPizzaOrder})
      }

      fakeAxiosPost('fakeapi.com', newPizzaOrder)
      .then((res) => {
        setPizzaOrder([...pizzaOrder, res.data])
      })
      .catch((err) => {
        console.log(err)
      })

      setFormValues(initialFormValues)
  }
  const fakeAxiosGet = () => {
  return Promise.resolve({ status: 200, success: true, data: initialFormValues})
}
  useEffect(() => {
    fakeAxiosGet('fakeapi.com').then((res) => setPizzaOrder(res.data));
  }, [])

  useEffect(() => {
    schema.isValid(formValues).then(valid => {
      setdisabled(!valid)
    })
  }, [formValues])

  return (
    <>
       <div className = 'home-page'>
          <header>
              <h1>Lambda Eats</h1>
                <nav>
                    <Link className="home" to='/home'>Home</Link>
                    <Link className="pizza" to='/pizza-form'>Order Pizza</Link>
                </nav>
          </header>

          <Switch>
            <Route path='/pizza-form'>
              <PizzaForm
              valuse={formValues}
              change={updateFrom}
              submit={submitForm}
              disabled={disabled}
              errors={formErrors}/>

            {
              pizzaOrder.map(pizza => {
                return (
                  <Pizza details={pizza} />
                )
              })
            }
            </Route>

            <Route exact path='/'>
              <Home/>
            </Route>
          </Switch>
    </div>
    </>
  );
};
export default App;
