import React, { useState, useEffect } from "react";
import Form from "./Form"
import axios from 'axios'
import * as yup from 'yup'
import schema from './schema'
import { Route, Link } from "react-router-dom"
import Home from "./Home"

const initialForm = {
  name: '',
  size: '',
  pepperoni: false,
  onion: false,
  peppers: false,
  sausage: false,
  extraCheese: false,
  olive: false,
  jalapeno: false,
  instruct: ''
};

const initialFormErr = {
  name: '',
  size: '',
  instruct: ''
};

const initialOrderArr = [];
const initialDisable = true;

function App() {
  const [order, setOrder] = useState(initialOrderArr);
  const [form, setForm] = useState(initialForm);
  const [formErr, setFormErr] = useState(initialFormErr);
  const [disabled, setDisabled] = useState(initialDisable);

  const postNewOrder = (newOrder) => {
    axios.post("https:reqres.in/api/users", newOrder)
    .then((res) => {
      console.log(res)
      setOrder([...order, res.data]);
      setForm(initialForm);
    })
    .catch((err) => {
      console.log(err);
    });
  };

  const change = (name, value) => {
    yup.reach(schema, name)
    .validate(value)
    .then(() => {
      setFormErr({...formErr,
      [name]: ""});
    })
    .catch((err) => {
      setFormErr({...formErr,
      [name]: err.errors});
    });

    setForm({...form,
    [name]: value});
  }

  const submit = () => {
    const newOrder = {
      name: form.name.trim(),
      size: form.size.trim(),
      pepperoni: form.pepperoni,
      onion: form.onion,
      peppers: form.peppers,
      sausage: form.sausage,
      extraCheese: form.extraCheese,
      olive: form.olive,
      jalapeno: form.jalapeno,
      instruct: form.instruct.trim()
    }

    postNewOrder(newOrder);
  }

  useEffect(() => {
    schema.isValid(form).then((valid) => {
      setDisabled(!valid);
    });
  }, [form]);

  return (
    <div className='App'>
      <Link to='/Pizza'>Order The Best Pizza Around
      </Link>
      <Link to='/'>Home
      </Link>
      <Route exact path='/'>
        <Home></Home>
      </Route>
      <Route path='/Pizza'>
        <Form submit={submit} change={change} form={form} disabled={disabled}></Form>
      </Route>
    </div>
    );
  };

export default App;
