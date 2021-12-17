import React from "react";
import axios from 'axios';
import { Route, Switch } from 'react-router-dom';
import Homepage from './components/Homepage.js';
import PizzaForm from './components/PizzaForm.js';
import { useState, useEffect } from "react";
import schema from './formSchema.js';
import * as yup from 'yup';

const initialFormValues = {name: '', size: '', sauce: '', specialInstructions: '', pepperoni: false, sausage: false, canadianbacon: false, spicysausage: false};
const initialFormErrors = { name: '', size: '', sauce: ''};

const App = () => {
  
  const[formValues, setFormValues] = useState(initialFormValues);
  const[formErrors, setFormErrors] = useState(initialFormErrors);

  const validate = (name, value) => {
    yup.reach(schema, name)
      .validate(value)
      .then(() => {
        setFormErrors({ ...formErrors, [name]: ''})
      })
      .catch(error => setFormErrors({ ...formErrors, [name]: error.errors[0]}))
  }
  
  const inputChange = (name, value) => {
    // console.log(name, value);
    validate(name, value)
    setFormValues({ ...formValues, [name]: value})
  }

  const formSubmit = (event) => {
    const newOrder = {
      name: formValues.name.trim(),
      size: formValues.size.trim(),
      sauce: formValues.sauce.trim(),
      pepperoni: formValues.pepperoni,
      sausage: formValues.sausage,
      canadianbacon: formValues.canadianbacon,
      spicysausage: formValues.spicysausage
    }
    console.log('newOrder-------');
    console.log(newOrder);
  }

  
  return (
    <div>   
      <Switch>
        <Route path="/pizza">
          <PizzaForm formErrors={formErrors} id='pizza-form' formValues={formValues} setFormValues={setFormValues} inputChange={inputChange} formSubmit={formSubmit}/>
        </Route>
        <Route path="/">
          <Homepage />
        </Route>
      </Switch>
    </div>
  );
};
export default App;