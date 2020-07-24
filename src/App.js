import React, {useState, useEffect} from "react";
import {Link, Route, Switch} from 'react-router-dom';
import axios from 'axios';
import * as yup from 'yup'
import Header from './Components/Header';
import Form from './Components/Form';
import Home from './Components/Home'
import Completed from './Components/Completed'

const initialFormValues = {
  ///// DROPDOWN /////
  size: '',
  ///// RADIO BUTTONS /////
  sauce: '',
  ///// CHECKBOXES /////
  toppings: {
    pepperoni: false,
    sausage: false,
    canadian: false,
    italian: false,
    onions: false,
    peppers: false,
    tomatos: false,
    olives: false,
    garlic: false,
    artichoke: false,
    threecheese: false,
    pineapple: false,
    xcheese: false
  },
  ///// Special /////
  special: '',
}

const initialFormErrors = {
  size: '',
  sauce: '',
  toppings: '',
}
const initialPizza = []
const initialDisabled = true

export default function App(){
  const [pizza, setPizza] = useState(initialPizza)
  const [formValues, setFormValues] = useState(initialFormValues) 
  const [formErrors, setFormErrors] = useState(initialFormErrors) 
  const [disabled, setDisabled] = useState(initialDisabled)    

  const formSchema = yup.object().shape({
    special: yup.string().min(4, 'Must be at least 4 characters long').required('Name is required'),

    // checkbox: yup.boolean().oneOf([true], 'Please check checkbox')
    // sport: yup.string(),
    // wing: yup.string(),
    // four: yup.string()
})

  
  const inputChange = (name, value, type) => {

    // yup
    //   .reach(formSchema, name)

    //   .validate(value)
    //   // if the validation is successful, we can clear the error message
    //   .then(valid => {
    //     setFormErrors({
    //       ...formErrors,
    //       [name]: "",
    //     })
    //   })
    //   /* if the validation is unsuccessful, we can set the error message to the message 
    //     returned from yup (that we created in our schema) */
    //   .catch(err => {
    //     setFormErrors({
    //       ...formErrors,
    //       [name]: err.errors[0],
    //     })
    //   })
    if(type === 'radio'){
      // setFormValues({...formValues, [original && ranch && bbq && alfredo]: false})
      console.log(name, value)
      setFormValues({
        ...formValues,
        [name]: value 
      })
    }else
    setFormValues({
      ...formValues,
      [name]: value 
    })
  }

  const checkboxChange = (name, isChecked) => {
    setFormValues({
      ...formValues,
      toppings: {
        ...formValues.toppings,
        [name]: isChecked,
      }
    })
  }



  return (
    <div className='app'>
      <Header />
      {/* <Link to='/order'>Test</Link> */}
      <Switch>
      
        <Route path='/order'>
          <Form 
            values={formValues}
            inputChange={inputChange}
            checkboxChange={checkboxChange}
            // submit={submit}
            disabled={disabled}
            errors={formErrors}/>
        </Route>
        <Route path='/completed'>
          <Completed />
        </Route>
        <Route path='/'>
          <Home />
        </Route>
      </Switch>
    </div>
  );
}
