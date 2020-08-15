import React, { useState, useEffect } from 'react';
import * as yup from "yup";
import axios from 'axios';

const Form = props => {
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
        <form>
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
                <select name="pizzaSize">
                    <option value="8 inch">8 inch</option>
                    <option value="12 inch">12 inch</option>
                    <option value="16 inch">16 inch</option>
                    <option value="20 inch">20 inch</option>
                </select>
            </label>

            <div>
                <h2>Add Toppings</h2>
                <label htmlFor="pepperoni">
                    <input name="pepperoni" type="checkbox"/>
                    Pepperoni
                </label>
                <label htmlFor="sausage">
                    <input name="sausage" type="checkbox"/>
                    Sausage
                </label>
                <label htmlFor="onions">
                    <input name="onions" type="checkbox"/>
                    Onions
                </label>
                <label htmlFor="olives">
                    <input name="olives" type="checkbox"/>
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
                />
            </label>
            <br />
            <button>Order</button>

        </form>

    )

}

export default Form 