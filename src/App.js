import React, {useState, useEffect}  from "react";
import {Route, Link, Switch } from 'react-router-dom';
import Form from './form';
import axios from 'axios'
import * as yup from 'yup'
import schema from './validation/formSchema'
import Order from './order'


const initialOrder = {};
const initialDisabled = true;

const initialFormErrors = {
  name: '',
  size: '',
}
const initialFormValues = {
  ///// TEXT INPUTS /////
  name: '',
    ///// DROPDOWN /////
  size: '',
  ///// CHECKBOXES /////
  pepporoni: false,
  peppers: false,
  sausage: false,
  pineapple: false,
  instructions: ''
}



const App = () => {
  const [formValues, setFormValues] = useState(initialFormValues)
  const [formErrors, setFormErrors] = useState(initialFormErrors)
  const [order, setOrder] = useState(initialOrder)
  const [disabled, setDisabled] = useState(initialDisabled) 


  const validate = (name, value) => {
    // let's validate this specific key/value
    // yup.reach will allow us to "reach" into the schema and test only one part.
    // We give reach the schema as the first argument, and the key we want to test as the second.
    yup
      .reach(schema, name)
      // we can then run validate using the value
      .validate(value)
      // if the validation is successful, we can clear the error message
      .then(valid => { // eslint-disable-line
        setFormErrors({
          ...formErrors,
          [name]: ""
        })
      })
      /* if the validation is unsuccessful, we can set the error message to the message 
        returned from yup (that we created in our schema) */
      .catch(err => {
        setFormErrors({
          ...formErrors,
          [name]: err.errors[0]
        });
      });
  }
  
const inputChange = (name, value) => {
  validate(name, value)
  setFormValues({
    ...formValues,
    [name]: value
  })
}

const formSubmit = () => {
  const newOrder = {
    name: formValues.name.trim(),
    size: formValues.size.trim(),
    toppings: ['pepporoni', 'peppers', 'sausage', 'pineapple'].filter(hob => formValues[hob]),
    instructions: formValues.instructions.trim(),
  }
  postNewOrder(newOrder)
}

const postNewOrder = newuser => {
  axios.post('https://reqres.in/api/users', newuser)
    .then(res=>{
      setOrder(res.data)
      setFormValues(initialFormValues)
      console.log(order)
    })
    .catch(err => {
      debugger
    })
    .finally(()=>{

    })
}

useEffect(() => {
  schema.isValid(formValues)
    .then(valid => {
      setDisabled(!valid)
    })
}, [formValues])

  return (
    <>
      <h1>Lambda Eats</h1>
      <div className= 'app'>
      <Switch>
        <Route exact path='/'>
        <Link to = {'form'} id='pizza'>
          <p>Pizza?</p>
          </Link>
        </Route>

        <Route path='/form'>
        <Form
        values={formValues}
        change={inputChange}
        submit={formSubmit}
        disabled={disabled}
        errors={formErrors}></Form>

        <Order details ={order}/>
        </Route>
        </Switch>
        </div>
      <p></p>
    </>
  )
};
export default App;
