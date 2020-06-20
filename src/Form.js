import React, { useState, useEffect } from "react";
import * as yup from "yup";
import { Link } from "react-router-dom";
import axios from 'axios'




export default function Form() {


  const initialFormState ={
    name: "",
    // size: "",
    // garlic: "",
    // spinach: "",
    // bbq: "",
    // pepperoni: "",
    // sausage: "",
    // dicedTomatoes: "",
    // roastedGarlic: "",
    // specialInstructions: "",
  };

  const [post, setPost] = useState([]);

  const [serverError, setServerError] = useState("");

  const [formState, setFormState] = useState(initialFormState);

  const [buttonDisabled, setButtonDisabled]=useState(false);

  
  const [errorState, setErrorState] = useState(initialFormState);

  
  

  let formSchema = yup.object().shape({
    name: yup.string().required("Name must be at least 2 characters"),
    // size: yup.string().required("Size is required!"),
    // garlic: yup.string().required(),
    // spinach: yup.string().required(),
    // bbq: yup.string().required(),
    // pepperoni: yup.boolean().oneOf([true]),
    // sausage:  yup.boolean().oneOf([true]),
    // dicedTomatoes:  yup.boolean().oneOf([true]),
    // roastedGarlic:  yup.boolean().oneOf([true]),
    // specialInstructions: yup.string().required(),
  });



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
       
        setButtonDisabled(!valid);
        
    })
    
},[formState])




  const formSubmit = (event) => {
     
    event.preventDefault();
    axios.post('https://reqres.in/api/pizza', formState)
    .then(response =>{
        
        setPost(response)
        console.log("axios from API",response.data)
        setFormState({
            name: "",
            // size: "",
            // garlic: "",
            // spinach: "",
            // bbq: "",
            // pepperoni: "",
            // sausage: "",
            // dicedTomatoes: "",
            // roastedGarlic: "",
            // specialInstructions: "",
        })
        setServerError(null);
        
    }).catch(error=>{
        setServerError('something happend!')
    })
    console.log(formSubmit)
  };







  const inputChange = (event) => {
    console.log(event.target.name);
    event.persist();
    const newFormData={
        ...formState,
        [event.target.name]: event.target.type === "checkbox" ? event.target.checked: event.target.value
    }
   validate(event);
   setFormState(newFormData)
  };

 

 

  return (
    <form className="form" onSubmit={formSubmit}>
         {serverError ? <p className="error">{serverError}</p> : null}
      <label htmlFor="name" className="name">
        Name: 
      </label>
      <input
        id= "name"
        type="text"
        placeholder="Enter Name Here"
        className="text"
        name="name"
        onChange={inputChange}
        value={formState.name}
      />
        {errorState.name.length > 0 ? <p className="error">{errorState.name}</p> : null}
      <label htmlFor="size" className="size">
        Choice of Size 
      </label>
      <select id="size" className="options" name="size" /* onChange={inputChange}*/   value={formState.size}>
        <option value="Select">Select</option>
        <option value="Small">Small</option>
        <option value="Medium">Medium</option>
        <option value="Large">Large</option>
      </select>
      
      <h2 className="sauce">Choice of Sauce</h2>
      <div className="selection">
        <label htmlFor="Garlic Ranch">Garlic Ranch</label>
        <input
          type="radio"
          id="Garlic Ranch"
          name="garlic"
          value={formState.garlic}
        //   onChange={inputChange}
        />

        <label htmlFor="BBQSauce">BBQ Sauce</label>
        <input type="radio" id="BBQSauce" name="bbq" onChange={inputChange} />

        <label htmlFor="SpinachAlfredo">Spinach Alfredo</label>
        <input
          type="radio"
          id="SpinachAlfredo"
          name="spinach"
        //   onChange={inputChange}
          value={formState.spinach}
        />
      </div>

      <h2 className="sauce">Add Toppings</h2>
      <div className="selection">
        <label htmlFor="Pepperoni">Pepperoni</label>
        <input
          type="checkbox"
          id="Pepperoni"
          name="pepperoni"
        //   onChange={inputChange}
          value={formState.pepperoni}
        />

        <label htmlFor="Sausage">Sausage</label>
        <input
          type="checkbox"
          id="Sausage"
          name="sausage"
        //   onChange={inputChange}
          value={formState.sausage}
        />

        <label htmlFor="DicedTomatoes">Diced Tomatoes</label>
        <input
          type="checkbox"
          id="DicedTomatoes"
          name="dicedTomatoes"
        //   onChange={inputChange}
          value={formState.dicedTomatoes}
        />

        <label htmlFor="RoastedGarlic">Roasted Garlic</label>
        <input
          type="checkbox"
          id="RoastedGarlic"
          name="roastedGarlic"
        //   onChange={inputChange}
          value={formState.roastedGarlic}
        />
      </div>

      <label htmlFor="SpecialInstructions" className="instruction">
        Special Instructions <span role="img" aria-label="emoji hand holding pen">✍️</span>
      </label>
      <textarea
        placeholder="Anything you need to tell us?"
        name="specialInstructions"
        // onChange={inputChange}
        // value={formState.specialInstructions}
      />
         {/* <pre>{JSON.stringify(post, null, 2)}</pre> */}
     
 <button className="btnOrder" type="submit" disabled={buttonDisabled}>Add To Order</button>
    </form>
  );
}
{/* <Link to="/pizza/confirmation"></Link> */}