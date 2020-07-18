import React, { useState, useEffect } from "react";
import Input from "./Input";
import * as yup from "yup";
import axios from 'axios';

export default function Form(props) {
  // managing state for our form inputs
  const defaultState = {
    name: "",
    size: "",
    sauce: "",
    toppings: "",
    specialInstructions: ""
  };

  const [formState, setFormState] = useState(defaultState);
  // all errors need to be a string so the error messages can be displayed
  const [errors, setErrors] = useState({ ...defaultState});
  const [buttonDisabled, setButtonDisabled] = useState(true);

  // formState schema
  let formSchema = yup.object().shape({
    name: yup.string().required("Please provide name."),
    size: yup.string().required("Please choose."),
    sauce: yup.string().required("Please choose."),
    toppings: yup.string().required("Please choose."),
    specialInstructions: yup.string().required("If none, type 'no'.")
  });

  useEffect(() => {
    formSchema.isValid(formState).then(valid => setButtonDisabled(!valid));
  }, [formState]);

  // onSubmit function
  const formSubmit = e => {
    e.preventDefault();
    console.log("form submitted!");
    axios
      .post("https://reqres.in/api/users", formState)
      .then((res) => {
        console.log(`form submit success! "${res.data.name}" has been added!`);
        console.log(res.data);
        props.setOrders([...props.orders, res.data]);
      })
      .catch((err) => console.log(err));
  };

  // validate whether value meets schema
  const validateChange = e => {
    e.persist();
    // reach allows us to check a specific value of the schema
    yup
      .reach(formSchema, e.target.name)
      .validate(e.target.value)
      .then(valid =>
        setErrors({
          ...errors,
          [e.target.name]: ""
        })
      )
      .catch(error =>
        setErrors({
          ...errors,
          [e.target.name]: error.errors[0]
        })
      );
  };

  // onChange function
  const inputChange = e => {
    // ternary operator to determine the form value
    // console.log(e.target.type);
    const value = e.target.type === "checkbox" || "radio" ? e.target.checked : e.target.value;
    setFormState({
      ...formState,
      [e.target.name]: value
    });
    validateChange(e);
  };

  return (
    <form onSubmit={formSubmit}>
      <Input
        type="text"
        name="name"
        onChange={inputChange}
        value={formState.name}
        placeholder="Name"
        errors={errors}
      />
      <div className="pizza-size">
        <p>Choose a Size</p>
        <label htmlFor="size">
          <select name="size" onChange={inputChange}>
            <option value="Small">Small</option>
            <option value="Medium">Medium</option>
            <option value="Large">Large</option>
          </select>
        </label>
      </div>
      <div className="pizza-sauce">
        <p>Choose a Sauce</p>
        <label htmlFor="sauce">
          <select name="sauce" onChange={inputChange}>
            <option value="Original Red">Original Red</option>
            <option value="Garlic Ranch">Garlic Ranch</option>
            <option value="BBQ Sauce">BBQ Sauce</option>
          </select>
        </label>
      </div>
      <div className="pizza-toppings">
        <p>Choose your toppings</p>
        <Input
          type="checkbox"
          name="toppings"
          onChange={inputChange}
          value={formState.toppings}
          label="Pepperoni"
          errors={errors}
        />
        <Input
          type="checkbox"
          name="toppings"
          onChange={inputChange}
          value={formState.toppings}
          label="Sausage"
          errors={errors}
        />
        <Input
          type="checkbox"
          name="toppings"
          onChange={inputChange}
          value={formState.toppings}
          label="Mushroom"
          errors={errors}
        />
        <Input
          type="checkbox"
          name="toppings"
          onChange={inputChange}
          value={formState.toppings}
          label="Extra Cheese"
          errors={errors}
        />
      </div>
      <div className="special-instructions">
        <p>Special Instructions?</p>
        <Input
          type="text"
          name="specialInstructions"
          onChange={inputChange}
          value={formState.specialInstructions}
          errors={errors}
        />
      </div>
      <button disabled={buttonDisabled}>
        <p>Order total:</p>
        <p>$17.65</p>
      </button>
    </form>
  );
}
// name: "",
// size: "",
// sauce: "",
// toppings: "",
// specialInstructions: ""