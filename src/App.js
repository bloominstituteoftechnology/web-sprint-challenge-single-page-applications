import React, { useState, useEffect, } from "react";
import {BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import axios from 'axios';
import * as yup from 'yup';
import schema from './Validation/formSchema';
import PizzaForm from './Components/PizzaForm';
// import Confirmation from './Components/Confirmation';


  const initalFormValues ={
    size: '',
    specialInstructions: '',
    pepperoni: false,
    jalapeno: false,
    bacon: false,
    greeenPepper: false,
    italianSausage: false,
    name: '',
  }

  const initalFormErrors ={
    size: '',
    specialInstructions: '',
    name: '',
  }

  const initialDisabled = true;

const App = () => {
  const [orders, setOrders] = useState([]);
  const [formValues, setFormValues] = useState(initalFormValues);
  const [formErrors, setFormErrors] = useState(initalFormErrors);
  const [disabled, setDisabled] = useState(initialDisabled);

  const getOrders = () =>{
    axios.get('https://reqres.in/')
    .then((res) =>{
      console.log(res.data);
    })
    .catch((err) =>{
      console.log(err, 'error');
    })
  }


  const postNewOrder = (newOrder) =>{
    axios.post('https://reqres.in/', newOrder)
    .then((res) =>{
      setOrders([res.data, ...orders]);
      setFormValues(initalFormValues);
    })
    .catch((err) =>{
      console.log(err, 'error');
    })
  }

  const inputChange = (name, value) =>{

    yup
    .reach(schema, name)
    .validate(value)
    .then(() =>{
      setFormErrors({
        ...formErrors,
        [name]: '',
      });
    })
      .catch((err) =>{
        setFormErrors({
          ...formErrors,
          [name]: err.errors[0],
      });
    });

    setFormValues({
      ...formValues,
      [name]: value,
    });
  }

  const formSubmit = () =>{
    const newOrder ={
      size: formValues.size.trim(),
      specialInstructions: formValues.specialInstructions.trim(),
      name: formValues.name.trim(),
      pepperoni: formValues.pepperoni,
      jalapeno: formValues.jalapen,
      bacon: formValues.bacon,
      greeenPepper: formValues.greeenPepper,
      italianSausage: formValues.italianSausage,
    }
  }

  useEffect(() =>{
    getOrders();
  },[])

  useEffect(() =>{
    schema.isValid(formValues).then((valid) =>{
      setDisabled(!valid)
    })
  },[formValues])



  return (
    <Router>
    <div className='header'>
      <h1>Lambda Eats</h1>
      <nav>
        <button id='home'><Link to='/'>Home</Link></button>
        <button id='pizza'><Link to='/pizza'>Pizza</Link></button>
        <button id='home'>Help</button>
      </nav>
    </div>

    <Switch>

      <Route path='/pizza'>
        <PizzaForm  
          values={formValues}
          change={inputChange}
          submit={formSubmit}
          disabled={disabled}
          errors={formErrors}
        />
      </Route>
    </Switch>
     {/* <Route path='/confirmation'>
        <Confirmation />
      </Route>*/}
    
    
    </Router>
  );
};
export default App;
