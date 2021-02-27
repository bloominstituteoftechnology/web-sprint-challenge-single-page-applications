import React, { useState, useEffect } from "react";
import { Route, Link, Switch } from 'react-router-dom'
import OrderForm from "./components/OrderForm";
import Home from './components/Home'
import Help from './components/Help'
import formSchema from './Validation/formSchema'
import * as yup from 'yup'
import OrderConfirm from './OrderConfermation'

const initialFormValues = {
  size: '',
  sauce: '',

  peperoni: false,
  mushroom: false,
  olives: false,
  sausage: false,
  artichokes: false,

  instructions: '',
  customerName: '',
}

const initialFormErrors = {
  size: '',
  sauce: '', 
  customerName: '',
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
      instructions: values.instructions.trim(),
      customerName: values.customerName.trim(),

      Items: [
        'peperoni',
      'mushroom',
      'sausage',
      'sausage', 
      'artichokes',].filter(item => values[item])
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
      ...values,
      [name]:value
    })
  }

  useEffect(() => {
    formSchema.isValid(values).then(valid => setDisabled(!valid))
  }, [values])

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
      <Route path='/orderConfirm'>
        <OrderConfirm values={values} />

      </Route>
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
