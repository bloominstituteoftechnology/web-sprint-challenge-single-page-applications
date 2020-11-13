import React from "react";

const Form = (props) => {
  const {
    values,
    onInputChange,
    onCheckboxChange,
    onSubmit,
    errors,
    disabled,
  } = props;

  return (
    <>
      <h2>Build Your Own Pizza</h2>
      <div className="bg-img">
        <form className="order container" onSubmit={onSubmit}>
          <label>
            Name:&nbsp;
            <input
              type="text"
              placeholder="name"
              maxLength="30"
              name="first_name"
              value={values.first_name}
              onChange={onInputChange}
            />
          </label>
          <label>
            Size:&nbsp;
            <select name="size" value={values.size} onChange={onInputChange}>
              <option value=""> Select a Size</option>
              <option value="Small">Small</option>
              <option value="Medium">Medium</option>
              <option value="Large">Large</option>
            </select>
          </label>
          <div className="form-group checkboxes">
            <label>
              Pepperoni&nbsp;
              <input
                type="checkbox"
                name="pepperoni"
                checked={values.toppings.pepperoni}
                onChange={onCheckboxChange}
              />
            </label>
            <label>
              Chicken&nbsp;
              <input
                type="checkbox"
                name="chicken"
                checked={values.toppings.chicken}
                onChange={onCheckboxChange}
              />
            </label>
            <label>
              Onions&nbsp;
              <input
                type="checkbox"
                name="onions"
                checked={values.toppings.onions}
                onChange={onCheckboxChange}
              />
            </label>
            <label>
              Tomatoes&nbsp;
              <input
                type="checkbox"
                name="tomatoes"
                checked={values.toppings.tomatoes}
                onChange={onCheckboxChange}
              />
            </label>
          </div>
          <label>
            Additional Instructions:&nbsp;
            <input
              type="text"
              placeholder="instructions"
              maxLength="200"
              name="instructions"
              value={values.instructions}
              onChange={onInputChange}
            />
          </label>
          <div className="errors">{errors.first_name}</div>
          <button disabled={disabled} className="submit">
            Submit
          </button>
        </form>
      </div>
    </>
  );
};
export default Form;
