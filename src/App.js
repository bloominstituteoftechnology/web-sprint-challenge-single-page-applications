import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import formSchema from './validation/formSchema';
import * as yup from 'yup'; 

// setting up initial order form state

const initialOrderForm = {
  // text input //
  name: '', 
  // dropdown // 
  size: '', 
  // checkboxes //
  toppings: {
      anchovies: false, 
      pepperoni: false, 
      pineapple: false, 
      basil: false, 
  },
  // textarea // 
  special: '',
}
console.log(initialOrderForm);

// setting up initial errors state, just checking name // 

const initialOrderErrors = {
  name: ''
}

// state and button disable on render (until form filled out and valid)

const initialOrders = []; 
const initialBtnDisable = true; 

const App = () => {
  // slices of state // 
  const [orders, setOrders] = useState(initialOrders); 
  const [formValues, setFormValues] = useState(initialOrderForm); 
  const [formErrors, setFormErrors] = useState(initialOrderErrors); 
  const [disabled, setDisabled] = useState(initialBtnDisable); 

  // networking aids // 

  const getOrders = () => {
    axios.get("https://reqres.in/api/orders")
    .then(res => {
      setOrders(res.data);
    })
    .catch(err => { 
      console.log(err);
    });
  };
  
  const postNewOrder = newOrder => {
    axios.post("https://reqres.in/api/orders", newOrder)
    .then(res => {
      setOrders([res.data, ...orders]);
      setFormValues(initialOrderForm);
    })
    .catch(err => {
      console.log(err);
    });
  };

  // defining form actions - we need to install yup at this point // 

  const inputChange = (name, value) => {
    yup
    .reach(formSchema, name)
    .validate(value)
    .then(valid => {
      setFormErrors({
        ...formErrors, 
        [name]: "",
      })
    })
    .catch(err => {
      setFormErrors({
        ...formErrors, 
        [name]: err.errors[0],
      })
    })

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

  

  const history = useHistory();
  
  const handleClick = () => {
    history.push("/pizza"); 
  }; 

  return (
    <div className="App">
      <h1 className="welcome">Lambda Eats</h1>
      <p>Welcome to the Pizza Portal</p>
      <button onClick={handleClick}>Order Now</button>
    </div>
  );
};
export default App;
