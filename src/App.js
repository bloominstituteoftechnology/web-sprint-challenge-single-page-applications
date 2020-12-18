import React, { useState, useEffect } from "react"
import { Switch, Route, useHistory } from 'react-router-dom'
import Home from './Home'
import Form from './Form'
import OrderPage from './OrderPage'
import * as yup from 'yup'
import Schema from './Schema'

const defaultValues = {
  name: '',
  size: '',
  pepperoni: false,
  sausage: false,
  mushrooms: false,
  onions: false,
  instructions: ''
}

const defaultErrors = {
  name: '',
  size: '',
  pepperoni: '',
  sausage: '',
  mushrooms: '',
  onions: '',
  instructions: ''
}

const App = () => {
  const history = useHistory()
  const [formValues, setFormValues] = useState(defaultValues)
  const [savedInfo, setSavedInfo] = useState([])
  const [errors, setErrors] = useState(defaultErrors)
  const change = (event) => {
    const { name, value } = event.target
    validate(name, value)
    setFormValues({ ...formValues, [name]: event.target.value === 'checkbox' ? event.target.checked : event.target.value })
  }

  const checked = (event) => {
    const { name, value } = event.target
    setFormValues({ ...formValues, [value]: event.target.value === 'checkbox' ? true : false })
  }

  const submit = (event) => {
      const newData = {
        name: formValues.name.trim(),
        size: formValues.size,
        pepperoni: formValues.pepperoni,
        sausage: formValues.sausage,
        mushrooms: formValues.mushrooms,
        onions: formValues.onions,
        instructions: formValues.instructions
      }
      setSavedInfo([...savedInfo, newData])

      history.push('/order-confirmation')
  }
  
  const validate = (name, value) => {
    yup
      .reach(Schema, name)
      .validate(value)
      .then((valid) => {
        setErrors({ ...errors, [name]: '' })
      })
      .catch((err) => {
        setErrors({ ...errors, [name]: err.errors[0] })
      })
  }

  return (
    <div>
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>

        <Route path='/pizza'>
          <Form formValues={formValues} checked={checked} change={change} submit={submit} />
        </Route>

        <Route path='/order-confirmation'>
          <OrderPage formValues={formValues} />
        </Route>
      </Switch>
    </div>
  );
};
export default App;
