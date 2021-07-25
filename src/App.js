import React, { useState, useEffect } from "react";
import { Route, Switch, NavLink} from "react-router-dom";
import Home from "./components/home";
import Form from "./components/form";
import "./App.css";
import axios from "axios";
import { reach } from 'yup';
import formSchema from "./components/schema";
// Setting up my dummy data"Keys that we will name our inputs""
const initialValues = {name:"",size:"", toppings:"", special:""};
const initialErrors = {name:"",size:""};





//settings up my use state for my app
//going to need a use state for orders one containing the form one for errors and one for the button
const App = () => {
  const [orders, setOrders] = useState([])//orders
  const [formValues, setFormValues] = useState(initialValues);//intial starting values
  const [errors, setErrors] = useState(initialErrors);//initial values for error 
  const [disabled, setDisabled] = useState(true);//setting for button
  
  //posting to the api
  const postNewOrder = newOrder => {
  axios.post('https://reqres.in/api/orders', newOrder)
  .then(res => {
    setOrders([res.data.data, ...orders])
    console.log(`This is orders: ${orders}`)
  })
  .catch(err => {
    // console.log(err)
  })
  .finally(() => {
    setFormValues(initialValues)
  })
}

const setFormErrors = (name, value) => {
  reach(formSchema, name).validate(value)
    .then(() => setErrors({ ...errors, [name]: '' }))
    .catch((err) => setErrors({ ...errors, [name]: err.errors[0] }));
};

//Using handler functions

  const change = (event) => {
    const { value, name, checked,type } = event.target;
    const valueToUse = type === "checkbox" ? checked: value;
    setFormErrors(name, valueToUse);
    setFormValues({...formValues, [name]: valueToUse});
  };
  //{name:"",Size:"", toppings:"", special:""};
  const formSubmit = (event) => {
    const newOrder = {
      name: formValues.name,
      size: formValues.size,
      toppings: formValues.toppings,
      special: formValues.special
    }
    //on submit this should post neworder containing the values
    postNewOrder(newOrder)
  }

  useEffect(() => {
    formSchema.isValid(formValues).then(valid => setDisabled(!valid));
    }, [formValues]);

    
    //schema for name must be longer than 2 characters
    
  
    
  
  
  return (
    
    <>
    {/* created a header everyone needs those */}
    <header className="App-header">
      {/* creating a nav probably also need that */}
      <h1>Lambda Eats</h1>
      {/* note to self had a problem saying navlink needed to be inside the router check index.js and make sure app is wrapped in router. */}
      <nav>
        {/* setting my links keys */}
        
          <NavLink className ="button" exact to='/'>Home</NavLink>
          
        <NavLink className ="button" exact to="/">Help!</NavLink>
      </nav>
      <p>Order Up my dude</p>
        
      </header>
    {/* using switch and route */}
    <Switch>  
      {/* routing path to my components */}
      <Route exact path = "/" component = {Home}/>
      <Route path = "/pizza">
        <Form
            formValues={formValues}
            change={change}
            submit={formSubmit}
            disabled={disabled}
            errors={errors}
        /> 
      </Route>
    </Switch>

    </>
  );
};
export default App;
