import { Route, Link, Switch } from "react-router-dom";
import React, { useState, useEffect } from "react";
import axios from "axios";
import * as yup from "yup";
// import Home from "./home";
import Pizza from "./components/pizza.js";
import schema from "./validation/formSchema";

const initialFormValues = {
  name: "",
  size: "",
  chicken: "false",
  mushroom: "false",
  bacon: "false",
  sausage: "false",
  specInstruct: "",
};

const initialFormErrors = {
  size: "",
};

export default function App() {
  const [pizza, setPizza] = useState([]);
  const [formValues, setFormValues] = useState(initialFormValues);
  const [formErrors, setFormErrors] = useState(initialFormErrors);
  const [disabled, setDisabled] = useState(true);

  const postNewPizza = (newPizza) => {
    axios
      .post("https://reqres.in/api/users", newPizza)
      .then((res) => {
        setPizza([res.data, ...pizza]);
        setFormValues(initialFormValues);
      })
      .catch((err) => {
        console.log(err);
        debugger;
      });
  };

  const formChange = (name, value) => {
    yup
      .reach(schema, name)
      //reach into the yup schema
      .validate(value)
      //ensure the values are true
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

  const formSubmit = () => {
    const newPizza = {
      name: formValues.name.trim(),
      size: formValues.size.trim(),
      toppings: ["chicken", "mushroom", "bacon", "sausage"],
      instructions: formValues.specInstruct.trim(),
    };
    postNewPizza(newPizza);
  };

  useEffect(() => {
    postNewPizza();
  }, []);
  //anytime the page renders, get the users.

  useEffect(() => {
    schema.isValid(formValues).then((valid) => {
      setDisabled(!valid);
    });
  }, [formValues]);

  return (
    <div className="App">
      <nav>
        <h1 className="nav-header">Lambda Eats</h1>
        <div className="nav-links">
          {/* <Link to="/">Home</Link> */}
          <Link to="/pizza">Order Pizza</Link>
        </div>
      </nav>
      <Switch>
        <Route path="/pizza">
          <Pizza
            values={formValues}
            change={formChange}
            submit={formSubmit}
            errors={formErrors}
            disabled={disabled}
          />
        </Route>
        <Route path="/">{/* <Home /> */}</Route>
      </Switch>
      {pizza.map((pizza) => {
        return <Pizza key={pizza.id} details={pizza} />;
      })}
    </div>
  );
}
