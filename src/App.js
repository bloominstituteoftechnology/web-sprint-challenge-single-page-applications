import React, { useState, useEffect } from "react";
import { Route, Switch } from 'react-router-dom'
import Home from "./components"
import Pizza from "./components/Pizza"
import Confirm from "./components/Confirm";
import axios from "axios";
import * as yup from "yup"

const formSchema = yup.object().shape({
  size: yup
    .string()
    .oneOf(["small","medium","large"],"Please select a size!"),
  sauce: yup
    .string()
    .required("Please select a sauce!"),
  pepperoni: yup
    .string(),
  sausage: yup
    .string(),
  mushroom: yup
    .string(),
  chicken: yup
    .string(),
  ham: yup
    .string(),
  extraCheese: yup
    .string(),
  sub: yup 
    .string(),
  special: yup
    .string()
    .notRequired(),
  gluten: yup
    .string()
    .notRequired()
})

//initial forms
const initialFormValues = {
  size: "",
  sauce: "",
  pepperoni: false,
  sausage: false,
  chicken: false,
  mushroom: false,
  ham: false,
  extraCheese: false,
  special: "",
  gluten: false

}

const initialFormErrors = {
  size: "",
  sauce: ""
}

const initialOrders = []

const initialDisabled = true;

const App = () => {
  const [formValues,setFormValues] = useState(initialFormValues);
  const [disabled, setDisabled] = useState(initialDisabled);
  const [formErrors, setFormErrors] = useState(initialFormErrors)
  const [orders, setOrders] = useState(initialOrders)

  function reset(){ //resets form on page change
    setFormValues(initialFormValues)
  }

  function clearOrders() { //clear button on confirm page
    setOrders(initialOrders)
}

  const validate = (name,value) => { //checks that data entered is correct
    yup.reach(formSchema,name)
      .validate(value)
      .then(() => setFormErrors({...formErrors, [name]: ""}))
      .catch(err => setFormErrors({...formErrors, [name]: err.errors[0]}))
  }

  useEffect(() => { //toggled disabled button
    formSchema.isValid(formValues)
      .then(valid => setDisabled(!valid))
  }, [formValues])


  const updateForm = (inputName,inputValue) => { //udates values when entered
    validate(inputName,inputValue);
    setFormValues({...formValues,[inputName]:inputValue})
  }

  const postNewOrder = newOrder => { //posts orders to confirm page
    axios.post('https://reqres.in/api/orders', newOrder)
      .then(({data}) => {
        setOrders([data,...orders])
        console.log(data)
      })
      .catch(err => console.error(err))
      .finally(setFormValues(initialFormValues))
  }

  const submitOrder = () => { //creates order data

    const newOrder = {
      size: formValues.size,
      sauce: formValues.sauce,
      pepperoni: formValues.pepperoni,
      sausage: formValues.sausage,
      chicken: formValues.chicken,
      mushroom: formValues.mushroom,
      ham: formValues.ham,
      extraCheese: formValues.extraCheese,
      special: formValues.special,
      gluten: formValues.gluten
    }
    setFormValues(initialFormValues)
    postNewOrder(newOrder)
    
  }


  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/pizza">
        <Pizza 
          values={formValues}
          disabled={disabled}
          submit={submitOrder} 
          change={updateForm} 
          errors={formErrors}
          reset={reset}/>
      </Route>
      <Route path="/confirm">
        <Confirm orders={orders} clear={clearOrders}/>
      </Route>
    </Switch>
   
  );
};
export default App;
