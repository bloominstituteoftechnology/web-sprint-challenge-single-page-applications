import React, { useState, useEffect } from "react";
import { Route, Link, Switch, Router } from 'react-router-dom';
import PizzaForm from './PizzaForm'
import './App.css'
import Home from './Home'

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

const initialPizzaOrder = {
  size: '',
  sauces: '',
  specialInstructions: '',
}

const initialFormErrors = {
  size: '',
  sauces: '',
  specialInstructions: '',
}

const initalPizzaOrder = []
const initialDisabled = true

const fakeAxiosGet = () => {
  return Promise.resolve({ status: 200, success: true, data: initialPizzaOrder})
}

const fakeAxiosPost = (url, {size, sauces, pepperoni, italianSausage, canadianBacon, chicken,
hamburger, spicyItalianSausage, pineapple, blackOlives, jalepenoPeppers, onions, greenPeppers,
mushrooms, specialInstructions}) => {
  const newPizzaOrder = {size, sauces, pepperoni, italianSausage, canadianBacon, chicken,
    hamburger, spicyItalianSausage, pineapple, blackOlives, jalepenoPeppers, onions, greenPeppers,
    mushrooms, specialInstructions}
    return Promise.resolve({ status: 200, success: true, data: newPizzaOrder})
}

const App = () => {

  const [pizzaOrder, setPizzaOrder] = useState(initalPizzaOrder)
  const [formValues, setFormValues] = useState(initialFormValues)
  const [formErrors, setFormErrors] = useState(initialFormErrors)
  const [disabled, setdisabled] = useState(initialDisabled)

  const updateFrom = (name, value) => {
    setFormValues({...formValues,[name]: value,})
  }

  const submitForm = () => {
    let newPizzaOrder = {
      size: formValues.size,
      sauces: formValues.sauces,
      pepperoni: formValues.pepperoni,
      italianSausage: formValues.italianSausage,
      canadianBacon: formValues.canadianBacon,
      chicken: formValues.chicken,
      hamburger: formValues.hamburger,
      spicyItalianSausage: formValues.spicyItalianSausage,
      pineapple: formValues.pineapple,
      blackOlives: formValues.blackOlives,
      jalepenoPeppers: formValues.jalepenoPeppers,
      onions: formValues.onions,
      greenPeppers: formValues.greenPeppers,
      mushrooms: formValues.mushrooms,
      specialInstructions: formValues.specialInstructions.trim(),
    }
    if(!newPizzaOrder.size || !newPizzaOrder.sauces || !newPizzaOrder.pepperoni ||
      !newPizzaOrder.italianSausage || !newPizzaOrder.canadianBacon || !newPizzaOrder.chicken
      || !newPizzaOrder.hamburger || !newPizzaOrder.spicyItalianSausage || !newPizzaOrder.pineapple||
      !newPizzaOrder.blackOlives || !newPizzaOrder.jalepenoPeppers || !newPizzaOrder.onions
      || !newPizzaOrder.greenPeppers || !newPizzaOrder.mushrooms || !newPizzaOrder.specialInstructions)
      return;

      fakeAxiosPost('fakeapi.com', newPizzaOrder)
      .then((res) => {
        setPizzaOrder([...pizzaOrder, res.data])
      })
      .catch((err) => {
        console.log(err)
      })

      setFormValues(initialFormValues)
  }

  useEffect(() => {
    fakeAxiosGet('fakeapi.com').then((res) => setPizzaOrder(res.data));
  }, [])

  return (
    <>
       <div className = 'home-page'>
          <header>
              <h1>Lambda Eats</h1>
                <nav>
                  <Router>
                    <Link to='/'>Home</Link>
                    <Link to='/pizza-form'>Order Pizza</Link>
                  </Router>
                </nav>
          </header>

          <Switch>
            <Route path='/pizza-form/:id'>
              <PizzaForm/>
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
