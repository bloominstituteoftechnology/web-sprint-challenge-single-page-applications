/** @format */

import React from "react";

export default function Form({
  values,
  update,
  submit,
  errors,
  inputChange,
}) {
  const onChange = (event) => {
    const { name, value, checked, type } = event.target;
    type === "checkbox" ? update(name, checked) : update(name, value);
    type === "checkbox" ? inputChange(name, checked) : inputChange(name, value)
  };

  const onSubmit = (event) => {
    event.preventDefault();
    submit();
  };

  return (
    <form onSubmit={onSubmit}>
      <label htmlFor="name">
        Name:
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Enter Your Name"
          value={values.name}
          onChange={onChange}
        />
      </label>

      <label htmlFor="size">
        Pizza size:
        <select
          type="text"
          id="size"
          name="size"
          value={values.size}
          onChange={onChange}
        >
          <option value="">Choose pizza size</option>
          <option value="small">Small</option>
          <option value="medium">Medium</option>
          <option value="larg">Larg</option>
        </select>
      </label>
      <h3>choose your toppings</h3>

      <label htmlFor="pepperoni">
        Pepperoni
        <input
          type="checkbox"
          name="pepperoni"
          id="pepperoni"
          checked={values.pepperoni}
          onChange={onChange}
        />
      </label>

      <label htmlFor="hawaiian">
        Hawaiian
        <input
          type="checkbox"
          name="hawaiian"
          id="hawaiian"
          checked={values.hawaiian}
          onChange={onChange}
        />
      </label>

      <label htmlFor="bbq">
      
        BBQ Meatlovers
        <input
          type="checkbox"
          name="bbq"
          id="bbq"
          checked={values.bbq}
          onChange={onChange}
        />
      </label>

      <label htmlFor="chicken">
        Chicken
        <input
          type="checkbox"
          name="chicken"
          id="chicken"
          checked={values.chicken}
          onChange={onChange}
        />
      </label>

      <label htmlFor="textarea">
        special instructions:
        <textarea
          name="textarea"
          id="textarea"
          value={values.textarea}
          onChange={onChange}
        />
      </label>
      <button > Order !</button>
      <div className="errors">
        <div>{errors.name}</div>
        <div>{errors.size}</div>
      </div>
    </form>
  );
}
