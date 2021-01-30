import React, { useState, useEffect } from "react";
import axios from "axios";
import * as yup from "yup";
// import { Form, Row, Col } from "reactstrap";

const PizzaForm = () => {
  const [post, setPost] = useState([]);

  const [formState, setFormState] = useState({
    name: "",
    size: "",
    pepperoni: "",
    sausage: "",
    olives: "",
    mushrooms: "",
    instructions: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    size: "",
    pepperoni: "",
    sausage: "",
    olives: "",
    mushrooms: "",
    instructions: "",
  });

  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

  const formSchema = yup.object().shape({
    name: yup.string().required("name is required"),
    size: yup.string().oneOf(["small", "medium", "large"]),
    pepperoni: yup.string().oneOf([true]),
    sausage: yup.string().oneOf([true]),
    olives: yup.string().oneOf([true]),
    mushrooms: yup.string().oneOf([true]),
    instructions: yup.string(),
  });

  const validateChange = (e) => {
    yup
      .reach(formSchema, e.target.name)
      .validate(e.target.value)
      .then((valid) => {
        setErrors({ ...errors, [e.target.name]: "" });
      })
      .catch((err) => {
        console.log("error", err);
        setErrors({ ...errors, [e.target.name]: err.errors[0] });
      });
  };

  console.log("error state", errors);

  useEffect(() => {
    formSchema.isValid(formState).then((valid) => {
      console.log("valid?", valid);
      setIsButtonDisabled(!valid);
    });
  }, [formState]);

  const formSubmit = (e) => {
    e.preventDefault();
    axios
      .post("https://reqres.in/", formState)
      .then((res) => {
        setPost(res.data);
        setFormState({
          name: "",
          size: "",
          pepperoni: "",
          sausage: "",
          olives: "",
          mushrooms: "",
          instructions: "",
        });
      })
      .catch((err) => console.log(err.response));
  };

  const onInputChange = (e) => {
    console.log("input change", e.target.value);
    e.persist();
    const newFormData = {
      ...formState,
      [e.target.name]:
        e.target.type === "checkbox" ? e.target.checked : e.target.value,
    };
    validateChange(e);
    setFormState(newFormData);
  };

  return (
    <div>
      <p>Order here:</p>
      <form onSubmit={formSubmit}>
        <label htmlFor="name">
          Name
          <input
            id="name"
            name="name"
            onChange={onInputChange}
            value={formState.name}
          />
          {errors.name.length > 0 ? (
            <p className="error">{errors.name} </p>
          ) : null}
        </label>
        <label htmlFor="className" size>
          Pizza size
          <select onChange={onInputChange} name="size">
            <option value="">---choose one---</option>
            <option value="small">Small"</option>
            <option value="medium">Medium</option>
            <option value="large">Large</option>
          </select>
        </label>
        <p>Choose toppings:</p>
        <label htmlFor="className" pepperoni>
          Pepperoni
          <input
            id="pepperoni"
            name="pepperoni"
            type="checkbox"
            onChange={onInputChange}
            checked={formState.pepperoni}
          />
        </label>
        <label htmlFor="className" sausage>
          Sausage
          <input
            id="sausage"
            name="sausage"
            type="checkbox"
            onChange={onInputChange}
            checked={formState.sausage}
          />
        </label>
        <label htmlFor="className" olives>
          Olives
          <input
            id="olives"
            name="olives"
            type="checkbox"
            onChange={onInputChange}
            checked={formState.olives}
          />
        </label>
        <label htmlFor="className" mushrooms>
          Mushrooms
          <input
            id="mushrooms"
            name="mushrooms"
            type="checkbox"
            onChange={onInputChange}
            checked={formState.mushrooms}
          />
        </label>
        <label htmlFor="className" instructions>
          Special Instructions:
          <input
            id="instructions"
            name="instructions"
            type="text"
            onChange={onInputChange}
            value={formState.instructions}
          />
        </label>
        <pre>{JSON.stringify(post, null, 2)}</pre>
        <button disable={isButtonDisabled}> Submit order</button>
      </form>
    </div>
  );
};

export default PizzaForm;
