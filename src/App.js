import React, { useState, useEffect } from "react";
import { Route, Link, Switch } from "react-router-dom";

//import Order from "./Order";
import Form from "./Form";

const initialFormValues = {
  name: "",
  size: "",
  specialInst: "",
  checkCheese: false,
  checkMeat: false,
  checkVeg: false,
  checkMush: false,
};

const initialOrders = [];

const App = () => {
  // State Management Set-Up
  const [orders, setOrders] = useState(initialOrders); // array of objects (orders)
  const [formValues, setFormValues] = useState(initialFormValues); // object

  // Helper Functions
  const inputChange = (orderName, orderValue) => {
    setFormValues({
      ...formValues,
      [orderName]: orderValue,
    });
  };

  const submitForm = () => {
    const newOrder = {
      name: formValues.name,
      size: formValues.size,
      specialInst: formValues.specialInst,
      checkCheese: formValues.checkCheese,
      checkMeat: formValues.checkMeat,
      checkVeg: formValues.checkVeg,
      checkMush: formValues.checkMush,
    };

    setOrders([...orders, newOrder]);
    setFormValues(initialFormValues);
  };

  return (
    <>
      <h1>Lambda Eats</h1>
      <div>
        <h3>
          Make a New Order<br></br>
        </h3>
        <Form values={formValues} update={inputChange} submit={submitForm} />
      </div>
      <div>
        <h3>
          <br></br>Current Orders<br></br>
        </h3>
      </div>
    </>
  );
};
export default App;
