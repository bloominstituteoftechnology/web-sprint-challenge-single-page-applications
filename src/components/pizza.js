import React from "react";

export default function pizza(props) {
  const { values, change, submit, errors } = props;

  const onSubmit = (event) => {
    event.preventDeafualt();
    submit();
  };

  const onChange = (event) => {
    const { name, value, checked, type } = event.target;
    const valueToUse = type === "checkbox" ? checked : value;
    change(name, valueToUse);
  };

  return (
    <form className="form container" onSubmit={onSubmit}>
      <div className="form-group submit">
        <h2>User Onboarding</h2>

        <div className="errors">
          <div>{errors.name}</div>
          <div>{errors.email}</div>
          <div>{errors.password}</div>
          <div>{errors.terms}</div>
        </div>
      </div>

      <div className="form-group inputs">
        <h4>Information</h4>

        {/* ////////// TEXT INPUTS ////////// */}

        <label>
          Name
          <input
            value={values.name}
            onChange={onChange}
            name="name"
            type="text"
          />
        </label>

        <label>
          Size
          <select
            value={values.size}
            onChange={onChange}
            name="size"
            type="text"
          >
            <option value="">--Select Size--</option>
            <option value="9'">9'</option>
            <option value="16'">16'</option>
          </select>
        </label>

        {/* ////////// CHECKBOXES ////////// */}
        <label>
          Chicken:
          <input
            type="checkbox"
            name="chicken"
            onChange={onChange}
            checked={values.chicken}
          />
        </label>

        <label>
          Mushroom:
          <input
            type="checkbox"
            name="mushroom"
            onChange={onChange}
            checked={values.mushroom}
          />
        </label>

        <label>
          Bacon:
          <input
            type="checkbox"
            name="bacon"
            onChange={onChange}
            checked={values.bacon}
          />
        </label>
        <label>
          Sausage:
          <input
            type="checkbox"
            name="sausage"
            onChange={onChange}
            checked={values.sausage}
          />
        </label>
        {/* input special instructions */}
        <label>
          Special Instructions:
          <input
            value={values.specInsturct}
            onChange={onChange}
            name="specInstruct"
            type="text"
          />
        </label>
      </div>
      <button>submit</button>
    </form>
  );
}
