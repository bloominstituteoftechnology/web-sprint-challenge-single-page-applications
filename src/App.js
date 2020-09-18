import React, { useState } from "react";
// import { Route, Link, Switch } from "react-router-dom";
// import * as yup from "yup";

import Home from "./Home";
import Form from "./Form";
import schema from "./formSchema";

const initialFormValues = {
  name: "",
  size: "",
};

const initialOrders = [];

function App() {
  // SLICES OF STATE
  const [orders, setOrders] = useState(initialOrders); //array of orders objects
  const [formValues, setFormValues] = useState(initialFormValues); // object

  // HELPER FUNCTIONS
  // const updateForm = (inputName, inputValue) => {
  //   setFormValues({ ...formValues, [inputName]: inputValue });
  // };

  const inputChange = (name, value) => {
    // validate(name, value);
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const submitForm = () => {
    const newOrder = {
      name: formValues.name,
      size: formValues.size,
    };

    setOrders([...orders, newOrder]);

    setFormValues(initialFormValues);
  };

  return (
    <div className="Main">
      <nav>
        <h1>Lambda Eats</h1>
        {/* <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/pizza">Make Your Pizza</Link>
        </div> */}
      </nav>

      {/* <Switch>
        <Route path="/pizza"> */}
      <Form values={formValues} update={inputChange} submit={submitForm} />
      {/* </Route> */}

      {/* <Route path="/"> */}
      <Home />
      {/* </Route>
      </Switch> */}
    </div>
  );
}

export default App;
