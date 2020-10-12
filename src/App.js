import React, { useState} from "react";
import { Link, Route } from "react-router-dom";
import Home from "./components/Home";
import PizzaForm from "./components/PizzaForm";
import PizzaCard from "./components/PizzaCard";
import * as yup from "yup";
import formSchema from "./components/formSchema";

const formInitialValue = {
  name: "",
  size: "",
  pepperoni: false,
  hawaiian: false,
  bbq: false,
  chicken: false,
  textarea: "",
};

const initialFormErrors = {
  name: "",
  size: "",
};

const pizzaInitialValue = [];


const App = () => {
  const [formValue, SetFormValue] = useState(formInitialValue);
  const [pizza, setPizza] = useState(pizzaInitialValue);
  const [formErrors, setFormErrors] = useState(initialFormErrors);


  const pizzaOnChange = (name, value) => {
    SetFormValue({ ...formValue, [name]: value });
  };

  const pizzaSubmit = () => {
    setPizza([...pizza, formValue]);
    SetFormValue(formInitialValue);
  };

  const inputChange = (name, value) => {
    yup
      .reach(formSchema, name)
      .validate(value)
    
      .then((valid) => {
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

    SetFormValue({
      ...formValue,
      [name]: value,
    });
  };

return (

  
  <div className="App">
      <Link to="/">HOME</Link>

      <Route exact path="/">
        <Home />
        <Link to="/pizza">
          <button>Create Your Pizza</button>
        </Link>
      </Route>

      <Route path="/pizza">
        <PizzaForm
          values={formValue}
          update={pizzaOnChange}
          submit={pizzaSubmit}
          errors={formErrors}
          inputChange={inputChange}
        />

        {pizza.map((order) => (
          <PizzaCard confirmedOrders={order} key={order.name} />
        ))}
      </Route>
    </div>
  );
};
export default App;