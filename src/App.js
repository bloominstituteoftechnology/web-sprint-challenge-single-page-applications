import React, { useState, useEffect } from "react";
import axios from 'axios'
import Form from './Form'
import * as yup from 'yup'
import schema from './schema'
import {Route, Link} from 'react-router-dom'
import HomePage from './HomePage'

const initialForm = {
  name: '',
  size: '',
  peperoni: false,
  tomatoes: false,
  xtraCheese: false,
  artichoke: false,
  instruct: '',
};

const initialFormErrors = {
  name: '',
  size: '',
  instruct: ''
};

const initialOrdersArr = [];
const initialDisabled = true;

function App(){
  const [orders, setOrders] = useState(initialOrdersArr);
  const [form, setForm] = useState(initialForm);
  const [formErrors, setFormErrors] = useState(initialFormErrors);
  const [disabled, setDisabled] = useState(initialDisabled);

  const postNewOrder = (newOrder) => {
    axios
      .post("https://reqres.in/api/users", newOrder)
      .then((res) => {
        console.log(res)
        setOrders([...orders, res.data]);
        setForm(initialForm);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const change = (name, value) => {
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
        [name]: err.errors,
      });
    });

  setForm({
    ...form,
    [name]: value, 
  });
  }

  const submit = () => {
    const newOrder = {
      name: form.name.trim(),
      size: form.size.trim(),
      peperoni: form.peperoni,
      tomatoes: form.tomatoes,
      xtraCheese: form.xtraCheese,
      artichoke: form.artichoke,
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
      <Link to='/pizza'>ORDER SOME FUCKING PIZZA
      </Link>
      <Link to='/'>LINK TO HOMEPAGE</Link>
      <Route exact path='/'>
        <HomePage></HomePage>
      </Route>
      <Route path='/pizza'>
        <Form submit={submit} change={change} form={form} disabled={disabled}></Form>
      </Route>
    </div>
  );
};
export default App;
