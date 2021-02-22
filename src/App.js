import React, { useState } from "react";
import { Route, Link, Switch } from 'react-router-dom';
import * as Yup from 'yup';
import fromSchema from "./validations/fromSchema"
import Home from "./layout/Home";
import NewPizza from "./layout/NewPizza";
import NoMatch from "./layout/NoMatch";

const App = () => {

  const initialFormValues = {
    name: '',
    size: '',
    pepperoni: false,
    hawaiian: false,
    bbq: false,
    margherita: false,
    note: '',
  }

  const initialOrder = [{
    name: 'Veggy Yummy Green',
    size: 'Medium',
    pepperoni: false,
    hawaiian: false,
    bbq: false,
    margherita: true,
    note: 'No meat, please add more veggies, thanks!',
  }]

  const errorMessages = {
    name: '',
    size: ''
  } 
  
  const [orders, setOrders] = useState(initialOrder)
  const [formValues, setFormValues] = useState(initialFormValues)
  const [formErrors, setFormErrors] = useState(errorMessages)

  
  const inputChange = (name, value) => {
    //Validate
    Yup.reach(fromSchema, name)
      .validate(value)
        .then(() => {
          setFormErrors({...formErrors, [name]: ''})
        })
        .catch((err) => {
          setFormErrors({...formErrors, [name]: err.errors[0]})
        })

    //Set into slice of state
    setFormValues({...formValues, [name]: value})
  }

  const submitOrder = () => {
    if(formValues !== initialFormValues) {
      setOrders([...orders, formValues])
      setFormValues(initialFormValues)
      return formValues
    } else {
      alert('Why so empty?')
    }
  }


  return (
    <Switch>
      <Route path="/pizza">
        <NewPizza
          change={inputChange}
          values={formValues}
          submit={submitOrder}
        />
      </Route>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="*">
        <NoMatch />
      </Route>
    </Switch>
  );
};
export default App;
