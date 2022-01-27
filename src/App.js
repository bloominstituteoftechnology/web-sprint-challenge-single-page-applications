
import axios from "axios";
import React, {useEffect, useState} from "react";
import { Switch, Route, Link } from 'react-router-dom';
import Form from './Form';
import Homepage from './Homepage';
import * as yup from 'yup';
import schema from './formSchema'
import './App.css'


const initialFormValues = {
  name: '',
  size: '',

  pineapple: false,
  veggies: false,
  cheese:false,
  secretTopping: false,

  specialInstructions:''
}

const initialFormErrors= {
name: '',
size: '',
specialInstructions: ''
}

const initialPizzas = []
const initialDisabled = true


const App = () => {

const [pizza, setPizza] = useState(initialPizzas)
const [formValues,setFormValues] = useState(initialFormValues)
const [formError, setFormErrors] = useState(initialFormErrors)
const [disabled, setDisabled] = useState(initialDisabled)



const postPizza = newPizza => {
  axios.post('https://reqres.in/api/orders',newPizza)
  .then(res => {
    console.log([...pizza, res.data])
      setPizza([...pizza, res.data])
      
  }).catch(err => {
    console.log(err)
  }).finally(()=> {setFormValues(initialFormValues)
  
  })
 
}
const validate = (name, value) => {
  yup
    .reach(schema, name)
    .validate(value)
    .then(valid => {
      setFormErrors({
        ...formError,
        [name]: ''
      })
    })
    .catch (err => {
      setFormErrors({
        ...formError,
          [name]: err.errors[0]
        })
      })
}

const inputChange = (name, value) => {
  validate(name,value)
  setFormValues({...formValues, [name]:value})
}

const formSubmit = () => {
  const newPizza = {
    name: formValues.name.trim(),
    size: formValues.size.trim(),
    
    specialInstructions:formValues.specialInstructions.trim(),
    toppings: ['pineapple','veggies', 'cheese', 'secretTopping'].filter(tops => !!formValues[tops])
  }
  postPizza(newPizza)
}

useEffect(()=> {
  schema.isValid(formValues).then(valid => {
    setDisabled(!valid)
  })
}, [formValues])



  return (
        <div>
          <nav>
            <header className='App-header'>
          <div className="title">  
          <h1>BloomTech Pizza</h1>
          </div>  
            <div className="buton">
            <Link to= '/'><button className= 'home-btn'>Home</button></Link>
            </div>
            

            <div className='buton2'>
            <Link  to= '/pizza'>
                <button className= 'order-pizza'>Get Pizza</button>
            </Link>
            </div>
            </header>
            </nav>
          
            <Switch>
            <Route exact path ='/'>
              <Homepage />
            </Route>
            <Route path= '/pizza'>
              <Form
              values= {formValues}
              change={inputChange}
              submit={formSubmit}
              disabled={disabled}
              errors={formError}
              />
            </Route>
          </Switch>
          
        </div>
  );
};
export default App;
