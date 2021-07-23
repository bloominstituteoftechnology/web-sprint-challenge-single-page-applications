import React, { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./components/Header";
import styled from "styled-components";
import Pic from "./components/Pic";
import Form from "./form";
import * as yup from "yup";
import schema from "./validations/formSchema";
import Success from "./components/success";
import axios from "axios";
import Pizza from "./components/Pizza";

const Container = styled.div`
  * {
    padding: 0px;
    margin: 0px;
    font-family: san-serif;
    text-align: center;
    color: dodgerblue;
  }
`;

const initialFormValues = {
  //Text
  username: "",
  special: "",
  //dropdown
  size: "",
  //checkboxes
  ham: false,
  olives: false,
  onions: false,
  cheese: false,
};

const initialFormErrors = {
  username: "",
  special: "",
  size: "",
};
const pizzaList = [];
const initialDisabled = true;

export default function App() {
  const [url, setUrl] = useState("https://buff.ly/2UybmBQ");
  const [pizzas, setPizzas] = useState(pizzaList);
  const [formValues, setFormValues] = useState(initialFormValues); // object
  const [formErrors, setFormErrors] = useState(initialFormErrors); // object
  const [disabled, setDisabled] = useState(initialDisabled); // boolean

  const orderSubmitted = (newpizza) => {
    return setPizzas(formValues)
  }
  // const getPizzas = () => {
  //   axios
  //     .get("https://reqres.in/api/orders")
  //     .then((res) => {
  //       setPizzas(res.data.data);
  //       console.log(`HERE IS setPizzas`, setPizzas);
  //     })
  //     .catch((err) => {
  //       debugger;
  //       console.log(err);
  //     });
  // };

  const postNewPizza = (newPizza) => {
    axios
      .post("https://reqres.in/api/orders", newPizza)
      .then((res) => {
        setPizzas([...pizzas, res.data]);
        setFormValues(initialFormValues);
        console.log(`HERE is postNewPizza`, postNewPizza);
      })
      .catch((err) => {
        debugger;
        console.log(err);
      })
  };

  // VALIDATIONS
  const validate = (name, value) => {
    yup
      .reach(schema, name)
      .validate(value)
      .then((valid) => {
        //eslint-disable-line
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
  };

  //CHANGE HANDLER

  const inputChange = (name, value) => {
    validate(name, value);
    setFormValues({ ...formValues, [name]: value });
  };

  //SUBMIT HANDLER
  const formSubmit = () => {
    const newPizza = {
      username: formValues.username.trim(),
      special: formValues.special.trim(),
      size: formValues.size.trim(),
      // toppings: ["ham", "olives", "onions", "cheese"].filter(
      //   (tops) => formValues[tops]),
      ham: formValues.ham,
      olives: formValues.olives,
      onions: formValues.onions,
      cheese: formValues.cheese,
    }
    postNewPizza(newPizza);
  }

  // useEffect(() => {
  //   // getPizzas();
  // }, [])
  // useEffect(() => {}, []);

  useEffect(() => {
    schema.isValid(formValues).then((valid) => {
      //  setDisabled(!valid);
    });
  }, [formValues]);

  return (
    <Container>
      <Home
        id="order-pizza"
      // values={formValues}
      // update={updateForm}
      // submit={submitForm}
      />
      {/* <Link to='/'>HOME</Link> */}
      <Switch>
        <Route path="/pizza/success">
          {/* Route to Success Page */}
          <Success
            change={inputChange}
            values={formValues}
            submit={formSubmit}
            orders={pizzas}
          />
        </Route>
        {/* may need exact  */}
        <Route path="/pizza">
          <Form
            values={formValues}
            change={inputChange}
            submit={formSubmit}
            // disabled={disabled}
            errors={formErrors}
          />
        </Route>

        <Route path="/">
          <Pic pic={url} />
        </Route>
      </Switch>
      {/* {pizzas.map((user) => {
        return <Pizza key={user.id} details={user} />;
      })} */}
    </Container>
  );
}
