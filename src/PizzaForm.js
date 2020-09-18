import React from "react";
import { Link } from "react-router-dom";

export default function PizzaForm(props) {
  const { values, update, submit } = props;

  const onChange = (evt) => {
    const { name, value } = evt.target;
    update(name, value);
  };

  const onSubmit = (evt) => {
    evt.preventDefault();
    submit();
  };

  return (
    <form className="form container" onSubmit={onSubmit}>

         {/* ////////// TEXT INPUTS ////////// */}

      <div className="form-group inputs">

        <label>
          Name
          <input
            type="text"
            name="name"
            onChange={onChange}
            value={values.name}
            placeholder="type a name"
            maxLength="30"
          />
        </label>

        <label>
          Special Instructions
          <input
            type="text"
            name="instructions"
            onChange={onChange}
            value={values.instructions}
            placeholder="type instructions"
            maxLength="30"
          />
        </label>

        {/* ////////// DROPDOWN ////////// */}
      
        <label>
          Pizza Size
          <select name="size" value={values.size} onChange={onChange}>
            <option value="">-- select role --</option>
            <option value="large">Large</option>
            <option value="medium">Medium</option>
            <option value="small">Small</option>
          </select>
        </label>

        {/* ////////// CHECKLIST ////////// */}
        <h4>Toppings</h4>

        <label>
          Pepperoni
          <input
            type="checkbox"
            name="pepperoni"
            checked={values.pepperoni}
            onChange={onChange}
          />
        </label>

        <label>
          Olives
          <input
            type="checkbox"
            name="olives"
            checked={values.olives}
            onChange={onChange}
          />
        </label>

        <label>
          Tomatoes
          <input
            type="checkbox"
            name="tomatoes"
            checked={values.tomatoes}
            onChange={onChange}
          />
        </label>

        <label>
          Spinach
          <input
            type="checkbox"
            name="spinach"
            checked={values.spinach}
            onChange={onChange}
          />
        </label>

        <div className="submit">
          <button disabled={!values.name || !values.instructions || !values.size}>
            Add to Order
          </button>
        </div>
      </div>
    </form>
  );
}