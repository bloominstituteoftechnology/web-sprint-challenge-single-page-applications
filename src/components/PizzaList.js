import React, { useState } from "react";
import axios from "axios";
import * as yup from "yup";

const formSchema = yup.object().shape({
  name: yup.string().required("Name is a required field"),
});

const PizzaList = () => {
  const [formState, setFormState] = useState({
    name: "",
    size: "",
    special: "",
    sausage: false,
    spinach: false,
    mushroom: false,
    olive: false,
  });

  const [errorState, setErrorState] = useState({
    name: "",
    size: "",
    special: "",
    sausage: "",
    spinach: "",
    mushroom: "",
    olive: "",
  });

  const validate = (e) => {
    yup
      .reach(formSchema, e.target.name)
      .validate(e.target.value)
      .then((valid) => {
        setErrorState({
          ...errorState,
          [e.target.name]: "",
        });
      })
      .catch((error) => {
        console.log(error.errors);
        setErrorState({
          ...errorState,
          [e.target.name]: error.errors[0],
        });
      });
  };

  // onChange function
  const inputChange = (e) => {
    e.persist();
    if (e.target.type === "checkbox") {
      setFormState({
        ...formState,
        [e.target.name]: e.target.checked,
      });
    } else {
      setFormState({
        ...formState,
        [e.target.name]: e.target.value,
      });
    }
    console.log("input changed!", e.target.name);
    if (e.target.name === "name") validate(e);
    let value =
      e.target.type === "checkbox" ? e.target.checked : e.target.value;
    setFormState({ ...formState, [e.target.name]: value });
    // name is the key "name" in the input, not the name of the customer
  };

  // onSubmit
  const formSubmit = (e) => {
    e.preventDefault();
    console.log("form submitted");
    axios
      .post("https://reqres.in/api/users", formState)
      .then((response) => console.log(response))
      .catch((error) => console.log(error));
  };

  return (
    <form onSubmit={formSubmit}>
      <label htmlFor="name">
        Name:
        <input
          id="name"
          type="text"
          name="name"
          value={formState.name}
          onChange={inputChange}
        />
        {errorState.name.length > 2 ? <p>{errorState.name}</p> : null}
      </label>
      <label htmlFor="size">
        What size pizza would you like?
        <select
          name="size"
          id="size"
          value={formState.size}
          onChange={inputChange}
        >
          <option value="small">Small</option>
          <option value="medium">Medium</option>
          <option value="large">Large</option>
          <option value="extra large">Extra Large</option>
          <option value="murica">'Murica</option>
        </select>
      </label>
      <label htmlFor="special">
        Special Instructions
        <textarea
          id="special"
          name="special"
          value={formState.motivation}
          onChange={inputChange}
        />
      </label>
      <label htmlFor="toppings">
        <input
          type="checkbox"
          id="sausage"
          name="sausage"
          checked={formState.sausage}
          onChange={inputChange}
        ></input>
        <label htmlFor="sausage">Sausage</label>
        <input
          type="checkbox"
          name="spinach"
          checked={formState.spinach}
          onChange={inputChange}
        ></input>
        <label htmlFor="spinach">Spinach</label>
        <input
          type="checkbox"
          name="olive"
          checked={formState.olive}
          onChange={inputChange}
        ></input>
        <label htmlFor="olive">Olives</label>
        <input
          type="checkbox"
          name="mushroom"
          checked={formState.mushroom}
          onChange={inputChange}
        ></input>
        <label htmlFor="mushroom">Mushroom</label>
      </label>
      <button type="submit">Place order!</button>
    </form>
  );
};

export default PizzaList;