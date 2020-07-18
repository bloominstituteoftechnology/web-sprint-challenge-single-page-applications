import React, { useState, useEffect } from 'react';
import * as yup from "yup";
import axios from 'axios';

const Form = (props) => {

    const defaultState = {
        name: "",
        pizzaSize: "",
        pizzaSauce: false,
        pizzaToppings: false,
        instructions:"",
    };
  
    const [formState, setFormState] = useState(defaultState);
    const [errors, setErrors] = useState({ ...defaultState, terms: "" });
    const [buttonDisabled, setButtonDisabled] = useState(true);
    

    let formSchema = yup.object().shape({
        name: yup.string().required("Please Provide Your Name").min(2),
        pizzaSize: yup.string().required("Please Select Your Size"),
        pizzaSauce: yup.boolean().oneOf([true],"Please Select Sauce"),
        pizzaToppings: yup.boolean().optional(),
        instructions: yup.string().optional()
    })

    useEffect(() => {
        formSchema.isValid(formState).then(valid => setButtonDisabled(!valid));
      }, [formState]);
    
      const formSubmit = e => {
        e.preventDefault();
        if (formState) {
            props.setOrder([...props.order, {formState}])
        }
        axios
          .post("https://reqres.in/api/users", formState)
          .then(() => console.log("form submitted success"))
          .catch(err => console.log(err));
      };

      const validateChange = e => {
        e.persist();
        yup
          .reach(formSchema, e.target.name)
          .validate(e.target.value)
          .then(() =>
            setErrors({
              ...errors,
              [e.target.name]: ""
            })
          )
          .catch(error =>
            setErrors({
              ...errors,
              [e.target.name]: error.errors[0]
            })
          );
        if (e.target.value.length === 0) {
          setErrors({
            ...errors,
            [e.target.name]: `${e.target.name} field is required`
          });
        }
      };

      
      const inputChange = e => {
        const value =
          e.target.type === "checkbox" ? e.target.checked : e.target.value;
        setFormState({
          ...formState,
          [e.target.name]: value
        });
        validateChange(e);
      };

    return (
        <form onSubmit={formSubmit}>
            <label htmlForm="name">
                <input
                    id="name"
                    type="text"
                    name="name"
                    placeholder="Please Enter Name Here"
                    onChange={inputChange}
                    value={formState.name}
                    errors={errors}
                />
            </label>
            <br />
            <label htmlFor="pizzaSize">
                Choice Of Size
                <select name="pizzaSize" onChange={inputChange}>
                    <option value="personal">Personal</option>
                    <option value="small">Small</option>
                    <option value="medium">Medium</option>
                    <option value="large">Large</option>
                </select>
            </label>

            <div>
                <h2>Choice Of Sauce</h2>
                <p>Required</p>
                <label htmlFor="original">
                    <input onChange={inputChange} name="pizzaSauce" id="original" type="checkbox"/>
                    Original Red
                </label>
                <label htmlFor="garlic">
                    <input onChange={inputChange} name="pizzaSauce" id="garlic" type="checkbox"/>
                    Garlic Ranch
                </label>
                <label htmlFor="bbq">
                    <input onChange={inputChange} name="pizzaSauce" id="bbq" type="checkbox"/>
                    BBQ Sauce
                </label>
                <label htmlFor="alfredo">
                    <input onChange={inputChange} name="pizzaSauce" id="alfredo" type="checkbox"/>
                    Spinach Alfredo
                </label>
            </div>

            
            <div>
                <h2>Add Toppings</h2>
                <label htmlFor="pepperoni">
                    <input onChange={inputChange} name="pizzaToppings" id="pepperoni" type="checkbox"/>
                    Pepperoni
                </label>
                <label htmlFor="sausage">
                    <input onChange={inputChange} name="pizzaToppings" id="sausage" type="checkbox"/>
                    Sausage
                </label>
                <label htmlFor="onions">
                    <input onChange={inputChange} name="pizzaToppings" id="onions" type="checkbox"/>
                    Onions
                </label>
                <label htmlFor="olives">
                    <input onChange={inputChange} name="pizzaToppings" id="olives" type="checkbox"/>
                    Olives
                </label>
            </div>

            <label htmlFor="instructions">
                Special Instructions
                <input 
                    id="instructions"
                    type="text"
                    name="instructions"
                    placeholder="type here"
                    onChange={inputChange}
                    value={formState.instructions}
                />
            </label>
            <br />
            <button disabled={buttonDisabled}>Submit</button>

        </form>

    )

}

export default Form