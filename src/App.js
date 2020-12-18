import React, { useState, useEffect } from "react";
import { Route, Link, Switch } from "react-router-dom";
import Home from "./Home";
import PizzaForm from "./PizzaForm";
import * as yup from 'yup';
import axios from "axios"
import Order from "./Order";
import schema from "./OrderSchema"


const initialFormValues = {
  name: '',
  email: '',
  size: '',
  pepperoni: false,
  bacon: false,
  mushrooms: false,
  extraCheese: false,
  instructions: '',
}

const initialFormErrors = {
  name: '',
  email: '',
}

const initialCustomer = [];
const initialDisabled = true;







const App = () => {


  const [ customer, setCustomer ] = useState(initialCustomer)
  const [ formValues, setFormValues ] = useState(initialFormValues)
  const [ formErrors, setFormErrors ] = useState(initialFormErrors)
  const [ disabled, setDisabled ] = useState(initialDisabled)

  const postNewOrder = newCustomer => {
    axios
      .post('https://reqres.in/api/users', newCustomer)
      .then((res)=>{
        setCustomer([res.data, ...customer])
        setFormValues([initialFormValues])
      })
      .catch((err)=>{
        console.log(err);
      })
  }
  const formSubmit = () => {
    const newCustomer = {
      name: formValues.name.trim(),
      email: formValues.email.trim(),
      toppings: ['pepperoni', 'bacon','mushrooms', 'extraCheese'].filter((pizza)=> formValues[pizza]),
      instructions: formValues.instructions.trim()

    }
    postNewOrder(newCustomer)
  }
  
  const inputChange = (name,value) => {
    yup.reach(schema, name)
      .validate(value)
      .then(()=>{
        setFormErrors({
          ...formErrors,
          [name]: "",
        })
      })
      .catch((err)=>{
        setFormErrors({
          ...formErrors,
          [name]: err.errors[0],
        })
      })
      setFormValues({
        ...formValues,
        [name]: value
      })
  }
  useEffect(()=>{
    schema.isValid(formValues).then((valid)=>{
      setDisabled(!valid)
    })
  },[formValues])



  return (
    
    <div className="App">
      <PizzaForm 
     values={formValues}
     change={inputChange}
     submit={formSubmit}
     disabled={disabled}
     errors={formErrors}
      />

      <h1>Lambda Eats</h1>
      <nav>
        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/PizzaForm">Order</Link>
        </div>
      </nav>
      <Switch>
        <Route path="/PizzaForm">
          <PizzaForm />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
      
      {
       customer.map(person => {
         return (
           <Order key={person.id} details={person} />
         )
       })
     }
    </div>
  );
}
export default App;
