import React, { useEffect, useState } from "react";
import styled from "styled-components";
import * as yup from "yup";
import axios from "axios";
import { useHistory } from "react-router-dom";

const StyledFormContent = styled.div``;

const schema = yup.object().shape({
  name: yup
    .string()
    .required("Name is required")
    .min(2, "Name needs to be 2 chars min"),
  sauce: yup
    .string()
    .oneOf(["red", "garlic", "bbq", "alfredo"], "You must select a sauce"),
  pepperoni: yup.boolean().oneOf([true, false]),
  sausage: yup.boolean().oneOf([true, false]),
  greenPeppers: yup.boolean().oneOf([true, false]),
  blackOlives: yup.boolean().oneOf([true, false]),
  pineapple: yup.boolean().oneOf([true, false]),
  dicedTomatoes: yup.boolean().oneOf([true, false]),
  extraSauce: yup.boolean().oneOf([true, false]),
  glutenFree: yup.boolean().oneOf([true, false]),
  specialInstructions: yup.string(),
  numberofItems: yup.number(),
});

function FormContent(props) {
  const [formData, setFormData] = useState({
    name: "",
    sauce: "",
    toppings: {
      pepperoni: false,
      sausage: false,
      greenPeppers: false,
      blackOlives: false,
      pineapple: false,
      dicedTomatoes: false,
      extraSauce: false,
      extraCheese: false,
    },
    glutenFree: false,
    specialInstructions: "",
    numberofItems: 1,
  });
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    agree: "",
    password: "",
  });
  const [disabled, setDisabled] = useState(false);
  const history = useHistory();

  const setFormErrors = (name, value) => {
    yup
      .reach(schema, name)
      .validate(value)
      .then(() => setErrors({ ...errors, [name]: "" }))
      .catch((err) => setErrors({ ...errors, [name]: err.errors[0] }));
  };

  const handleChange = (event) => {
    const { checked, value, type, name, className } = event.target;
    if (className === "toppings") {
      setFormData({
        ...formData,
        toppings: { ...formData.toppings, [name]: checked },
      });
    } else {
      const valueToUse = type === "checkbox" ? checked : value;
      setFormErrors(name, valueToUse);
      setFormData({ ...formData, [name]: valueToUse });
    }
  };

  useEffect(() => {
    schema.isValid(formData).then((valid) => setDisabled(!valid));
  }, [formData]);

  const submit = (event) => {
    event.preventDefault();
    const toppingsArray = [];
    let toppings = formData.toppings;
    for (let topping in toppings) {
      if (toppings[topping]) {
        toppingsArray.push(topping);
      }
    }
    const newOrder = {
      name: formData.name.trim(),
      sauce: formData.sauce,
      toppings: toppingsArray,
      glutenFree: formData.glutenFree,
      specialInstructions: formData.specialInstructions,
      numberofItems: formData.numberofItems,
    };
    axios
      .post("https://reqres.in/api/users", newOrder)
      .then((res) => {
        setFormData({
          name: "",
          sauce: "",
          toppings: {
            pepperoni: false,
            sausage: false,
            greenPeppers: false,
            blackOlives: false,
            pineapple: false,
            dicedTomatoes: false,
            extraSauce: false,
            extraCheese: false,
          },
          glutenFree: false,
          specialInstructions: "",
          numberofItems: 1,
        });
        props.setOrder([...props.order, res.data]);
        console.log(res.data);
        setTimeout(() => {
          history.push("/success");
        }, 2000);
      })
      .catch((err) => {
        console.log("error");
      });
  };

  return (
    <StyledFormContent>
      <form onSubmit={submit}>
        <div>
          <label>
            <input
              type='text'
              name='name'
              value={formData.name}
              onChange={handleChange}
            />
          </label>
        </div>
        <div>
          <div>
            <label>
              {" "}
              Original Red
              <input
                id='red'
                type='radio'
                name='sauce'
                value='red'
                onChange={handleChange}
              />
            </label>
          </div>
          <div>
            <label>
              {" "}
              Garlic Ranch
              <input
                type='radio'
                name='sauce'
                value='garlic'
                onChange={handleChange}
              />
            </label>
          </div>
          <div>
            <label>
              {" "}
              BBQ Sauce
              <input
                type='radio'
                name='sauce'
                value='bbq'
                onChange={handleChange}
              />
            </label>
          </div>
          <div>
            <label>
              {" "}
              Spinach Alfredo
              <input
                type='radio'
                name='sauce'
                value='alfredo'
                onChange={handleChange}
              />
            </label>
          </div>
        </div>
        <div>
          <div>
            <label>
              {" "}
              Pepperoni
              <input
                className='toppings'
                type='checkbox'
                name='pepperoni'
                checked={formData.toppings.pepperoni}
                onChange={handleChange}
              />
            </label>
          </div>
          <div>
            <label>
              {" "}
              Sausage
              <input
                className='toppings'
                type='checkbox'
                name='sausage'
                checked={formData.toppings.sausage}
                onChange={handleChange}
              />
            </label>
          </div>
          <div>
            <label>
              {" "}
              Green Peppers
              <input
                className='toppings'
                type='checkbox'
                name='greenPeppers'
                checked={formData.toppings.greenPeppers}
                onChange={handleChange}
              />
            </label>
          </div>
          <div>
            <label>
              {" "}
              Black Olives
              <input
                className='toppings'
                type='checkbox'
                name='blackOlives'
                checked={formData.toppings.blackOlives}
                onChange={handleChange}
              />
            </label>
          </div>
          <div>
            <label>
              {" "}
              Pineapple
              <input
                className='toppings'
                type='checkbox'
                name='pineapple'
                checked={formData.toppings.pineapple}
                onChange={handleChange}
              />
            </label>
          </div>
          <div>
            <label>
              {" "}
              Diced Tomatoes
              <input
                className='toppings'
                type='checkbox'
                name='dicedTomatoes'
                checked={formData.toppings.dicedTomatoes}
                onChange={handleChange}
              />
            </label>
          </div>
          <div>
            <label>
              {" "}
              Extra Sauce
              <input
                className='toppings'
                type='checkbox'
                name='extraSauce'
                checked={formData.toppings.extraSauce}
                onChange={handleChange}
              />
            </label>
          </div>
          <div>
            <label>
              {" "}
              Extra Cheese
              <input
                className='toppings'
                type='checkbox'
                name='extraCheese'
                checked={formData.toppings.extraCheese}
                onChange={handleChange}
              />
            </label>
          </div>
        </div>
        <div>
          <label>
            {" "}
            Gluten Free Crust
            <input
              type='checkbox'
              name='glutenFree'
              checked={formData.glutenFree}
              onChange={handleChange}
            />
          </label>
        </div>
        <div>
          <label>
            {" "}
            Special Instructions
            <textarea
              name='specialInstructions'
              value={formData.specialInstructions}
              onChange={handleChange}
            />
          </label>
        </div>
        <div>
          <label>
            {" "}
            Count
            <input
              type='number'
              name='numberofItems'
              value={formData.numberofItems}
              onChange={handleChange}
            />
          </label>
        </div>
        <button id='submit' disabled={disabled}>
          Submit
        </button>
      </form>
    </StyledFormContent>
  );
}
export default FormContent;
