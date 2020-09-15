import React, {useState} from "react";
import {BrowserRouter as Router, Route} from "react-router-dom";
import axios from "axios";
import * as Yup from "yup";

import Header from "./components/Header";
import Home from "./components/Home";
import Form from "./components/Form";

const App = () => {
  const [pizzaOrder, setPizzaOrder] = useState({
    name: "",
    size: "small",
    pepperoni: false,
    ham: false,
    olives: false,
    onion: false,
    specialInstructions: "",
  });
  
  const [errors, setErrors] = useState({

  });

  const onInputChange = e =>{
    e.persist();
    let value = e.target.value;
    Yup.reach(formSchema, e.target.name)
    .validate(value)
    .then(valid=>{
      setErrors({
        ...errors,
        [e.target.name]: ""
      })
    })
    .catch(err=>{
      setErrors({
        ...errors,
        [e.target.name]: err.errors[0]
      })
    })
    if(e.target.type === "checkbox") value = e.target.checked;
    setPizzaOrder({
      ...pizzaOrder,
      [e.target.name]: value
    });
  }

  const formSchema = Yup.object().shape({
    name: Yup
      .string()
      .required("Name is required")
      .min(2, "Name must be longer than 2 characters"),
    pepperoni: Yup
      .bool(),
    ham: Yup
      .bool(),
    olives: Yup
      .bool(),
    onion: Yup
      .bool(),
    size: Yup
      .string()
      .required("Size is required"),
    specialInstructions: Yup
      .string()
  });

  const submitOrder = e => {
    e.preventDefault();
    axios.post("https://reqres.in/api/pizza", pizzaOrder).then(data=>{
      console.log(data);
      setPizzaOrder({
        name: "",
        size: "small",
        pepperoni: false,
        ham: false,
        olives: false,
        onion: false,
        specialInstructions: "",
      })
    }).catch(err=>{
      console.log(err);
    })
  }
  return (
    <>
      <Header/>
      <Router>
        <Route exact path="/" component={Home}/>
        <Route path="/pizza">
          <Form errors={errors} submit={submitOrder} pizzaOrder={pizzaOrder} onInputChange={onInputChange}/>
        </Route>
     </Router>
    </>
  );
};
export default App;
