import React, {useState, useEffect} from "react";
import {Route, Link, Switch} from 'react-router-dom';
import Form from './components/Form';
import Home from './components/Home';
import * as yup from 'yup'
import formSchema from './formSchema.js'
import axios from 'axios'

const initialErrors = {
  name: 'Your Name is required.',
  size: 'The size of the pizza is required.',
}

const initialValues = {
  name: '',
  size: '',
  pepperoni: '',
  chicken: '',
  pineapple: '',
  peppers: '',
  sausage:'',
  instructions: ''
}


const App = () => {
  const [errors, setErrors] = useState(initialErrors)
  const [values, setValues] = useState (initialValues)
  const [disabled, setDisabled] = useState (true)

  

  const postOrder = pizza => {
    axios.post('https://reqres.in/api/pizza', pizza)
      .then(res => {
        console.log(res.data)
      })
      .catch(err => {
        console.log(err);
      })
      setValues(initialValues)
  }

  const formSubmit = () => {
    const pizza = {
      name: values.name.trim(),
      size: values.size.trim(),
      toppings: ['pepperoni', 'chicken', 'pineapple', 'peppers', 'sausage'].filter(topping => values[topping])
    }
    postOrder(pizza)
  }
  const inputChange = (name, value) => {
    yup.reach(formSchema, name)
      .validate(value)
      .then(() => {setErrors({...errors, [name]: ''})})
      .catch(err => {setErrors({...errors, [name]: err.errors[0]})})
    setValues({
      ...values,
      [name]: value
    })
  }

  useEffect(() => {
    formSchema.isValid(values).then(valid => setDisabled(!valid))
  }, [values])
  
  return (
    <div>
      <header>
      <h1>Lambda Eats</h1>
        <h2>PIZZA?</h2>
        <nav>
          <Link to = '/' > Home </Link>
          <Link to = '/pizza'> Pizza </Link>
        </nav>
        </header>
        <Switch>
          <Route path ='/pizza'>
            <Form submit= {formSubmit} value = {values} errors = {errors} disabled = {disabled} change = {inputChange} />
          </Route>
          <Route path = '/'>
            <Home />
          </Route>
        </Switch>
    </div>
  );
};
export default App;
