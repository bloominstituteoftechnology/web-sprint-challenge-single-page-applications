import { Route, Link, Switch } from "react-router-dom";
import React, { useState, useEffect } from "react";
import axios from 'axios';
import * as yup from yup;
import Home from "./home";
import Pizza from "./components/pizza.js";

const initialFormValues = {
  name: '',
  size: '',
  chicken: '',
  mushroom: '',
  bacon: '',
  sausage: '',
  specInstruct: '',
}

const initialFormErrors = {
  size: '',
  sauce:'',
}


const App = () => {
  const [pizza, setPizza] = useState([]);
  const [formValues, setFormValues] = useState(initialFormValues);
  const [formErrors, setFormErrors] = useState(initialFormErrors)

  const postNewPizza = (newPizza) => {
    //post new pizza to the DOM - check thursday assignment
  }

  const formChange = (name, value) => {
    yup.reach(schema, name)
      .validate(value)
      .then(() => {
        setFormErrors({
          ...formErrors, [name]: err.errors[0]
        })
      })
    
    const formSubmit = () => {
      const newPizza = {
        name: formValues.name.trim(),
        size: formValues.size.trim(),
        toppings: ["chicken", "mushroom", "bacon", "sausage"],
        instructions: formValues.specInstruct.trim(),
      }
      postNewPizza(newPizza)
    }
  }
  return (
    <div className="App">
      <nav>
        <h1 className='nav-header'>Lambda Eats</h1>
        <div className='nav-links'>
          <Link to='/'>Home</Link>
          <Link to='/pizza'>Order Pizza</Link>
        </div>
        </nav>
          <Switch>
            <Route path='/pizza'>
              <PizzaForm
                values={formValues}
                change={formChange}
                submit={formSubmit}
                errors={formErrors}
                />
            </Route>
            <Route path='/'>
              <Home/>
            </Route>
          </Switch>
      {pizza.map((pizza) => {
        return <Pizza key={pizza.id} details={piza} />;
        })}
      </div>
  );
};
export default App;
