import React, { useEffect,useState } from "react";
import Form from './Form';
import Home from './Home'
import axios from 'axios'
import * as yup from "yup"
import ShowOrders from './ShowOrders';

import Schema from "./Schema";




import { BrowserRouter as Router , Link, Switch, Route } from 'react-router-dom';

const initialFormValues = {
  name: '',
  size: '',
  pineaple:false,
  jalapenos:false,
  mushrooms:false,
  pepperoni:false,
  instructions:"",
}
const initialFormErrors ={
  name:"",
  size:"",
}
const initalDisabled = true;
const App = () => {
  const [order,setOrder] =useState([]);
  const [formValues, setFormValues] =useState(initialFormValues);

  const [formErrors, setFormErrors] = useState(initialFormErrors);
  const [disabled,setDisabled] =useState(initalDisabled);

  // functions
  const postNewOrder= (newOrder)=>{
    axios.post('https://reqres.in/',newOrder).then(res =>{
      setOrder([...order,res.data]);
      setFormValues(initialFormValues);
    })
  }
  const onSubmit = event =>{
    const newOrder ={
      name: formValues.name.trim(),
      size: formValues.size,
      pineaple:formValues.pineaple,
      jalapenos:formValues.jalapenos,
      mushrooms:formValues.mushrooms,
      pepperoni:formValues.pepperoni,
      instructions:formValues.instructions,

    }
    console.log("Here",newOrder)
    postNewOrder(newOrder);
    setFormValues(initialFormValues);

  }
  const inputChange = (name, value) => {
    yup.reach(Schema, name).validate(value).then(() => {
        setFormErrors({...formErrors,[name]: "",});
      }).catch((err) => {
        setFormErrors({...formErrors,[name]: err.errors[0],});
      });
  
    setFormValues({
      ...formValues,
      [name]: value, 
    });
  };
  useEffect(() => {
    Schema.isValid(formValues).then((valid) => {
      setDisabled(!valid);
    });
  }, [formValues]);
  

 
  return (
    <>
      <Router>
        {/* Header */}
        <nav>
          <h1>Ricky's Pizzeria</h1>
          <div className ="navLinks">
            <Link to='/'>Home</Link>
            <Link to ='/order'>Order</Link> 
          </div>
        </nav>

        {/* Switch */}
        <Switch>
            {/* Form */}
            <Route path = '/order'>
              <Form 
                values = {formValues}
                update = {inputChange}
                submit = {onSubmit}
                disabled = {disabled}
                errors = {formErrors}
                orders = {order}
              
              />
            </Route>

            {/* Home */}
            <Route exact path ='/'>
              <Home/>
            </Route>
          </Switch>
      </Router>

    </>
  );
};
export default App;
