import axios from "axios";
import React, { useState, useEffect } from "react";

const initialFormValues = {
  name: "", //text
  size: "", //dropdown
  pepperoni: false, // check boxes
  pineapple: false,
  jalepeno: false,
  bellpeppers: false,
  instructions: "", // text
};

const Form = ({ setPost }) => {
  const [order, setOrder] = useState([]);
  const [formValues, setFormValues] = useState(initialFormValues);

  const changeHandler = (evt) => {
    setFormValues({ ...formValues, [evt.target.name]: evt.target.value });
  };

  const submitHandler = (evt) => {
    evt.preventDefault();
    // submit();
    const newOrder = {
      name: formValues.name.trim(),
      size: formValues.size.trim(),
      toppings: ["pepperoni", "pineapple", "jalepeno", "peppers"].filter(
        (top) => formValues[top]
      ),

      instructions: formValues.instructions.trim(),
    };
  };
  return (
    <>
      <form onSubmit={submitHandler}>
        <input
          name="name"
          type="text"
          value={formValues.name}
          onChange={changeHandler}
          placeholder="Your Name Here!"
        ></input>

        <select name="size" value={formValues.size} onChange={changeHandler}>
          <option value="">Select Size</option>
          <option value="medium">Medium</option>
          <option value="large">Large</option>
        </select>

        <label>
          Pepperoni
          <input
            type="checkbox"
            name="pepperoni"
            checked={formValues.pepperoni}
            onChange={changeHandler}
          />
        </label>

        <label>
          Pineapple
          <input
            type="checkbox"
            name="pineapple"
            checked={formValues.pineapple}
            onChange={changeHandler}
          />
        </label>

        <label>
          Jalepeno
          <input
            type="checkbox"
            name="jalepeno"
            checked={formValues.jalepeno}
            onChange={changeHandler}
          />
        </label>

        <label>
          Bell Peppers
          <input
            type="checkbox"
            name="bellpeppers"
            checked={formValues.bellpeppers}
            onChange={changeHandler}
          />
        </label>

        <input
          name="instructions"
          type="text"
          value={formValues.instructions}
          onChange={changeHandler}
          placeholder="Special Instructions Here!"
        ></input>

        <button>Submit Order</button>
      </form>
    </>
  );
};

export default Form;
