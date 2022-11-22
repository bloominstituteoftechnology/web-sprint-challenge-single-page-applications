import React, { useState, useEffect} from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./Components/Home";
import Form from "./Components/Form";
import axios from "axios";
import { reach } from 'yup'
import schema from './Components/schema'
import Confirm from "./Components/Confirm";


const freshForm = {
  name:'',
  size:'',
  special:'',
  bacon: false,
  sausage: false,
  meatballs: false,
  peperoni: false
};
const initialErrors = {
  name: "",
  size:"",
  special:""
};
const initialPizza = [];
const initialDisabled = true;

const App = () => {
  const [pizza, setPizza] = useState(initialPizza);
  const [formValues, setformValues] = useState(freshForm);
  const [errors, setErrors] = useState(initialErrors);
  const [disabled, setDisabled] = useState(initialDisabled)
  
  const postNewPizza = newPizza => {
    axios.post(`https://reqres.in/api/orders`, newPizza)
    .then(res => {
      setPizza([res.data, ...pizza])
    })
    .catch(err => {
      console.log(err)
    })
    .finally(()=>{
      setformValues(freshForm)
    })
  }

  const validate = (name, value) => {
    reach(schema, name)
    .validate(value)
    .then((err)=> setErrors({...errors, [name]: err.errors[0]}))
  }

  const handleChange = (name, value) => {
    validate(name,value)
    setformValues({
      ...formValues, [name]:value
    })
  }
  useEffect(()=>{
    schema.isvalid(formValues).then(valid => setDisabled(!valid),[formValues])
  })

  const submitForm = () => {
    const newPizza = {
      name: formValues.name.trim(),
      size: formValues.size.trim(),
      special: formValues.special.trim(),
      toppings: ['bacon','peperoni','sausage','meatballs'].filter(piizza => formValues[pizza])
    }
    postNewPizza(newPizza)
  }

  return (
    <>
      <h1>Bloomtech Eats!</h1>
      <div className="app-container">
        <Router>
          <a className="space"><Link to="/">Home</Link></a>
          <a className="space"><Link to="/pizza">Pizza</Link></a>
          <a className="space"><Link to="/confirm">Confirm</Link></a>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/pizza">
              <Form
              value={formValues}
              change={handleChange}
              submit={submitForm}
              disabled={disabled}
              errors={errors}
              />
              <Route exact path="/confirm"></Route>{pizza.map(confirm => {
                return (
                  <Confirm key={confirm.id} details={confirm} />
                )
              })}
            </Route>
          </Switch>
        </Router>
      </div>
    </>
  );
};
export default App;
