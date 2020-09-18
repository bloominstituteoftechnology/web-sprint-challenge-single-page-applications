import React from "react";

export default function Form(values, update, submit, disabled, errors) {
  const onChange = (evt) => {
    // passes in the name of the form, and the value of the form
    const target = evt.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    update(name, value); // function from parent component App.js
  };
  const onSubmit = (evt) => {
    evt.preventDefault();
    submit();
  };

  return (
    <form className="form container" onSubmit={onSubmit}>
      <div className="form-group inputs">
        <label>
          {" "}
          Name
          <input
            type="text"
            name="name"
            onChange={onChange}
            value={values.name}
            placeholder="Type a Name"
            maxLength="30"
          />
        </label>

        <label>
          {" "}
          Pizza Size
          <select name="size" value={values.size} onChange={onChange}>
            <option value="">-- Select Size --</option>
            <option value="small">Small</option>
            <option value="medium">Medium</option>
            <option value="large">Large</option>
            <option value="xlarge">Extra Large</option>
          </select>
        </label>

        {/* <label>
          {" "}
          Toppings
          <input
            type="checkbox"
            name="cheese"
            checked={values.cheese}
            onChange={onChange}
          />
          <input
            type="checkbox"
            name="meat"
            checked={values.meat}
            onChange={onChange}
          />
          <input
            type="checkbox"
            name="vegetable"
            checked={values.vegetable}
            onChange={onChange}
          />
          <input
            type="checkbox"
            name="fungus"
            checked={values.fungus}
            onChange={onChange}
          />
        </label> */}
        <div className="errors">
          <div>{errors.name}</div>
          <div>{errors.size}</div>
        </div>

        <div className="submit">
          <button disabled={disabled}>Submit!</button>
        </div>
      </div>
    </form>
  );
}
