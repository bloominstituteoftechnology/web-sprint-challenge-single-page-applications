import React, { useState } from "react";
import pizzaForm from "../img/pizza-form.jpg";
import * as yup from "yup";
import axios from "axios";

//Schema of want we want our data to look like so everything can be validated

const formSchema = yup.object().shape({
  name: yup.string().required("Name must be at least 2 characters").min(2),
  size: yup.string(),
  originalRed: yup.boolean(),
  garlicRanch: yup.boolean(),
  bbqSauce: yup.boolean(),
  spinachAlfredo: yup.boolean(),
  pepperoni: yup.boolean(),
  sausage: yup.boolean(),
  bacon: yup.boolean(),
  italian: yup.boolean(),
  optional: yup.string(),
});

export default function Pizza() {
  //managing state for form inputs

  const [formState, setFormState] = useState({
    name: "",
    size: "",
    originalRed: false,
    garlicRanch: false,
    bbqSauce: false,
    spinachAlfredo: false,
    pepperoni: false,
    sausage: false,
    bacon: false,
    italian: false,
    optional: "",
  });

  //error state

  const [errorState, setErrorState] = useState({
    name: "",
    size: "",
    originalRed: "",
    garlicRanch: "",
    bbqSauce: "",
    spinachAlfredo: "",
    pepperoni: "",
    sausage: "",
    bacon: "",
    italian: "",
    optional: "",
  });

  const validate = (e) => {
    //This is saying: in this schema, validate this field against this data
    yup
      .reach(formSchema, e.target.name)
      .validate(e.target.value) //validate gives us a promise
      .then((valid) => {
        //if we don't get an error, we want to delete the old error that's in there
        setErrorState({
          ...errorState,
          [e.target.name]: "",
        });
      })
      .catch((err) => {
        console.log(err.errors); //has to be err.errors per documentation
        setErrorState({
          //if we get an error we want to set it to whatever our error is
          ...errorState,
          [e.target.name]: err.errors[0],
        });
      });
  };

  //onChange function

  const inputChange = (e) => {
    e.persist(); //allows you to call events in an asynchronous way - set it and forget it. Remember, we are working with a virtual DOM and not an actual DOM. React usually wants to dump events immediately after we are done with them to save on performance. We need to use this when calling on an event such as yup. We're telling React: we need to hang on to it for a bit. Otherwise, React is going to delete it.

    // console.log("input changed!", e.target.name, e.target.checked);

    validate(e);

    let value =
      e.target.type === "checkbox" ? e.target.checked : e.target.value;
    setFormState({ ...formState, [e.target.name]: value });
  };

  //onSubmit function

  const formSubmit = (e) => {
    e.preventDefault();
    console.log("form submitted!");
    axios
      .post("https://reqres.in/api/users", formState) //post is going to let us send data out. 2nd arg is data (object) that we want to send
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  return (
    <div className="pizza-wrapper">
      <div className="pizza-wrapper-content">
        <h3>Build Your Own Pizza</h3>
        <img src={pizzaForm} alt="pizza" className="pizzaPic" />
        <h2>Build Your Own Pizza</h2>

        {/* FORM BEGINS HERE  */}

        <form onSubmit={formSubmit} id="form" data-cy="form">
          <label htmlFor="name">
            Name
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Enter your name"
              value={formState.name}
              onChange={inputChange}
            />
          </label>

          {/* SETTING ERROR MESSAGE FOR VALUE NOT PASSING VALIDATION */}

          {errorState.name.length > 0 ? (
            <p className="error">{errorState.name}</p>
          ) : null}

          {/* THIS IS THE DROPDOWN */}

          <label htmlFor="size">
            <div className="choice-wrapper">
              <h3>Choice of Size</h3>
              <p>Required.</p>
            </div>
            <select
              name="size"
              id="size"
              value={formState.size}
              onChange={inputChange}
            >
              <option value="small">Small</option>
              <option value="medium">Medium</option>
              <option value="large">Large</option>
            </select>
          </label>

          {/* RADIO BUTTONS - SAUCES */}

          <label htmlFor="originalRed">
            <div className="choice-wrapper">
              <h3>Choice of Sauce</h3>
              <p>Required.</p>
            </div>
            <input
              type="radio"
              id="originalRed"
              name="originalRed"
              value={formState.originalRed}
              onChange={inputChange}
            />
            Original Red
          </label>

          <label htmlFor="garlicRanch">
            <input
              type="radio"
              id="garlicRanch"
              name="garlicRanch"
              value={formState.garlicRanch}
              onChange={inputChange}
            />
            Garlic Ranch
          </label>

          <label htmlFor="bbqSauce">
            <input
              type="radio"
              id="bbqSauce"
              name="bbqSauce"
              value={formState.bbqSauce}
              onChange={inputChange}
            />
            BBQ Sauce
          </label>

          <label htmlFor="radioInputChange">
            <input
              type="radio"
              id="spinachAlfredo"
              name="spinachAlfredo"
              value={formState.spinachAlfredo}
              onChange={inputChange}
            />
            Spinach Alfredo
          </label>

          <div className="choice-wrapper">
            <h3>Add Toppings</h3>
            <p>Choose up to 4.</p>
          </div>

          {/* CHECKBOX - TOPPINGS  */}

          <label htmlFor="pepperoni">
            Pepperoni
            <input
              type="checkbox"
              id="pepperoni"
              name="pepperoni"
              checked={formState.pepperoni}
              onChange={inputChange}
            />
          </label>

          <label htmlFor="sausage">
            Sausage
            <input
              type="checkbox"
              id="sausage"
              name="sausage"
              checked={formState.sausage}
              onChange={inputChange}
            />
          </label>

          <label htmlFor="bacon">
            Canadian Bacon
            <input
              type="checkbox"
              id="bacon"
              name="bacon"
              checked={formState.bacon}
              onChange={inputChange}
            />
          </label>

          <label htmlFor="italian">
            Spicy Italian Sausage
            <input
              type="checkbox"
              id="italian"
              name="italian"
              checked={formState.italian}
              onChange={inputChange}
            />
          </label>

          {/* TEXT AREA - SPECICAL INSTRUCTIONS */}

          <label>
            <div className="choice-wrapper">
              <h3>Special Instructions</h3>
            </div>
            <textarea
              id="optional"
              name="optional"
              placeholder="Anything else you'd like to add?"
              value={formState.optional}
              onChange={inputChange}
            />
          </label>

          <button type="submit" className="submit-button">
            Add to order
          </button>
        </form>
      </div>
    </div>
  );
}
