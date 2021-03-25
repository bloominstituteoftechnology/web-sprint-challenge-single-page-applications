import React from "react";

export default function Form(props) {
  const { values, update, submit } = props;
  const onChange = (evt) => {
    // for each field, passes in name and value
    const target = evt.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    update(name, value); // function from parent App.js
  };
  const onSubmit = (evt) => {
    evt.preventDefault();
    submit();
  };

  return (
    <form className="form container" onSubmit={onSubmit}>
      <div className="form-group inputs">
        <label>
          Your Name: <span></span>
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
          <br></br>
          Pizza Size: <span></span>
          <select name="size" value={values.size} onChange={onChange}>
            <option value="">--Select Size--</option>
            <option value="small">Small</option>
            <option value="medium">Medium</option>
            <option value="large">Large</option>
          </select>
        </label>

        <label>
          <br></br>
          Meat Topping?
          <input
            type="checkbox"
            name="checkMeat"
            checked={values.checkMeat}
            onChange={onChange}
          />
        </label>
      </div>
      <br></br>
      <div className="submit">
        <button>Submit!</button>
      </div>
    </form>
  );
}
