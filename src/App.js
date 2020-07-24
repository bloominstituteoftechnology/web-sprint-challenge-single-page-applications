import React, { useState, useEffect } from "react";
// import { useHistory } from "react-router-dom";
import axios from "axios";
import formSchema from "./validation/formSchema";
import * as yup from "yup"; 
import Order from "./Order";
import OrderForm from "./OrderForm";


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
// console.log(initialOrderForm);

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
  
  const postNewOrder = newOrder => {
    axios.post("https://reqres.in/api/orders", newOrder)
    .then(res => {
      setOrders([res.data, ...orders]);
      setFormValues(initialOrderForm);
    }, [])
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
      });
    })
    .catch(err => {
      setFormErrors({
        ...formErrors, 
        [name]: err.errors[0],
      });
    })

    setFormValues({
      ...formValues, 
      [name]: value
    });
  };

  const checkboxChange = (name, isChecked) => {
    setFormValues({
      ...formValues,
      toppings: {
        ...formValues.toppings, 
        [name]: isChecked, 
      }
    });
  };

  // define submission // 

  const submit = () => {
    const newOrder = {
      name: formValues.name.trim(), 
      size: formValues.size, 
      toppings: Object.keys(formValues.toppings).filter(top => formValues.toppings[top]), 
      special: formValues.special.trim(),
    };
    postNewOrder(newOrder); 
  }

  // set a function to enable the order button if the form is valid with useEffect // 


useEffect(() => {
  formSchema.isValid(formValues).then(valid => {
    setDisabled(!valid)
  })
}, [formValues])
  
// navigation // 
  // const history = useHistory();
  
  // const handleClick = () => {
  //   history.push("/pizza"); 
  // }; 
// console.log(orders);
  return (
    <div className="App">
      <h1 className="welcome">Lambda Eats</h1>
      <h2>Welcome to the Pizza Portal</h2>
      {/* <button onClick={handleClick}>Order Now</button> */}
      <OrderForm 
      values={formValues}
      inputChange={inputChange}
      checkboxChange={checkboxChange}
      submit={submit}
      disabled={disabled}
      errors={formErrors}
      />

    {
      orders.map(order => {
        return (
          <Order key={order.id} details={order} />
        )
      })
    }

    </div>
  );
};
export default App;
