import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Route, Link, Switch } from 'react-router-dom';
import Header from './components/Header';
import styled from "styled-components";
import Pic from './components/Pic'
import OrderPizza from './pizza'
import * as yup from "yup";
import schema from "./validations/formSchema";

const Container = styled.div`
*{
  padding:0px;
  margin:0px;
  font-family: san-serif;
  text-align: center;
  color: dodgerblue;
}`;
const pizzaList = [];

const initialFormValues = {
  //Text
  username: '',
  special: '',
  //dropdown
  size: '',
  //checkboxes
  ham: false,
  olives: false,
  onions: false,
  cheese: false,

};

const initialFormErrors = {
  username: '',
  special: '',
  size: '',
}

const initialUsers = [];
const initialDisabled = true

export default function App() {
  const [url, setUrl] = useState("https://buff.ly/2UybmBQ");
  const [users, setUsers] = useState(initialUsers); //array of users objects
  const [formValues, setFormValues] = useState(initialFormValues); // object
  const [formErrors, setFormErrors] = useState(initialFormErrors); // object
  const [disabled, setDisabled] = useState(initialDisabled); // boolean

  const validate = (name, value) => {
    yup
      .reach(schema, name)
      .validate(value)
      .then(valid => {//eslint-disable-line
        setFormErrors({
          ...formErrors, [name]: ""
        });
      })
      .catch(err => {
        setFormErrors({
          ...formErrors, [name]: err.errors[0]
        });
      });
  }

  const inputChange = (name, value) => {

    validate(name, value)
    setFormValues({
      ...formValues,
      [name]: value // NOT AN ARRAY
    })
  }
  const formSubmit = () => {
    const newPizza = {
      username: formValues.username.trim(),
      specia: formValues.email.trim(),
      size: formValues.role.trim(),
      toppings: ['ham', 'olives', 'onions', 'cheese'].filter(tops => formValues[tops] ),
    }
    // postNewPizza(newPizza)
  }
  useEffect(() => {
  }, [])

  // useEffect(() => {
  //   schema.isValid(formValues)
  //   .then(valid => {
  //     setDisabled(!valid);
  //   });
  // }, [formValues]);


  return (


    <Container>
      <Header id="order-pizza" />
      <Switch>

        <Route exact path="/pizza">
          <OrderPizza >SHOW ME</OrderPizza>
        </Route>

        <Route path='/'>
          <Pic pic={url} />
        </Route>


      </Switch>

    </Container>


  );
}

