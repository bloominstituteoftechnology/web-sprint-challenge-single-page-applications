import React, { useState } from "react";
import { Route, Link, Switch } from 'react-router-dom';
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
  const [validErrors, setValidErrors] = useState(errorMessages)

  
  const inputChange = (name, value) => {
    setFormValues({...formValues, [name]: value})
  }

  const submitOrder = () => {
    setOrders([...orders, formValues])
    setFormValues(initialFormValues)
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
