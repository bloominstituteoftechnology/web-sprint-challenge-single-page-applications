import React, { useState, useEffect } from "react";
import { Route, Link } from "react-router-dom";
import * as yup from "yup";
import axios from "axios";
import Confirmation from "./Confirmation";

const formSchema = yup.object().shape({
  name: yup
    .string()
    .min(2, "must be at least 2 characters")
    .required("Name is a required field"),
  size: yup
    .string()
    .oneOf(
      ["small", "medium", "large", "extra large", "davian"],
      "Please select a size"
    ),
  topping1: yup.boolean(),
  topping2: yup.boolean(),
  topping3: yup.boolean(),
  topping4: yup.boolean(),
  other: yup.string(),
});

export default function Form() {
  const [buttonDisabled, setButtonDisabled] = useState(true);

  const [formState, setFormState] = useState({
    name: "",
    size: "",
    topping1: false,
    topping2: false,
    topping3: false,
    topping4: false,
    other: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    size: "",
  });

  const [users, setUsers] = useState([]);

  const formSubmit = (e) => {
    e.preventDefault();
    axios
      .post("https://reqres.in/api/users", formState)
      .then((res) => {
        console.log(res.data);
        setUsers(res.data);
        setFormState({
          name: "",
          size: "",
          topping1: false,
          topping2: false,
          topping3: false,
          topping4: false,
          other: "",
        });
      })
      .catch((err) => console.log(err));
  };

  const validateChange = (e) => {
    yup
      .reach(formSchema, e.target.name)
      .validate(
        e.target.type === "checkbox" ? e.target.checked : e.target.value
      )
      .then((valid) => {
        setErrors({
          ...errors,
          [e.target.value]: "",
        });
      })
      .catch((err) => {
        setErrors({
          ...errors,
          [e.target.name]: err.errors[0],
        });
      });
  };

  const inputChange = (e) => {
    e.persist();
    console.log("input changed!", e.target.value);
    const newFormData = {
      ...formState,
      [e.target.name]:
        e.target.type === "checkbox" ? e.target.checked : e.target.value,
    };
    validateChange(e);
    setFormState(newFormData);
  };

  // const formSchema = yup.object().shape({
  //   name: yup
  //     .string()
  //     .min(2, "must be at least 2 characters")
  //     .required("Name is a required field"),
  //   size: yup
  //     .string()
  //     .oneOf(
  //       ["small", "medium", "large", "extra large", "davian"],
  //       "Please select a size"
  //     ),
  //   topping1: yup.string().oneOf([true, false], ""),
  //   topping2: yup.string().oneOf([true, false], ""),
  //   topping3: yup.string().oneOf([true, false], ""),
  //   topping4: yup.string().oneOf([true, false], ""),
  //   other: yup.string(),
  // });

  useEffect(() => {
    formSchema.isValid(formState).then((bool) => {
      console.log(bool);
      setButtonDisabled(!bool);
    });
  }, [formState]);

  return (
    <form onSubmit={formSubmit}>
      <div>
        <label htmlFor="name">
          Name
          <input
            id="name"
            type="text"
            name="name"
            data-cy="name"
            value={formState.name}
            onChange={inputChange}
          />
          {errors.name.length > 0 ? (
            <p className="error">{errors.name}</p>
          ) : null}
        </label>
        <label htmlFor="size">
          Size
          <select
            id="size"
            name="size"
            data-cy="size"
            value={formState.size}
            onChange={inputChange}
          >
            <option>--Please choose a size--</option>
            <option value="small">small</option>
            <option value="medium">medium</option>
            <option value="large">large</option>
            <option value="extra large">extra large</option>
            <option value="davian">davian</option>
          </select>
          {errors.size.length > 0 ? (
            <p className="error">{errors.size}</p>
          ) : null}
        </label>
        <label htmlFor="topping1">
          tomatoes
          <input
            type="checkbox"
            id="topping1"
            name="topping1"
            checked={formState.topping1}
            onChange={inputChange}
          />
        </label>
        <label htmlFor="topping2">
          peppers
          <input
            type="checkbox"
            id="topping2"
            name="topping2"
            checked={formState.topping2}
            onChange={inputChange}
          />
        </label>
        <label htmlFor="topping3">
          onions
          <input
            type="checkbox"
            id="topping3"
            name="topping3"
            checked={formState.topping3}
            onChange={inputChange}
          />
        </label>
        <label htmlFor="topping4">
          basil
          <input
            type="checkbox"
            id="topping4"
            name="topping4"
            checked={formState.topping4}
            onChange={inputChange}
          />
        </label>
        <label htmlFor="other">
          Anything else
          <textarea
            id="other"
            name="other"
            type="text"
            value={formState.other}
            onChange={inputChange}
          />
        </label>

        <button disabled={buttonDisabled} type="submit" data-cy="submit">
          Submit
        </button>
        <pre>{JSON.stringify(users, null, 2)}</pre>
      </div>
    </form>
  );
}
