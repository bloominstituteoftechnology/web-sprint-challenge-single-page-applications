import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import { Route, Switch } from 'react-router-dom';
import * as yup from 'yup';
// components
import OrderForm from './components/OrderForm'
import Confirmation from './components/Confirmation'
import formSchema from './validation/formSchema'

// state values
const initOrderList = [];

const initOrderForm = {
  name: '',
  size: '',

  pepperoni: false,
  onion: false,
  greenPepper: false,
  tomatoes: false,

  glutenFree: false,

  instructions: ''
}

const initOrderFormErrors = {}

const App = () => {

  // state
  const [orderList, setOrderList] = useState(initOrderList)
  const [orderForm, setOrderForm] = useState(initOrderForm)
  const [formErrors, setFormErrors] = useState(initOrderFormErrors)
  const [buttonDisabled, setButtonDisabled] = useState()

  const inputChange = (name, value) => {
    yup
      .reach(formSchema, name)
      .validate(value)
      .then(valid => {
        setFormErrors({ ...formErrors, [name]: '' })
      })
      .catch (error => {
        setFormErrors({ ...formErrors, [name]: error.errors[0] })
      })
      setOrderForm({
        ...orderForm, [name]: value
      })
  }

  const formSubmit = () => {
    const newOrder = {
      name: orderForm.name,
      size: orderForm.size,
      pepperoni: orderForm.pepperoni,
      onion: orderForm.onion,
      greenPepper: orderForm.greenPepper,
      tomatoes: orderForm.tomatoes,
      glutenFree: orderForm.glutenFree,
      instructions: orderForm.instructions 
    }
    postNewOrder(newOrder);
  }

  const postNewOrder = newOrder => {
    Axios.post('https://reqres.in/api/users', newOrder)
    .then(response => {
      setOrderList(orderList.concat(response.data))
    })
    .catch (error => {
      console.log(error)
    })
    .finally(() => setOrderForm(initOrderForm)) // clear list after order sent
  }

  // only enable order button if form is valid
  useEffect(() => {
    formSchema.isValid(orderForm)
      .then(valid => {
        setButtonDisabled(!valid);
      })
  }, [orderForm])


  return (
    <div>
      <Switch>
        <Route path='/pizza'>
          <OrderForm 
            values = {orderForm}
            change = {inputChange}
            submit = {formSubmit}
            buttonDisabled = {buttonDisabled}
            errors = {formErrors}
          />
        </Route>
      </Switch>
      <Confirmation values={orderList} />
    </div>
  );
};
export default App;
