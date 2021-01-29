import { React, useState, useEffect } from "react";
import { Route } from "react-router-dom";
import axios from "axios";
import * as yup from "yup";
import formSchema from "./Validation/formSchema"


const initialFormValues = {
  pizzaSize: "",
  pizzaSauce: "",
  cheese: false,
  sausage: false,
  pepperoni: false,
  mushrooms: false,
  pineapple: false,
  onions: false,
  olives: false,
  kitchenSink: false,
  addOn: "",
}

const initialFormErrors = {
  pizzaSize: "",
  pizzaSauce: "",
}

const initialPizza = [];
const initialDisabled = true;

const App = () => {

  const [ pizza, setPizza ] = useState( initialPizza );
  const [ formValues, setFormValues ] = useState( initialFormValues );
  const [ formErrors,setFormErrors ] = useState( initialFormErrors );
  const [ disabled, setDisabled ] = useState( initialDisabled );

  const postPizza = newPizza => {
    axios.post( `https:.//reqres.in/api/orders`, newPizza )
      .then()
      .catch()
  }

  return (

  );
};
export default App;
