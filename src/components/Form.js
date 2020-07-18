import React, { useState, useEffect } from "react";
import Input from "./Input";
import * as yup from "yup";
import axios from 'axios';

export default function Form() {
  // managing state for our form inputs
  const defaultState = {
    name: "",
    size: "",
    sauce: "",
    toppings: "",
    substitute: false,
    specialInstructions: "",
    quantity: ""
  };

  const [formState, setFormState] = useState(defaultState);
  // all errors need to be a string so the error messages can be displayed
  const [errors, setErrors] = useState({ ...defaultState, substitute: "" });
  const [buttonDisabled, setButtonDisabled] = useState(true);

  // formState schema
  let formSchema = yup.object().shape({
    name: yup.string().required("Please provide name."),
    size: yup.string().required("Please choose."),
    sauce: yup.string().required("Please choose."),
    toppings: yup.string().required("Please choose."),
    substitute: yup.boolean().oneOf([true], "Please agree to our Terms & Conditions."),
    specialInstructions: yup.string(),
    quantity: yup.string()
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
      .then(() => console.log("form submitted success!"))
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
    const value =
      e.target.type === "checkbox" ? e.target.checked : e.target.value;
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
        <Input
          type="radio"
          name="sauce"
          onChange={inputChange}
          value={formState.sauce}
          label="Original Red"
          errors={errors}
        />
      </div>
    </form>
  );
}
// name: "",
// size: "",
// toppings: "",
// substitute: false,
// specialInstructions: "",
// quantity: ""