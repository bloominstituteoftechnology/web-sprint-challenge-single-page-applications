import React from "react";
import {Switch, Route, Link} from 'react-router-dom'
import Form from './components/Form'
import Home from './components/Home'
import { useState } from 'react';
import * as Yup from 'yup';
import formSchema from './validation/formSchema'

const initailFormValues = {
  name:'',
  size: '',
  sauce:'',
  toppings:{
    pepperoni: false,
    sausage: false,
    onions: false,
    pineapple:false
  },
  specail: '',
}

const initailFormErrors ={
  name: '',
  size: '',
  sauce:'',
  toppings:{
    pepperoni: false,
    sausage: false,
    onions: false,
    pineapple:false
  },
  specail: '',
}
 



const App = () => {
  const [formValues , setFormValues] = useState(initailFormValues)
const [formErrors , setFormErrors] = useState(initailFormErrors)

const onInputChange = evt =>{
  const {name , value} = evt.target

  Yup
  .reach(formSchema, name)
  
  .validate(value)
  
  .then(() => {
    setFormErrors({
      ...formErrors,
      [name]: ""
    });
  })
 
  .catch(err => {
    setFormErrors({
      ...formErrors,
      [name]: err.errors[0] 
    })
  })
    
  setFormValues({
    ...formValues,
    [name]:value,
    
  })

}


const onSubmit = evt =>{
  evt.preventDefault()
}

const onCheckboxChange = evt => {
  const { name, checked } = evt.target
 
  setFormValues({
    ...formValues,
    toppings: {
      ...formValues.toppings,
      [name]: checked,
    }
  })
}

// useEffect(() => {

//   formSchema.isValid(formValues).then(valid => {
//     setDisabled(!valid);
//   })
// }, [formValues])


  return (
      <div>
        <nav>
          <h1>Lambda Eats</h1>
          <div className='nav-links'>
            <Link to='/'>Home</Link>
            <Link to='/pizza'>Order Pizza</Link>
          </div>
        </nav>

        <Switch>
          <Route path='/pizza'>
            <Form 
            values={formValues} 
            onInputChange={onInputChange} 
            onSubmit={onSubmit}
            onCheckboxChange={onCheckboxChange}
            />
          </Route>
          <Route exact path='/'>
            <Home/>
          </Route>
        </Switch>
       </div>
  );
}
export default App;
