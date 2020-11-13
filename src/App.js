import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import Form from "./Components/Form"
import schema from "./formSchema";
import * as yup from "yup";
import { Route, Link, Switch } from "react-router-dom";


//Initial States
const initialFormValues = {
  //Text Inputs
  pizzasize: '',
  sauce: '',
 special: '',
};

//Initial Form Errors
const initialFormErrors = {
  pizzasize: '',
  sauce: '',
 special: '',
};
const initialDisabled = true;
const initialAccounts = [];

function App() {
  //states
  const [accounts, setAccounts] = useState(initialAccounts);
  const [formValues, setFormValues] = useState(initialFormValues);
  const [formErrors, setFormErrors] = useState(initialFormErrors);
  const [disabled, setDisabled] = useState(initialDisabled);

  //Helper Functions

  function getAccounts() {
    axios
      .get("https://reqres.in/api/users")
      .then((res) => {
        setAccounts(res.data);
      })
      .catch((err) => {
        alert("Hey man! An error has occured - Line 47 app.js");
      });
  }
  function postNewAccount(newAccount) {
    axios
      .post("https://reqres.in/api/users", newAccount)
      .then((res) => {
        setAccounts([res.data, ...accounts]);
        setFormValues(initialFormValues);
      })
      .catch((err) => console.log("error"));
  }
  //Event Handlers

  function inputChange(name, value) {
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
  }
  function formSubmit() {
    const newAccount = {
      pizzasize: formValues.pizzasize,
      sauce: formValues.sauce,
      special: formValues.special.trim(),

    };
    postNewAccount(newAccount);
    setFormValues(initialFormValues);
  }

  //Side effects

  useEffect(() => {
    getAccounts();
  }, []);

  //makes the button enable after form is filled out
  useEffect(() => {
    schema.isValid(formValues).then((valid) => {
      setDisabled(!valid);
    });
  }, [formValues]);
  
  
  return (
    <div className="App">
      <header>
        <h1>Pizza Maker App</h1>
        <nav>
          <Link to='/'>Home</Link>
          <Link to='/form'>Make a pizza</Link>
        </nav>
      </header>
   <div className='background'>

   </div>
      <Switch>
      <Route path='/form'>
        <Form
        values={formValues}
        change={inputChange}
        submit={formSubmit}
        disabled={disabled}
        errors={formErrors}
      />
      </Route>
      </Switch>
    </div>
  );
}

export default App;