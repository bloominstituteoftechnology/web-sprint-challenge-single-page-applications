import React, { useState } from "react";
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
    width: 420px;
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
  .name {
    input {
      font-size: 0.5 rem;
      padding-left: 30px;
    }
  }

  input {
    width: 300px;
    margin: 5px 0 0 0;
    border: 2px solid gray;
    border-radius: 6px;
    padding: 10px;
    font-size: 2.1rem;
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
    margin-top: 20px;
    padding: 20px 20px;
    width: 300px;
    height: 90px;
    text-align: left;
    font-size: 1.7rem;
  }
  button {
    width: 150px;
    background-color: black;
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
`;

const PizzaForm = () => {
  const [post, setPost] = useState([]);

  // managing state for our form inputs
  const [formState, setFormState] = useState({
    name: "",
    size: "",
    chicken: "",
    beef: "",
    shrimp: "",
    veggies: "",
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

  // onSubmit function
  const formSubmit = (e) => {
    e.preventDefault();
    console.log("form submitted!", formSubmit);
  };

  // onChange function
  const inputChange = (e) => {
    console.log("input changed!", e.target.value);
    setFormState({ name: e.target.value });
  };

  //   axios
  //     .post("https://resqres.in/api/users")
  //     .then((res) => {
  //       console.log("success!", res);
  //     })
  //     .catch((err) => {
  //       console.log("error!", err);
  //     });

  // email for size

  return (
    <>
      <FormContainer>
        <h1>Hello from PizzaForm</h1>

        <form onSubmit={formSubmit}>
          <label className="name" htmlFor="name">
            Name:
            <input
              id="name"
              type="text"
              name="name"
              placeholder="Please enter your name here!"
            />
          </label>

          <label htmlFor="size">
            Choice of Size
            <select id="size" name="size">
              <option>--please pick a size--</option>
              <option value="Small">Small</option>
              <option value="Medium">Medium</option>
              <option value="Large">Large</option>
            </select>
          </label>

          <label className="toppings" htmlFor="chicken">
            <input type="checkbox" name="chicken" checked={true} />
            Chicken
          </label>

          <label className="toppings" htmlFor="Beef">
            <input type="checkbox" name="Beef" checked={true} />
            Beef
          </label>

          <label className="toppings" htmlFor="Shrimp">
            <input type="checkbox" name="Shrimp" checked={true} />
            Shrimp
          </label>

          <label className="toppings" htmlFor="Veggies">
            <input type="checkbox" name="Veggies" checked={true} />
            Veggies
          </label>

          <label>
            <textarea
              name="instructions"
              placeholder="Please type instructions here!"
            />
          </label>

          <button type="submit">Submit</button>
        </form>

        {/* <pre>{JSON.stringify(orders, null, 2)}</pre> */}
      </FormContainer>
    </>
  );
};
export default PizzaForm;
