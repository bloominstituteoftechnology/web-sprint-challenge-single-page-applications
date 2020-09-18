import React, { useState } from "react";
import { Route, Link, Switch } from "react-router-dom";
import * as yup from "yup";

import Home from "./Home";
import Order from "./Order";
import Form from "./Form";
import schema from "./formSchema";

const initialFormValues = {
  name: "",
  size: "",
};
const initialFormErrors = {
  name: "",
  size: "",
};
const initialOrders = [];
const initialDisabled = true;

function App() {
  // SLICES OF STATE
  const [orders, setOrders] = useState(initialOrders); //array of orders objects
  const [formValues, setFormValues] = useState(initialFormValues); // object
  const [formErrors, setFormErrors] = useState(initialFormErrors); // object
  const [disabled, setDisabled] = useState(initialDisabled); // boolean

  // HELPER FUNCTIONS
  // const updateForm = (inputName, inputValue) => {
  //   setFormValues({ ...formValues, [inputName]: inputValue });
  // };

  const inputChange = (name, value) => {
    // validate(name, value);
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const submitForm = () => {
    const newOrder = {
      name: formValues.name,
      size: formValues.size,
    };

    setOrders([...orders, newOrder]);
    setFormValues(initialFormValues);
  };

  //VALIDATION;
  const validate = (name, value) => {
    // Find schema, then test each key/pair (eg, name/value)
    yup
      .reach(schema, name)
      .validate(value)
      // If validation successful, clear error message
      .then((valid) => {
        setFormErrors({
          ...formErrors,
          [name]: "",
        });
      })
      // If validation unsuccessful, set the error message to the message from the formSchema.js file
      .catch((err) => {
        setFormErrors({
          ...formErrors,
          [name]: err.errors[0],
        });
      });
  };

  return (
    <div className="Main">
      <nav>
        <h1>Lambda Eats</h1>
        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/pizza">Make Your Pizza</Link>
          <Switch>
            <Route path="/pizza">
              <Form
                values={formValues}
                update={inputChange}
                submit={submitForm}
                disabled={disabled}
                errors={formErrors}
              />
            </Route>

            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </nav>
      <h2> Current Orders </h2>
      {orders.map((odr) => {
        return <Order key={odr.id} details={odr} />;
      })}
    </div>
  );
}

export default App;
