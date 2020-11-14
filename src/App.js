import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import PizzaForm from './Components/PizzaForm';
import './App.css';
import axios from 'axios';
import * as yup from 'yup';
import schema from './Validation/formschema';


const initailFormValues ={
    size: '',
    name: '',
    specialInstruction: '',
    pepperoni:false,
    grilledChicken:false,
    greenPepper:false,
    pineapple:false,

  }

  const initialFormErrors ={
    size: '',
    name: '',
    specialInstruction: '',
  }

const initialDisabled = true;

const App = () => {

  const [form, setForm] = useState(initailFormValues);
  const [order, setOrder] = useState([]);
  const [formErrors, setFormErrors] =useState(initialFormErrors);
  const [disabled, setDisabled] = useState(initialDisabled);
  

  function inputChange(inputName, inputValue){
    yup.reach(schema, inputName)
    .validate(inputValue)
    .then(() =>{
      setFormErrors({
        ...formErrors, [inputName]: ''
      });
    })
    .catch((err) =>{
      setFormErrors({
        ...formErrors,
        [inputName]: err.errors[0],
      });
    });

    setForm({
      ...form,
      [inputName]: inputValue
    })

    const postOrder = newOrder =>{
      axios
      .post('https://reqres.in/', newOrder)
      .then(res =>{
        console.log(res.data);
        setOrder([res.data, ...order]);
        setForm(initailFormValues)
      })
      .catch((err) =>{
        console.log(err, 'error')
      })
    }


    const formOrder = () => {
      const newOrder = {
        size: form.size.trim(),
        name: form.name.trim(),
        specialInstruction: form.specialInstruction.trim(),
        pepperoni: form.pepperoni,
        grilledChicken: form.grilledChicken,
        greenPepper: form.greenPepper,
        pineapple: form.pineapple,
      }
      postOrder(newOrder)
    }   

}

useEffect(() =>{
  schema.isValid(form)
  .then(valid =>{
    setDisabled(!valid);
  });
},[form]);

  return (
    <Router>
      <div className='header'>
        <h1>Lambda Eats</h1>
        <div>
          <button id='home'><Link to ='/'>Home</Link></button>
          <button id='pizza'><Link to ='/pizza'>Build Pizza</Link></button>
          <button id='help'>Help</button>
        </div>
      </div> 
      <div>
        <Switch>
          <Route exact path='/' />
          <Route path='/pizza'>
            <PizzaForm
            values={form}  
            change={inputChange}
            submit={formOrder}
            disabled={disabled}
            />
          </Route>
        </Switch>
      </div>
      
    </Router>
  );
};
export default App;
