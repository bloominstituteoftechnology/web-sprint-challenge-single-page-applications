import React, { useState, useEffect } from "react";
import { Route, Link, Switch } from 'react-router-dom'
import OrderForm from "./components/OrderForm";
import Home from './components/Home'
import Help from './components/Help'
import formSchema from './Validation/formSchema'
import * as yup from 'yup'

const initialFormValues = {
  size: '',
  sauce: '',
  items: '',
  instructions: '',
  name: '',
}

const initialFormErrors = {
  size: '',
  sauce: '', 
  items: '',
  name: '',
}

const initialDisabled = true

const App = () => {

  const [values, setValues] = useState(initialFormValues)
  const [formErrors, setFormErrors] = useState(initialFormErrors)
  const [disabled, setDisabled] = useState(initialDisabled)


  const formSubmit = () => {
    const newPizzaOrder ={
      size: values.size.trim(),
      sauce: values.sauce.trim(),
      items: values.items.trim(),
      instructions: values.instructions.trim(),
      name: values.name.trim(),
    }
    setValues(newPizzaOrder)
  }

  const inputChange = (name, value) => {
    yup.reach(formSchema,name)
    .validate(value)
    .then(() =>{
      console.log('then', value)
      setFormErrors({...formErrors, [name]:''})
    })
    .catch(err =>{
      setFormErrors({...formErrors, [name]: err.errors[0]})
    })
    setValues({
      ...values, [name]:value
    })
  }

  useEffect(() => {
    formSchema.isValid(values).then(valid => setDisabled(!valid))
  })

  return (
    <>
    <header>
      <h1>Lambda Eats</h1>
      <div className='navLinks'>
        <Link to='/'>Home</Link>
        <Link to='/Help'>Help</Link>
      </div>
    </header>

    <Switch>
      <Route path='/orderForm'>
        <OrderForm 
          values= {values}
          disabled= {disabled}
          change={inputChange}
          submit={formSubmit}
          errors={formErrors}
        />
      </Route>
      <Route path='/help'>
        <Help />
      </Route>
      <Route path='/'>
        <Home />
      </Route>
    </Switch>

      
    </>
  );
};
export default App;
