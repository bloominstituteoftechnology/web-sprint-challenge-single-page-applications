import React, { useState, useEffect } from "react";
import { Route, Switch } from 'react-router-dom'
import Home from './components/Home'
import Pizza from './components/Pizza'
import Confirmation from './components/Confirmation';
import axios from "axios";
import * as yup from "yup"

const formSchema = yup.object().shape({
  customer: yup
    .string()
    .required("name must be entered")
    .min(2, "name must be at least 2 characters"),
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


const initialFormValues = {
  customer: "",
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
  sauce: "",
  customer: ""
}
const initialOrders = []
const initialDisabled = true;


const App = () => {
 const [orders, setOrders] = useState(initialOrders)
 const [formValues, setFormValues] = useState(initialFormValues)
 const [formErrors, setFormErrors] = useState(initialFormErrors)
 const [disabled, setDisabled] = useState(initialDisabled)

 function reset(){ 
  setFormValues(initialFormValues)
}

function clearOrders() { 
  setOrders(initialOrders)
}

 const validate = (name, value) => {
   yup.reach(formSchema, name)
     .validate(value)
     .then(() => setFormErrors({...formErrors, [name]: ""}))
     .catch(err => setFormErrors({...formErrors, [name]: err.errors[0]}))
 }
 useEffect(() => {
  formSchema.isValid(formValues).then(valid => {
    setDisabled(!valid)
  })
}, [formValues])

const updateForm = (inputName, inputValue) => {
  validate(inputName, inputValue);
  setFormValues({...formValues, [inputName]:inputValue})
}

 const postNewOrder = newOrder => {
   axios.post('https://reqres.in/api/orders', newOrder)
   .then(({data}) => {
     setOrders([data,...orders])
     console.log(data)
   })
   .catch(err => console.error(err))
   .finally(() => (setFormValues(initialFormValues)))
 }
 const submitOrder = () => {
   const newOrder = {
    customer: formValues.customer,
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
        <Route path= "/pizza">
          <Pizza
            values={formValues}
            change={updateForm}
            submit={submitOrder}
            disabled={disabled}
            errors={formErrors}
            reset={reset}/>
        </Route>
        <Route path="/confirmation">
          <Confirmation orders={orders} clear={clearOrders}/>
        </Route>
       </Switch>
 );
};
export default App;