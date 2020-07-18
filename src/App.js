import React, {useState}from "react";
// import Form from './components/Form'
// import Home from './components/Home'
// import formSchema from './validation/formSchema'
// import * as yup from 'yup'
// import axios from 'axios'
// import {Route, Switch, Link} from 'react-router-dom'


const initialFormValues = {
  first_name: '',
  size: '',
  toppings:{
    pepperoni: false,
    blackOlives: false,
    sausage: false,
    greenChile: false,
  },
  substitute: false,

  instructions:'',
}

const initialFormErrors = {
  first_name:'',
  size: '',
  instructions: '',
}

const initialDisabled = true



const App = () => {

  const [orders, setOrders] = useState([])
  const [formValues, setFormValues] = useState(initialFormValues)
  const [formErrors, setFormErrors] = useState(initialFormErrors)
  const [disabled, setDisabled] = useState(initialDisabled)

  return (
    <>
      <h1>Lambda Eats</h1>
      <p>You can remove this code and create your own header</p>
    </>
  );
};
export default App;
