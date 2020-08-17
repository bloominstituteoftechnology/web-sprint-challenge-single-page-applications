import React, { useState, useEffect } from "react";
import * as yup from "yup";

const formSchema = yup.object().shape({
  name: yup
    .string()
    .min(2, "must be at least 2 characters")
    .required("Name is a required field"),
});

export default function Form() {
  const [buttonDisabled, setButtonDisabled] = useState(true);

  const [formState, setFormState] = useState({
    name: "",
    size: "",
    toppings1: false,
    toppings2: false,
    toppings3: false,
    toppings4: false,
    other: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    size: "",
    toppings1: false,
    toppings2: false,
    toppings3: false,
    toppings4: false,
    other: "",
  });

  const [users, setUsers] = useState();

  useEffect(() => {
    formSchema.isValid(formState).then((bool) => {
      console.log(bool);
      setButtonDisabled(!bool);
    });
  }, [formState]);

  const validateChange = (e) => {
    yup
      .reach(formSchema, e.target.name)
      .validate(e.target.name === "terms" ? e.target.checked : e.target.value)
      .then((valid) => {
        setErrors({
          ...errors,
          [e.target.name]: "",
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
    const newFormData = {
      ...formState,
      [e.target.name]:
        e.target.type === "checkbox" ? e.target.checked : e.target.value,
    };

    validateChange(e);
    setFormState(newFormData);
  };
  return (
    <div>
      <label htmlFor="name">
        Name
        <input id="name" type="text" name="name" data-cy="name" />
      </label>
      <label htmlfor="size">
        Size
        <select id="size" name="size" data-cy="size">
          <option>--Please choose a size--</option>
          <option>small</option>
          <option>medium</option>
          <option>large</option>
          <option>extra large</option>
          <option>davian</option>
        </select>
      </label>
      <label htmlFor="toppings">
        tomatoes
        <input type="checkbox" id="topping1" name="topping1" />
        peppers
        <input type="checkbox" id="topping2" name="topping2" />
        onions
        <input type="checkbox" id="topping3" name="topping3" />
        basil
        <input type="checkbox" id="topping4" name="topping4" />
      </label>
      <label htmlFor="other">
        Anything else
        <textarea id="other" name="other" type="text" />
      </label>
    </div>
  );
}
