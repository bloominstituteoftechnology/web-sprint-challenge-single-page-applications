import React, {useState, useEffect} from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Form from "./Form";
import * as yup from "yup";
import schema from "./validation/formSchema";
import axios from 'axios'

const initialFormValues = {

  name: "",
  size: "",
  sauce: "",
  specialInstructions:"",
  glutenFree: false,
  pepperoni: false,
  sausage: false,
  canadianBacon: false,
  chicken:false,
  olives:false,
  peppers:false,
};
const initialFormErrors = {
  name: "",
  size: "",
  sauce: "",
};

const initialDisabled = true;

const App = () => {

const [formValues, setFormValues] = useState(initialFormValues); // object
const [formErrors, setFormErrors] = useState(initialFormErrors); // object
const [disabled, setDisabled] = useState(initialDisabled); // boolean

  const inputChange = (name, value) => {
    console.log(name, value)
    yup
      .reach(schema, name)
      .validate(value)
      .then(() => {
        setFormErrors({
          ...formErrors,[name]: "",
        });
      })

      .catch((err) => {
        setFormErrors({
          ...formErrors,[name]: err.errors[0],
        });
      });

    setFormValues({
      ...formValues,[name]: value, 
    });
  };


  const formSubmit = () => {
    const newOrder = {
      name: formValues.name.trim(),
      size: formValues.size.trim(),
      sauce: formValues.sauce.trim(),
      specialInstructions: formValues.specialInstructions.trim(),
      glutenFree: formValues.glutenFree,
      toppings: ["peperoni", "sausage", "canadianBacon", "chicken", "olives","peppers"].filter(
        (hobby) => formValues[hobby]
      ),
    };
    postNewOrder(newOrder)
  };

  const postNewOrder = (newOrder) => {
    axios
      .post("https://reqres.in/api/orders", newOrder)
      .then((res) => {
        console.log(res.data)
        setFormValues(initialFormValues);
      })
      .catch((err) => {
        console.log(err);
        debugger;
      });
  };
  useEffect(() => {
    schema.isValid(formValues).then((valid) => {
      console.log("valid", valid)
      setDisabled(!valid);
    });
  }, [formValues]);



  return (
    <Router>
      <nav>
        <h1>Lambda Eats</h1>
        <div>
          <Link to="/">Home</Link>
          <Link to="/help">Help</Link>
        </div>
      </nav>

      <Route exact path="/pizza">
        <Form 
           values={formValues}
           change={inputChange}
           submit={formSubmit}
           disabled={disabled}
           errors={formErrors}
        />
      </Route>

      <Route exact path="/">
        <div id="hero-pizza">
          <Link to="/pizza">
            <button>Pizza?</button>
          </Link>
        </div>
      </Route>

    </Router>
  );
};
export default App;
