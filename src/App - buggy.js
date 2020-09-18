import React, { useState, useEffect } from "react";
import { Route, Link, Switch } from "react-router-dom";
import * as yup from "yup";

import Home from "./Home";
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

const App = () => {
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
    setFormErrors(initialFormErrors);
    setDisabled(initialDisabled);
  };

  // VALIDATION
  // const validate = (name, value) => {
  //   // Find schema, then test each key/pair (eg, name/value)
  //   yup
  //     .reach(schema, name)
  //     .validate(value)
  //     // If validation successful, clear error message
  //     .then((valid) => {
  //       setFormErrors({
  //         ...formErrors,
  //         [name]: "",
  //       });
  //     })
  //     // If validation unsuccessful, set the error message to the message from the formSchema.js file
  //     .catch((err) => {
  //       setFormErrors({
  //         ...formErrors,
  //         [name]: err.errors[0],
  //       });
  //     });
  // };

  return (
    <div className="App">
      <nav>
        <h1>Lambda Eats</h1>
        {/* <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/pizza">Make Your Pizza</Link>
        </div> */}
      </nav>

      {/* <Switch>
        <Route path="/pizza"> */}
      <Form
        values={formValues}
        update={inputChange}
        submit={submitForm}
        disabled={disabled}
        errors={formErrors}
      />
      {/* </Route> */}

      {/* <Route path="/"> */}
      <Home />
      {/* </Route>
      </Switch> */}
    </div>
  );
};

export default App;
