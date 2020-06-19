import React, { useState, useEffect } from "react";
import * as yup from "yup";
import { Route, Link, Switch, NavLink } from "react-router-dom";

// https://reqres.in/api/pizza


export default function Form() {
  const [formState, setFormState] = useState({
    name: "",
    size: "",
    garlic: "",
    spinach: "",
    bbq: "",
    pepperoni: "",
    sausage: "",
    dicedTomatoes: "",
    roastedGarlic: "",
    specialInstructions: "",
  });

  const initalError = {
      name: ""
  }

  const [buttonDisabled, setButtonDisabled]=useState(true)
console.log(buttonDisabled)
  let formSchema = yup.object().shape({
    name: yup.string().required("Name must be at least 2 characters"),
    size: yup.string().required("Size is required!"),
    garlic: yup.string().required(),
    spinach: yup.string().required(),
    bbq: yup.string().required(),
    pepperoni: yup.string().required(),
    sausage: yup.string().required(),
    dicedTomatoes: yup.string().required(),
    roastedGarlic: yup.string().required(),
    specialInstructions: yup.string().required(),
  });

  const [errorState, setErrorState] = useState(initalError)

  const formSubmit = (event) => {
    event.preventDefault();
  };





  const validate = (event) => {
    yup
      .reach(formSchema, event.target.name)
      .validate(event.target.value)
      .then((valid) => {
        setErrorState({
          ...errorState,
          [event.target.name]: "",
        });
      })
      .catch((err) => {
        console.log(err.errors);
        setErrorState({
          ...errorState,
          [event.target.name]: err.errors[0],
        });
      });
  };

  useEffect(()=>{
    formSchema.isValid(formState).then(valid=>{
        console.log('valid?', valid);
        setButtonDisabled(!valid);
        console.log(valid)
    })
},[formState])



  const inputChange = (event) => {
    console.log(event.target.name);
    event.persist();
    validate(event);
    let value =
      event.target.type === "checkbox"
        ? event.target.checked
        : event.target.value;
    setFormState({ ...formState, [event.target.name]: value });
  };

 

 

  return (
    <form className="form" onSubmit={formSubmit}>
      <label htmlFor="name" className="name">
        Name: 
      </label>
      <input
        type="text"
        placeholder="Enter Name Here"
        className="text"
        name="name"
        onChange={inputChange}
      />
        {errorState.name.length > 0 ? <p className="error">{errorState.name}</p> : null}
      <label HTMLFor="size" className="size">
        Choice of Size 
      </label>
      <select id="size" className="options" name="size" onChange={inputChange}>
        <option value="Select">Select</option>
        <option value="Small">Small</option>
        <option value="Medium">Medium</option>
        <option value="Large">Large</option>
      </select>
      
      <h2 className="sauce">Choice of Sauce</h2>
      <div className="selection">
        <label HTMLFor="Garlic Ranch">Garlic Ranch</label>
        <input
          type="radio"
          id="Garlic Ranch"
          name="garlic"
          onChange={inputChange}
        />

        <label HTMLFor="BBQSauce">BBQ Sauce</label>
        <input type="radio" id="BBQSauce" name="bbq" onChange={inputChange} />

        <label HTMLFor="SpinachAlfredo">Spinach Alfredo</label>
        <input
          type="radio"
          id="SpinachAlfredo"
          name="spinach"
          onChange={inputChange}
        />
      </div>

      <h2 className="sauce">Add Toppings</h2>
      <div className="selection">
        <label HTMLFor="Garlic Ranch">Pepperoni</label>
        <input
          type="checkbox"
          id="Pepperoni"
          name="pepperoni"
          onChange={inputChange}
        />

        <label HTMLFor="Sausage">Sausage</label>
        <input
          type="checkbox"
          id="Sausage"
          name="sausage"
          onChange={inputChange}
        />

        <label HTMLFor="DicedTomatoes">Diced Tomatoes</label>
        <input
          type="checkbox"
          id="DicedTomatoes"
          name="dicedTomatoes"
          onChange={inputChange}
        />

        <label HTMLFor="RoastedGarlic">Roasted Garlic</label>
        <input
          type="checkbox"
          id="RoastedGarlic"
          name="roastedGarlic"
          onChange={inputChange}
        />
      </div>

      <label HTMLFor="SpecialInstructions" className="instruction">
        Special Instructions ✍️
      </label>
      <textarea
        placeholder="Anything you need to tell us?"
        name="specialInstructions"
        onChange={inputChange}
      />

      <Link to="/pizza/confirmation"><button className="btnOrder" disabled={buttonDisabled}>Add To Order</button></Link>
    </form>
  );
}
