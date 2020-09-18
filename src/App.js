import React, { useState, useEffect } from "react";
import axios from "axios";
import { Route, Link } from "react-router-dom";
import Pizza from "./Components/Pizza";
import Form from "./Components/Form";
import schema from "./Components/formSchema";
import * as yup from "yup";
import "./App.css";

const initialFormErrors = {
  name: "", //text
  size: "", //dropdown
  instructions: "", // text
};

const initialPizza = [];
const initialDisabled = true;

const App = () => {
  const [pizza, setPizza] = useState([]);
  const [post, setPost] = useState(false);
  const [formErrors, setFormErrors] = useState(initialFormErrors);
  const [disabled, setDisabled] = useState(initialDisabled);

  const URL = `http://localhost:3000`;

  const getOrder = () => {
    // useEffect(() => {
    axios
      .get(URL)
      .then((res) => {
        // console.log(res.data);
        setPizza(res.data);
        setPost(false);
      })
      .catch((err) => console.log(`Error: ${err}`.red));
    // }, [post]);
  };

  const validate = (name, value) => {
    yup
      .reach(schema, name)
      .validate(value)
      .then((valid) => {
        setFormErrors({ ...formErrors, [name]: "" });
      })
      .catch((err) => {
        setFormErrors({
          ...formErrors,
          [name]: err.errors[0],
        });
      });
  };

  return (
    <>
      <div className="App-header">
        <h1>Lambda Eats</h1>
        <h2>Pizza Port!</h2>

        <Link to="/">
          <div className="App-link">Home</div>
        </Link>

        <Link to="/pizza">
          <div className="App-link">Order</div>
        </Link>

        <Route exact path="/">
          <Pizza pizza={pizza} />
        </Route>
        <Route path="/pizza">
          <Form setPost={setPost} />
        </Route>
      </div>
    </>
  );
};
export default App;
