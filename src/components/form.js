import React, { useState, useEffect } from "react";
import * as yup from "yup";
import axios from "axios";

export default function PizzaForm() {
  // managing state for our form inputs
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    instructions: "",
    sizes: "large",
    pepperoni:false,
    sausage: false,
    anchovies: false,
    cheese: false,
    blackOlives: false

  });

  // server error

  // control whether or not the form can be submitted if there are errors in form validation 
  const [buttonIsDisabled, setButtonIsDisabled] = useState(true);

  // managing state for errors.
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    instructions: "",
    sizes: "",
    pepperoni: "",
    sausage: "",
    anchovies: "",
    cheese: "",
    blackOlives: ""

  });

  const [post, setPost] = useState([]);

  // inline validation, validating one key/value pair at a time
  const validateChange = (e) => {
    yup
      // get the rules out of schema with reach 
      .reach(formSchema, e.target.name)
      .validate(
        e.target.type === "checkbox" ? e.target.checked : e.target.value
      )
      .then((valid) => {
        // the input is passing!
        // the reset of that input's error
        setErrors({ ...errors, [e.target.name]: "" });
      })
      .catch((err) => {
        // the input is breaking form schema
      

        console.log("err", err);
        setErrors({ ...errors, [e.target.name]: err.errors[0] });
      });
  };

  // onSubmit function
  const formSubmit = (e) => {
    e.preventDefault(); 
    axios
      .post("https://reqres.in/api/users", formState)
      .then((resp) => {
        // update temp state with value from API to display in <pre>
        setPost(resp.data);

        

        // clear state, 
        setFormState({
            name: "",
            email: "",
            instructions: "",
            sizes: "large",
            pepperoni:false,
            sausage: false,
            anchovies: false,
            cheese: false,
            blackOlives: false

          });
      })
      .catch((err) => {
        // server
      });
  };

  // onChange function
  const inputChange = (e) => {
    e.persist();
   
    const newFormState = {
      ...formState,
      [e.target.name]:
        e.target.type === "checkbox" ? e.target.checked : e.target.value
    };

    validateChange(e);
    setFormState(newFormState);
  };

  const formSchema = yup.object().shape({
    name: yup.string().required("Name is required.").min(2, "That's not a valid input."),
    email: yup.string().email().required("Email Is Required"),
    instructions: yup.string(),
    sizes: yup
      .string()
      .oneOf(["Small", "Medium", "Large", "Extra-Large"]),
    pepperoni: yup.boolean(),
    cheese: yup.boolean(),
    sausage: yup.boolean(),
    blackOlives: yup.boolean(),
    anchovies: yup.boolean()



});

  useEffect(() => {
    formSchema.isValid(formState).then((valid) => {
      console.log("is my form valid?", valid);
      setButtonIsDisabled(!valid);
    });
  }, [formState]);

  console.log("formState", formState);
  return (
    <form onSubmit={formSubmit}>
      <label htmlFor="name">
        Name
        <input
          id="name"
          type="text"
          name="name"
          value={formState.name}
          onChange={inputChange}
        />
        {errors.name.length > 0 ? <p className="error">{errors.name}</p> : null}
      </label>
      <label htmlFor="email">
        Email
        <input
          id="email"
          type="text"
          name="email"
          value={formState.email}
          onChange={inputChange}
        />
        {errors.email.length > 0 ? (
          <p className="error">{errors.email}</p>
        ) : null}
      </label>
      <label htmlFor="instructions">
        special instructions
        <textarea
          id="instructions"
          name="instructions"
          value={formState.instructions}
          onChange={inputChange}
        />
        {errors.instructions.length > 0 ? (
          <p className="error">{errors.instructions}</p>
        ) : null}
      </label>
      <label htmlFor="sizes">
        What size pizza would u like?
        
        <select
          id="sizes"
          name="sizes"
          value={formState.sizes}
          onChange={inputChange}
        >
          <option value="">--Choose One--</option>
          <option value="Small">Small</option>
          <option value="Medium">Medium</option>
          <option value="Large">Large</option>
          <option value="Extra-Large">Extra-Large</option>
        </select>
        {errors.sizes.length > 0 ? (
          <p className="error">{errors.sizes}</p>
        ) : null}
      </label>

      <p>Select at Least One Topping</p>
      <label htmlFor="pepperoni" className="pepperoni">
        <input
          type="checkbox"
          id="pepperoni"
          name="pepperoni"
          checked={formState.pepperoni}
          onChange={inputChange}
        />
        Pepperoni
        {errors.pepperoni.length > 0 ? (
          <p className="error">{errors.pepperoni}</p>
        ) : null}
      </label>

      <label htmlFor="sausage" className="sausage">
        <input
          type="checkbox"
          id="sausage"
          name="sausage"
          checked={formState.sausage}
          onChange={inputChange}
        />
        Sausage
        {errors.sausage.length > 0 ? (
          <p className="error">{errors.sausage}</p>
        ) : null}
      </label>
        
      <label htmlFor="anchovies" className="anchovies">
        <input
          type="checkbox"
          id="anchovies"
          name="anchovies"
          checked={formState.anchovies}
          onChange={inputChange}
        />
        Anchovies
        {errors.anchovies.length > 0 ? (
          <p className="error">{errors.anchovies}</p>
        ) : null}
      </label>
        
      <label htmlFor="blackOlives" className="blackOlives">
        <input
          type="checkbox"
          id="blackOlives"
          name="blackOlives"
          checked={formState.blackOlives}
          onChange={inputChange}
        />
        Black Olives
        {errors.blackOlives.length > 0 ? (
          <p className="error">{errors.blackOlives}</p>
        ) : null}
      </label>

      <label htmlFor="cheese" className="cheese">
        <input
          type="checkbox"
          id="cheese"
          name="cheese"
          checked={formState.cheese}
          onChange={inputChange}
        />
        Cheese
        {errors.cheese.length > 0 ? (
          <p className="error">{errors.cheese}</p>
        ) : null}
      </label>

      <button type="submit" disabled={buttonIsDisabled}>
        Add To Order
      </button>
      <pre>{JSON.stringify(post, null, 2)}</pre>
    </form>
  );
}
