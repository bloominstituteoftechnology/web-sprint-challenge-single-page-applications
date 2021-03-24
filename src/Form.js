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
          <p>Fill in these fields</p>
          <input
            type="text"
            name="name"
            onChange={onChange}
            value={values.name}
            placeholder="Type a Name"
            maxLength="30"
          />
        </label>
      </div>
      <div className="submit">
        <button>Submit!</button>
      </div>
    </form>
  );
}
