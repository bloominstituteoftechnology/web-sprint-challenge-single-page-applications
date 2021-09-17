
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import HomePage from "./HomePage"
import PizzaForm from "./PizzaForm.js";
import Confirmatin from './Confirmatin'

import axios from "axios"
import React, { useEffect, useState } from "react"

import { reach } from 'yup'
import schema from './Validation'

const initialFormValues = {
  name: "",
  size: "",
  special: "",
  bacon: false,
  peperoni: false,
  sausage: false,
  meatball: false,


}
const initialErrors = {
  name: "",
  size: "",
  special: "",

}
const initialPizza = []
const initialDisabled = true;

const App = () => {

  const [pizza, setPizza] = useState(initialPizza)
  const [formValues, setFormValues] = useState(initialFormValues)
  const [errors, setErrors] = useState(initialErrors)
  const [disabled, setDisabled] = useState(initialDisabled)

  const postNewPizza = newPizza => {
    axios.post(`https://reqres.in/api/orders`, newPizza)
      .then(res => {
        setPizza([res.data, ...pizza])
      })
      .catch(err => {
        console.log(err)
      })
      .finally(() => {
        setFormValues(initialFormValues)
      })
  }

  const validate = (name, value) => {
    reach(schema, name)
      .validate(value)
      .then(() => setErrors({ ...errors, [name]: "" }))
      .catch(err => setErrors({ ...errors, [name]: err.errors[0] }))
  }
  const handleChange = (name, value) => {
    validate(name, value)
    setFormValues({
      ...formValues,
      [name]: value,
    })
  }


  useEffect(() => {
    schema.isValid(formValues).then(valid =>
      setDisabled(!valid)
    )
  }, [formValues])



  const formSubmit = () => {
    const newPizza = {
      name: formValues.name.trim(),
      size: formValues.size.trim(),
      special: formValues.special.trim(),
      toppings: ['bacon', "peperoni", "sausage", "meatball"].filter(piz => formValues[piz])
    }
    postNewPizza(newPizza)
  }



  return (
    <div className="app-container">

      <Router>

        <a className="space"><Link to="/">HOME</Link></a>
        <a className="space"><Link to="/pizza">Pizza</Link></a>
        <a className="space"><Link to="/confirmation">confirmation</Link></a>

        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route exact path="/pizza">
            <PizzaForm
              values={formValues}
              change={handleChange}
              submit={formSubmit}
              disabled={disabled}
              errors={errors} />
          </Route>
          <Route exact path="/confirmation">
            {pizza.map(confirmation => {
              return (
                <Confirmatin key={confirmation.id} details={confirmation} />
              )
            })

            }

          </Route>
        </Switch>
      </Router>


    </div>
  );
};
export default App;

