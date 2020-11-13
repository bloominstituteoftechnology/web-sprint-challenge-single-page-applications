import React, { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import axios from "axios";
import * as yup from "yup";
import formSchema from "./validation/formSchema";
import Home from "./components/Home"

const initialFormValues = {
  name: "",
  size: "",
  sauce: "",
  extraCheese: false,
  italianSausage: false,
  bacon: false,
  blackOlives: false,
}
const initialFormErrors = {
  name: "",
  size: "",
  sauce: "",
}

const initialOrder = [];
const initialDisabled = true;


const App = () => {
	const [orders, setOrders] = useState(initialOrder);
	const [formValues, setFormValues] = useState(initialFormValues);
	const [formErrors, setFormErrors] = useState(initialFormErrors);
	const [disabled, setDisabled] = useState(initialDisabled);

	const postNewOrder = (newOrder) => {
		axios
			.post('https://reqres.in/api/unknown', newOrder)
			.then((res) => {
				setOrders([...orders, res.data]);
				setFormValues(initialFormValues);
			})
			.catch((err) => {
				console.log(err);
			});
	};
  const inputChange = (name, value) => {
    yup
      .reach(formSchema, name) // get to this part of the schema
      // run validate using the value
      .validate(value) // validating this value
      .then(() => {
        // happy path = success and clear error
        setFormErrors({
          ...formErrors,
          [name]: "",
        });
      })
      // if the validation is unsuccessful, we can set the error message
      .catch((err) => {
        setFormErrors({
          ...formErrors,
          // validation error from the schema
          [name]: err.errors[0],
        });
      });
    setFormValues({
      ...formValues,
      [name]: value, // NOT AN ARRAY
    });
  };

  const formSubmit = () => {
    const newOrder = {

    }
    postNewOrder(newOrder)
  }

  useEffect(() => {
    formSchema.isValid(formValues).then((valid) => {
      setDisabled(!valid);
    });
  }, [formValues]);



  return (
    <>
    <Switch>
      <Route path ={'/'}>
        <Home />
      </Route>
      </Switch>
    </>
  );
};
export default App;
