import React, { useState, useEffect } from "react";
import axios from "axios";
import * as yup from "yup";

const formSchema = yup.object().shape({
  name: yup
    .string()
    .required("Name is a required field and must be at least 2 characters"),
});

export default function Form(props) {
  // console.log(props)

  const [formState, setFormState] = useState({
    name: "",
    pizzasizes: "",
    pepporoni: false,
    mushrooms: false,
    greenpeppers: false,
    extracheese: false,
    instructions: "",
  });

  const [errors, setErrors] = useState({
    name: "",
  });

  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

   const validateChange = (e) => {
     yup
       .reach(formSchema, e.target.name)
      .validate(e.target.name)
       .then((valid) => {
       setErrors({ ...errors, [e.target.name]: "" });
      })
       .catch((err) => {
        setErrors({ ...errors, [e.target.name]: err.errors[0] });
      });
    }
  useEffect(() => {
    formSchema.isValid(formState).then((valid) => {
      setIsButtonDisabled(!valid);
    });
   }, [formState]);

  const onChange = (event) => {
    event.persist();
       validateChange(event);
    const { checked, value, name, type } = event.target;
    const ValueToUse = type === "checkbox" ? checked : value;
    setFormState({ ...formState, [name]: ValueToUse });
  };

  const formSubmit = (e) => {
    e.preventDefault();
    console.log("form submited");
    axios
      .post("https://reqres.in/", formState)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };
  return (
    <div>
      <form onSubmit={formSubmit}>
        <div>
          <label>
            <input
              name="name"
              type="text"
              maxLength="30"
              placeholder="name"
              onChange={onChange}
              value={formState.name}
            />
            {errors.name.length > 2 ? <p>{errors.name} </p> : null}
          </label>
        </div>
        <div>
          <label htmlFor="Pizza">
            Choose a Pizza Size:
            <select
              name="pizzasizes"
              value={formState.pizzasizes}
              onChange={onChange}
            >
              <option value="1">Small $10.99</option>
              <option value="2"> Medium $13.99</option>
              <option value="3">Large $15.99</option>
              <option value="4">Extra Large $19.99</option>
            </select>
          </label>
        </div>
        <div>
          <label htmlFor="Toppings">
            <div>Choose your toppings</div>
            <div>Pepporoni</div>
            <input
              type="checkbox"
              name="pepporoni"
              value="pepporoni"
              onChange={onChange}
              checked={formState.pepporoni}
            />
            <div>Mushrooms</div>
            <input
              type="checkbox"
              name="mushrooms"
              value="mushrooms"
              onChange={onChange}
              checked={formState.mushrooms}
            />
            <div>Green Peppers</div>
            <input
              name="greenpeppers"
              type="checkbox"
              value="greenpeppers"
              onChange={onChange}
              checked={formState.greenpeppers}
            />
            <div>Extra Cheese</div>
            <input
              name="extracheese"
              type="checkbox"
              value="extracheese"
              checked={formState.extracheese}
              onChange={onChange}
            />
          </label>
        </div>
        <p>Special instructions</p>
        <input
          name="instructions"
          type="text"
          size="200"
          value={formState.instructions}
          onChange={onChange}
        />

        <div>
          <button disabled={isButtonDisabled}>Place your order</button>
        </div>
      </form>
    </div>
  );
}
