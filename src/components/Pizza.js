import React, { useState, useEffect } from "react";
import * as yup from "yup";
import axios from "axios";

export default function Form() {
 
  const [formState, setFormState] = useState({
    name: "",
    size: "",
    pepperoni:"",
    sausage:"",
    bacon:"",
    mushrooms:'',
    peppers:'',
    onions:"",
    anchovies:"",
    specialInstructions:""
  });

 
  const [serverError, setServerError] = useState("");

  
  const [buttonDisabled, setButtonDisabled] = useState(true);

  

  const [errors, setErrors] = useState({
    name: "",
    size: "",
    pepperoni:"",
    sausage:"",
    bacon:"",
    mushrooms:'',
    peppers:'',
    onions:"",
    anchovies:"",
    specialInstructions:""
  });

 
  const [post, setPost] = useState([]);

  
  const validateChange = (e) => {
   

    yup
      .reach(formSchema, e.target.name)
      .validate(e.target.name === "name" ? e.target.checked : e.target.value(2)) 
      .then((valid) => {
       
        setErrors({
          ...errors,
          [e.target.name]: ""
        });
      })
      .catch((err) => {
        console.log(err);

       
        setErrors({
          ...errors,
          [e.target.name]: err.errors[0]
        });
      });
  };
  
  const formSubmit = (e) => {
    e.preventDefault(); 
    console.log("form submitted!");

   
    axios
      .post("https://reqres.in/api/users", formState)
      .then((res) => {
        console.log("success!", res.data);
      
        setPost(res.data);

     
        setServerError(null); 

      
        setFormState({
          name: "",
          size: "",
          pepperoni:"",
          sausage:"",
          bacon:"",
          mushrooms:'',
          peppers:'',
          onions:"",
          anchovies:"",
          specialInstructions:""
        });
      })
      .catch((err) => {
      
        setServerError("oops! something happened!");
      });
  };

  
  const inputChange = (e) => {
   
    e.persist(); 
    console.log("input changed!", e.target.value);
    const newFormData = {
      ...formState,
      [e.target.name]:
        e.target.type === "checkbox" ? e.target.checked : e.target.value
    };

    validateChange(e); 
    setFormState(newFormData); 
  };

 
  const formSchema = yup.object().shape({
    name: yup.string().required("Name is a required field"), 
    // size: yup.string().notOneOf([yup.ref(size),null]),
    toppings: yup.boolean().oneOf([true], ""),
    specialInstructions:yup.string().required("")    
  });

 
  useEffect(() => {
    formSchema.isValid(formState).then((isValid) => {
     
      setButtonDisabled(!isValid); 
    });
  }, [formState]);

  return (
    <form onSubmit={formSubmit}>
      {serverError ? <p className="error">{serverError}</p> : null}

      <label htmlFor="name">
        Name
        <input
          id="name"
          type="text"
          name="name"
          value={formState.name}
          onChange={inputChange}
          data-cy="name"
        />
        {errors.name.length > 0 ? <p className="error">{errors.name}</p> : null}
      </label>
      <label htmlFor="size">
        Size 
          <select id="role" 
          name="role">
          <option value="personal">Personal</option>
          <option value="small">Small</option>
          <option value="medium">Medium</option>
          <option value="large">Large</option>
        </select>
      </label>

      <div className = "toppings">
        <h3>Pick Your Favorite Toppings: </h3>
      
      <label htmlFor="pepperoni" className="pepperoni">
          Pepperoni
          <input
          type="checkbox"
          id="pepperoni"
          name="pepperoni"
          value={formState.toppings}
          onChange={inputChange}
          data-cy="pepperoni"
          />
      </label>

      <label htmlFor="sausage" className="sausage">
          Sausage
          <input
          type="checkbox"
          id="sausage"
          name="sausage"
          value={formState.toppings}
          onChange={inputChange}
          data-cy="psausage"
          />
      </label>

      <label htmlFor="bacon" className="bacon">
          Bacon
          <input
          type="checkbox"
          id="bacon"
          name="bacon"
          value={formState.toppings}
          onChange={inputChange}
          data-cy="bacon"
          />
      </label>

      <label htmlFor="mushrooms" className="mushrooms">
          Mushrooms
          <input
          type="checkbox"
          id="mushrooms"
          name="mushrooms"
          value={formState.toppings}
          onChange={inputChange}
          data-cy="mushrooms"
          />
      </label>

      <label htmlFor="peppers" className="peppers">
          Peppers
          <input
          type="checkbox"
          id="peppers"
          name="peppers"
          value={formState.toppings}
          onChange={inputChange}
          data-cy="peppers"
          />
      </label>

      <label htmlFor="onions" className="onions">
          Onions
          <input
          type="checkbox"
          id="onions"
          name="onions"
          value={formState.toppings}
          onChange={inputChange}
          data-cy="onions"
          />
      </label>

      <label htmlFor="anchovies" className="anchovies">
          Anchovies
          <input
          type="checkbox"
          id="anchovies"
          name="anchovies"
          value={formState.toppings}
          onChange={inputChange}
          data-cy="anchovies"
          />
      </label>
      </div>

      <label htmlFor="specialInstructions">
       Special Instructions
        <input
          id="specialInstructions"
          type="text"
          name="specialinstructions"
          value={formState.specialInstructions}
          onChange={inputChange}
          data-cy="specialInstructions"
        />
      </label>

      <button disabled={buttonDisabled} type="order">
        Order
      </button>
      <pre>{JSON.stringify(post, null, 2)}</pre>
      <button data-cy="submit" disabled={buttonDisabled}>
      </button>
    </form>
  );
}