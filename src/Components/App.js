import React, { useState, useEffect } from "react";
import Form from "./Form";
import Confirmation from "./Confirmation";
import { Route, Link} from "react-router-dom";
import Home from './Home';
import formSchema from '../Validation/formSchema'
import axios from 'axios'
import * as yup from "yup";



const initialFormValues = {
  name: "",
  size: "",
  instructions:"",
  toppings:{ 
    pepperoni: false,
    sausage: false,
    tomatoes: false,
    garlic: false
  }
}

const initialFormErrors = {
  name: "",
  size: "",
  instructions:"",
}
const initialDisabled = true;




const App = () => {
  const[formValues, setFormValues]=useState(initialFormValues)
  const[formErrors,setFormErrors]=useState(initialFormErrors)
  const[disabled, setDisabled]=useState(initialDisabled)



// order information will be posted to the url API using axios.post
// regardless of success or failure the form will reset
const postNewOrder = order => {
  axios.post('https://reqres.in/api/pizza', formValues)
  .then(response=>{
    setFormValues(initialFormValues)
    console.log('this is response from post request', response.data)
  })
  .catch(error =>{
    console.log('error with post request', error)
  })
}

const inputChange = (name, value)=>{
  yup
  .reach(formSchema, name)
     //we can then run validate using the value
  .validate(value)
   // if the validation is successful, we can clear the error message
  .then(valid=>{
    setFormErrors({
      ...formErrors,
      [name]: "",
    })
  })
   /* if the validation is unsuccessful, we can set the error message to the message 
        returned from yup (that we created in our schema) */
  .catch(error=>{
    setFormErrors({
      ...formErrors,
      [name]: error.errors[0]
    })
  })
  setFormValues({
    ...formValues,
    [name]: value
  })
}

const checkboxChange = (name, isChecked)=>{
  setFormValues({
    ...formValues,
    toppings: { 
      ...formValues.toppings,
      [name]: isChecked,
    }
  })
}


const submit = () => {
  const newOrder = {
    name: formValues.name.trim(),
    size: formValues.size.trim(),
    instructions: formValues.instructions.trim(),
    toppings: Object.keys(formValues.toppings).filter(item => formValues.toppings[item],)
  }
  //post new order using postNewOrder Helper thats above
  postNewOrder(newOrder)
}


useEffect(()=>{
  formSchema.isValid(formValues).then(valid =>{
    setDisabled(!valid)
  })
}, [formValues])


  return (
    <div className="App">
      
      <div className="routeBtns">
        <h1 className="lambdaEats">Lambda Eats</h1>
        <Link to="/"><button className="btn1">Home</button></Link>
        <button className="btn2">Help</button>
      </div>


      
      <Route exact path="/pizza">
        <Form 
        values={formValues}
        inputChange={inputChange}
        checkboxChange={checkboxChange}
        submit={submit}
        disabled={disabled}
        errors={formErrors}/>
      </Route>

      <Route exact path="/pizza/confirmation">
        <Confirmation />
      </Route>
      <Route exact path="/"><Home /></Route>
      
    </div>
  );
};
export default App;
