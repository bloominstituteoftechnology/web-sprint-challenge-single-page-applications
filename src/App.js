import React, { useState, useEffect } from "react";
import { Route, Switch, withRouter } from "react-router-dom";
import schema from './validation/pizzaFormSchema';
import Home from './components/Home';
import PizzaForm from './components/PizzaForm';
import Order from './components/Order';
import * as yup from "yup";

const initialFormValues = {
  size: "medium",
  sauce: "originalRed",
  pepperoni: false,
  sausage: false,
  canadianBacon: false,
  spicyItalianSausage: false,
  grilledChicken: false,
  onions: false,
  greenPepper: false,
  dicedTomatos: false,
  blackOlives: false,
  roastedGarlic: false,
  artichokeHearts: false,
  threeCheese: false,
  pineapple: false,
  extraCheese: false,
  substitute: false,
  specialInstructions: "hello",
  quantity: 1,
  total: 0,
};
const initialFormErrors = {
  size: "",
  sauce: "",
  toppings: "",
  substitute: "",
  specialInstructions: "",
  quantity: "",
};
const initialOrders = [];
const initialDisabled = true;


const App = () => {
  const [orders, setOrder] = useState(initialOrders);
  const [formValues, setFormValues] = useState(initialFormValues);
  const [formErrors, setFormErrors] = useState(initialFormErrors);
  const [disabled, setDisabled] = useState(initialDisabled);

  const inputChange = (name, value) => {
    yup
      .reach(schema, name)
      .validate(value)
      .then(() => {
        setFormErrors({
          ...formErrors,
          [name]: "",
        });
      })
      .catch((err) => {
        setFormErrors({
          ...formErrors,
          [name]: err.errors[0],
        });
      });
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  // const formSubmit = () => {
  //   const newOrder = {
  //     name: formValues.name.trim(),
  //     email: formValues.email.trim(),
  //     password: formValues.password.trim(),
  //     terms: ["terms"].filter((term) => formValues[term]),
  //   };
  //   [];
  // };

  useEffect(() => {
    schema.isValid(formValues).then((valid) => {
      setDisabled(!valid);
    });
  }, [formValues])

  return (
    <>
      <h1>Lambda Eats</h1>

      <Switch>
        <Route path={'/order'}>
          <Order />
        </Route>
        <Route path={'/pizza'}>
          <PizzaForm
            orders={orders}
            values={formValues}
            change={inputChange}
            disabled={disabled}
            errors={formErrors}
          />
        </Route>
        <Route path='/'>
          <Home />
        </Route>
      </Switch>
    </>
  );
};
export default withRouter(App);
