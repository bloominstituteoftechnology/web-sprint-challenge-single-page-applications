import React, { useState, useEffect } from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import Home from './components/Header';
import styled from "styled-components";
import Pic from './components/Pic'
import OrderPizza from './pizza'
import * as yup from "yup";
import schema from "./validations/formSchema";
import Success from './components/success';
import axios from 'axios';

const Container = styled.div`
*{
  padding:0px;
  margin:0px;
  font-family: san-serif;
  text-align: center;
  color: dodgerblue;
}`;


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
const pizzaList = [{}];
// const initialUsers = [];
const initialDisabled = true

export default function App() {
  const [url, setUrl] = useState("https://buff.ly/2UybmBQ");
  const [pizzas, setPizzas] = useState(pizzaList);
  // const [users, setUsers] = useState(initialUsers); //array of users objects
  const [formValues, setFormValues] = useState(initialFormValues); // object
  const [formErrors, setFormErrors] = useState(initialFormErrors); // object
  const [disabled, setDisabled] = useState(initialDisabled); // boolean
  const updateForm = (inputName, inputValue) => {
    // debugger
    setFormValues({...formValues, [inputName]: inputValue})
  }

  const getPizzas = () => {
    axios
      .get("https://reqres.in/api/orders")
      .then((res) => {
        setPizzas(res.data.data);
        console.log(`HERE IS setUsers`, setPizzas);
      })
      .catch((err) => {
        debugger;
        console.log(err);
      });
  };

  const postNewPizza = (newPizza) => {
    axios
      .post("https://reqres.in/api/orders", newPizza)
      .then((res) => {
        setPizzas([...pizzas, res.data]);
        setFormValues(initialFormValues);
      })
      .catch((err) => {
        debugger;
        console.log(err);
      })
      .finally(() => {});
  };
  


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
      special: formValues.specal.trim(),
      size: formValues.size.trim(),
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
      <Home id="order-pizza" 
        values={formValues} 
        update={updateForm} 
        // submit={submitForm}
        />
        {/* <Link to='/'>HOME</Link> */}
      <Switch>

        <Route exact path="/pizza">
          <OrderPizza />
        </Route>

        <Route path='/pizza/success'>
            {/* Route to Success Page */}
            <Success />
          </Route>

        <Route path='/'>
          <Pic pic={url} />
        </Route>


      </Switch>

    </Container>


  );
}

