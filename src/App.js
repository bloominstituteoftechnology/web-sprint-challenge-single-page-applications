import { React, useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import axios from "axios";
import * as yup from "yup";
import formSchema from "./Validation/formSchema";


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
//////////////// INITIAL STATE ////////////////
const initialPizza = [];
const initialDisabled = true;

const App = () => {
    //////////////// STATES ////////////////
  const [ pizza, setPizza ] = useState( initialPizza );
  const [ formValues, setFormValues ] = useState( initialFormValues );
  const [ formErrors,setFormErrors ] = useState( initialFormErrors );
  const [ disabled, setDisabled ] = useState( initialDisabled );
    //////////////// HELPERS ////////////////
  const postPizza = newPizza => {
    axios.post( `https:.//reqres.in/api/orders`, newPizza )
      .then(( response ) => setPizza(
        [ response.data, ...pizza ]
      ))
      .catch(( error ) => {
        console.log( error, "Houston, we have a problem" )
      })
  };
  //////////////// EVENT HANDLERS ////////////////
  const inputChange = ( name, value ) => {
    yup
    .reach ( formSchema, name)
    .validate ( value )
    .then(() => {
      setFormErrors({
        ...formErrors,
        [ name ]: error.errors[ 0 ],
      })
    })
    setFormValues({
      ...formErrors,
      [ name ]: value
    })
  };
  const formSubmit = () => {
    const newPizza = {
      // ADD VALUES HERE, 
      pizzaSize: formValues.pizzaSize,
      pizzaSauce: formValues.pizzaSauce,
      toppings: [ "cheese", "sausage", "pepperoni", "mushroom", "pineapple", "onions", "olives", "kitchenSink" ].filter( topping => {
        return formValues[topping];
      }), 
      addOn: formValues[topping],
    }
    postPizza( newPizza );
  }
  //////////////// SIDE EFFECTS ////////////////
  useEffect(() => {
    formSchema.isValid( formValues ).then( valid => setDisabled( !valid ))
  }, [ formValues ])
  //////////////// SET ROUTES, SWITCH ////////////////
  return (
    <div>
      <Switch>
        <Route>
          <Order
            values = { formValues }
            errors = { formErrors }
            disabled = { disabled }
            submit = { formSubmit }
            change = { inputChange }
          />
        </Route>
        <Route path = "/checkout">
          <Checkout details = { pizza } />
        </Route>
        <Route path = "/" component = { HomePage } />
      </Switch>
    </div>
  )
};
export default App;
