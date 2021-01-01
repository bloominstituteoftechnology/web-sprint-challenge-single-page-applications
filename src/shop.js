import React, { useState, useEffect } from "react";
import axios from "axios";
import * as yup from "yup";
import styled from "styled-components"

const formSchema = yup.object().shape({
  name: yup
    .string()
    .required("Name is a required field and must be at least 2 characters"),
  pizzasizes: yup.string().required(),
  pepporoni: yup.boolean(),
  mushrooms: yup.boolean(),
  greenpeppers: yup.boolean(),
  extracheese: yup.boolean(),
  instructions: yup.string(),
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
    pizzasizes: "",
    pepporoni: "",
    mushrooms: "",
    greenpeppers: "",
    extracheese: "",
    instructions: "",
  });

  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

  const validateChange = (e) => {
    yup
      .reach(formSchema, e.target.name)
      .validate(e.target.value)
      .then((valid) => {
        setErrors({ ...errors, [e.target.name]: "" });
      })
      .catch((err) => {
        console.log(err.errors);
        setErrors({ ...errors, [e.target.name]: err.errors[0] });
      });
  };
  useEffect(() => {
    formSchema.isValid(formState).then((valid) => {
      setIsButtonDisabled(!valid);
    });
  }, [formState]);

  const onChange = (e) => {
    e.persist();
    validateChange(e);
    const { checked, value, name, type } = e.target;
    const ValueToUse = type === "checkbox" ? checked : value;
    setFormState({ ...formState, [name]: ValueToUse });
  };

  const formSubmit = (e) => {
    e.preventDefault();
    console.log("form submited");
    axios
      .post("https://reqres.in/api/users", formState)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };
  return (
    <StyleContainer>
      <div className="input">
      <form onSubmit={formSubmit}>
        <StyleForm>
          <label htmlFor="name">
            Name
            <input
              name="name"
              type="text"
              maxLength="30"
              placeholder="name"
              onChange={onChange}
              value={formState.name}
            />
            {errors.name.length > 0 ? <p>{errors.name} </p> : null}
          </label>
        </StyleForm>
        <StyleForm>
          <label htmlFor="Pizza">
            Choose a Pizza Size:
            <select
              name="pizzasizes"
              value={formState.pizzasizes}
              onChange={onChange}
            >
              <option value="">==Please Choose an Option==</option>
              <option value="small">Small $10.99</option>
              <option value="medium"> Medium $13.99</option>
              <option value="large">Large $15.99</option>
              <option value="exLarge">Extra Large $19.99</option>
            </select>
          </label>
        </StyleForm>
        <StyleForm>
          <label htmlFor="Toppings">
            Choose your toppings
              Pepporoni
            <input
              type="checkbox"
              name="pepporoni"
              value="pepporoni"
              onChange={onChange}
              checked={formState.pepporoni}
            />
                Mushrooms
            <input
              type="checkbox"
              name="mushrooms"
              value="mushrooms"
              onChange={onChange}
              checked={formState.mushrooms}
            />
                Green Peppers
            <input
              name="greenpeppers"
              type="checkbox"
              value="greenpeppers"
              onChange={onChange}
              checked={formState.greenpeppers}
            />
              Extra Cheese 
            <input
              name="extracheese"
              type="checkbox"
              value="extracheese"
              checked={formState.extracheese}
              onChange={onChange}
            />
          </label>
        </StyleForm>
        <StyleForm>
          <label htmlFor="instructions">
            <textarea
              name="instructions"
              type="text"
              value={formState.instructions}
              onChange={onChange}
            />
          </label>
        </StyleForm>
        <div className="footer">
          <button disabled={isButtonDisabled} className="btn">Place your order</button>
        </div>
      </form>
    </div>
    </StyleContainer>
  );
}



const StyleContainer = styled.div`
width:100%;
display:flex;
flex-direction:column;
align-items:center;
`
const StyleForm = styled.div`
display:flex;
align-items:center;
flex-direction: column;
width: fit-content;



`