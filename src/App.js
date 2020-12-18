import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Home from "./Home";
import Order from "./Order";
import Nav from "./Nav";
import * as yup from "yup";
import axios from "axios";

let schema = yup.object().shape({
  name: yup
    .string()
    .min(2, "Please enter your name")
    .required("Please enter your name"),
  size: yup.string(),
  sauce: yup.string(),
  toppings: yup.string(),
  specialInstructions: yup.string(),
});

const formData = {
  size: "",
  sauce: "",
  toppings: {},
  specialInstructions: "",
};

const App = () => {
  const [inputValue, setInputValue] = useState(formData);
  const [pizza, setPizza] = useState([]);
  const [formErrors, setFormErrors] = useState([]);
  const [reqErr, setReqErr] = useState(null);

  const formSubmit = (event) => {
    event.preventDefault();

    axios
      .post("https://reqres.in/api/users", { inputValue })
      .then((res) => {
        setPizza([...pizza, res.data.inputValue]);
        setInputValue(formData);
      })
      .catch((err) => {
        console.log(err);
        setReqErr(err);
      });
    const conf = document.querySelector(".confirmation");
    conf.style.visibility = "visible";
  };

  const checkboxChange = (name, isChecked) => {
    setInputValue({
      ...inputValue,
      toppings: {
        ...inputValue.toppings,
        [name]: isChecked,
      },
    });
  };

  const formChange = (name, value) => {
    yup
      .reach(schema, name)
      .validate(value)
      .then((msg) => {
        setFormErrors({ ...formErrors, [name]: "" });
      })
      .catch((err) => {
        setFormErrors({ ...formErrors, [name]: err.errors[0] });
      });

    setInputValue({
      ...inputValue,
      [name]: value,
    });
  };
  return (
    <Router>
      <div className="App">
        <Nav />

        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/pizza">
            <Order
              submit={formSubmit}
              updateInput={formChange}
              errors={formErrors}
              pizza={pizza}
              value={inputValue}
              checkboxChange={checkboxChange}
              reqErr={reqErr}
            />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};
export default App;
