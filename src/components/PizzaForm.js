import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import * as yup from "yup";

const FormContainer = styled.div`
  background-repeat: no-repeat;
  background-size: cover;
  height: 870px;
  padding-top: 30px;
  h1 {
    font-size: 2rem;
    margin-left: 10px;
    padding-bottom: 20px;
    text-align: center;
  }
  form {
    display: flex;
    flex-direction: column;
    width: 500px;
    margin: 10px auto;
    padding: 50px;
    border: 2px solid black;
    border-radius: 5px;
    background-color: white;
    height: auto;
  }
  label {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin: 10px;
    font-size: 1.6rem;
  }

  input {
    width: 350px;
    margin: 5px 0 0 0;
    border: 2px solid gray;
    border-radius: 6px;
    padding: 10px;
    font-size: 1.5rem;
  }
  .size {
    margin-bottom: 10ox;

    select {
      margin-top: 10px;
      padding: 5px;
      border: 2px solid gray;
      border-radius: 6px;
    }
  }

  .error {
    font-size: 1.5rem;
    color: red;
  }

  .toppings {
    display: inline-block;
    margin: 20px 0 0 10px;
  }

  .toppings input {
    width: 20px;
    display: inline-block;
    margin-right: 5px;
  }
  textArea {
    margin-top: 30px;
    padding: 20px 20px;
    width: 300px;
    height: 90px;
    text-align: left;
    font-size: 1.3rem;
  }
  button {
    width: 150px;
    background-color: darkRed;
    color: white;
    font-size: 1.2rem;
    margin: 20px 0 0 85px;
    padding: 8px 11px;
    cursor: pointer;
    border: 2px black solid;
    border-radius: 5px;
  }

  button:disabled {
    background-color: white;
    border: 1px solid silver;
    color: gray;
    cursor: not-allowed;
  }

  pre {
    font-size: 1.5rem;
    text-align: center;
  }
  .name input {
    font-size: 1 px;
    width: 100 px;
    padding-left: 30px;
  }
`;

const PizzaForm = () => {
  const [post, setPost] = useState([]);

  // managing state for our form inputs
  const [formState, setFormState] = useState({
    // why do we need below? you can submit it without it.
    name: "",
    size: "",
    chicken: false,
    beef: false,
    shrimp: false,
    veggies: false,
    instructions: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    size: "",
    chicken: "",
    beef: "",
    shrimp: "",
    veggies: "",
    instructions: "",
  });

  // Button
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

  // formSchema
  const formSchema = yup.object().shape({
    name: yup.string().required("Name is a required field"),
    size: yup
      .string()
      .oneOf(["Small", "Medium", "Large"], "Please pick a size"),
    chicken: yup.boolean(),
    beef: yup.boolean(),
    shrimp: yup.boolean(),
    veggies: yup.boolean(),
    instructions: yup.string(),
  });

  // Validation
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
  //   console.log('error state', errors)

  // UseEffect
  useEffect(() => {
    formSchema.isValid(formState).then((valid) => {
      console.log("valid?", valid);
      setIsButtonDisabled(!valid);
    });
  }, [formState]);

  // onSubmit function
  const formSubmit = (e) => {
    e.preventDefault();
    // console.log("form submitted!", e);

    // Errors from server
    axios
      .post("https://reqres.in/api/users", formState)
      .then((response) => {
        setPost(response.data);
        setFormState({
          name: "",
          size: "",
          chicken: "",
          beef: "",
          shrimp: "",
          veggies: "",
          instructions: "",
        });
      })
      .catch((err) => console.log("server error", err.response));
  };

  // onChange function
  const inputChange = (e) => {
    console.log("input changed!", e.target.value);
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
    <>
      <FormContainer>
        <h1>Hello from PizzaForm</h1>

        <form onSubmit={formSubmit}>
          <label htmlFor="name">
            Name:
            <input
              className="name"
              id="name"
              type="text"
              name="name"
              data-cy="name"
              placeholder="Please enter your name here!"
              onChange={inputChange}
              value={formState.name}
            />
            {errors.name.length > 0 ? (
              <p className="error">{errors.name}</p>
            ) : null}
          </label>

          <label htmlFor="size" className="size">
            Choice of Size
            <select id="size" name="size" data-cy="size" onChange={inputChange}>
              <option>--please pick a size--</option>
              <option value="Small">Small</option>
              <option value="Medium">Medium</option>
              <option value="Large">Large</option>
            </select>
            {errors.size.length > 0 ? (
              <p className="error">{errors.size}</p>
            ) : null}
          </label>

          <h2 style={{ marginBottom: "0px" }}>Add Toppings:</h2>
          <label htmlFor="chicken" className="toppings">
            <input
              type="checkbox"
              name="chicken"
              data-cy="chicken"
              onChange={inputChange}
              value={formState.chicken}
            />
            Chicken
          </label>

          <label className="toppings" htmlFor="Beef">
            <input
              type="checkbox"
              name="beef"
              data-cy="beef"
              onChange={inputChange}
              value={formState.beef}
            />
            Beef
          </label>

          <label className="toppings" htmlFor="Shrimp">
            <input
              type="checkbox"
              name="shrimp"
              data-cy="shrimp"
              onChange={inputChange}
              value={formState.shrimp}
            />
            Shrimp
          </label>

          <label className="toppings" htmlFor="Veggies">
            <input
              type="checkbox"
              name="veggies"
              data-cy="veggies"
              onChange={inputChange}
              value={formState.veggies}
            />
            Veggies
          </label>

          <label>
            <textarea
              name="instructions"
              data-cy="instructions"
              placeholder="Please type instructions here!"
              onChange={inputChange}
              value={formState.instructions}
            />
            {errors.instructions.length > 0 ? (
              <p className="error">{errors.instructions}</p>
            ) : null}
          </label>

          <button type="submit" disabled={isButtonDisabled} data-cy="submit">
            Submit
          </button>

          <pre>{JSON.stringify(post, null, 2)}</pre>

        </form>
      </FormContainer>
    </>
  );
};
export default PizzaForm;
