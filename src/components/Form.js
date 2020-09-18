import React, { useState, useEffect } from "react";
import * as yup from "yup";
import axios from "axios";


const Form = (props) => {

    const defaultState = {
        name: "",
        pizzaSize: "",
        pizzaSauce: false,
        pineapple: false,
        pepperoni: false,
        bananaPeppers: false,
        sausage: false,
        instructions: "",
    }

    const [formState, setFormState] = useState(defaultState)
    const [errors, setErrors] = useState({...defaultState})
    const [buttonDisabled, setButtonDisabled] = useState(true)

    const formSchema = yup.object().shape({
        name: yup.string().required("Enter Name").min(2),
        pizzaSize: yup.string().required("Select size"),
        pizzaSauce: yup.boolean().required("Select Sauce"),
        pineapple: yup.boolean().optional(),
        pepperoni: yup.boolean().optional(),
        bananaPeppers: yup.boolean().optional(),
        sausage: yup.boolean().optional(),
        instructions: yup.string().optional(),

    })

    const completeForm = () => {
        formSchema.isValid(formState)
          .then(isValid => {
            setButtonDisabled(!isValid)
          })
      }
      useEffect(completeForm, [formState])
    // useEffect(() => {
    //     formSchema.isValid(formState).then(valid => setButtonDisabled(!valid));
    //   }, [formState])


    const validateChange = e => {
       
        yup
        .reach(formSchema, e.target.name)
        .validate(e.target.value)
        .then((valid) => 
            setErrors({
                ...errors,
                [e.target.name]: ""
            }))
            .catch(error =>
                setErrors({
                    ...errors,
                    [e.target.name]: error.errors[0]
                }))
        
    }

    const inputChange = e => {
        e.persist()
        const value = {
            ...formState,
            [e.target.name]: e.target.type === 'checkbox' ? e.target.checked : e.target.value
          }
        validateChange(e)
        setFormState(value)
    }

    const formSubmit = e => {
        e.preventDefault()
        axios
          .post('https://reqres.in/api/users', formState)
          .then(res => {
         
            setFormState({
              name: '',
              pizzaSize: true,
              pizzaSauce: true,
              
            })
          })
          .catch(error => {
            console.log(error.response)
          })
      }


    return (
        <form onSubmit = {formSubmit} className="form">
            Enter Name Here
            <label htmlFor = "name">
                <input 
                id = "name"
                type = "text"
                name = "name"
                placeholder = "Enter Name"
                onChange = {inputChange}
                value = {formState.name}
                errors = {errors}
                />
            </label>

            <br />

        <label htmlFor = "pizzaSize">
            Size Options
            <select name = "pizzaSize" onChange = {inputChange}>
                <option value = "small">Small</option>
                <option value = "medium">Medium</option>
                <option value = "large">Large</option>
            </select>
        </label>

        <label htmlFor = "pizzaSauce">
            Sauce Options
            <select name = "pizzaSauce" onChange = {inputChange}>
                <option value = "original">original</option>
                <option value = "alfredo">alfredo</option>
                <option value = "bbq">barbeque</option>
            </select>
        </label>

        <div>
            <p>Choose your toppings.</p>
            <label htmlFor ="pineapple">
                    Pineapple
                    <input onChange={inputChange}
                    name="pineapple"
                    type="checkbox"
                    value="pineapple"
                    />
                </label>

                <label htmlFor ="pepperoni">
                    Pepperoni
                    <input onChange={inputChange}
                    name="pepperoni"
                    type="checkbox"
                    value="pepperoni"
                    />
                </label>
                <br />

                <label htmlFor ="bananaPeppers">
                    Banana Peppers
                    <input onChange={inputChange}
                    name="bananaPeppers"
                    type="checkbox"
                    value="bananaPeppers"
                    />
                </label>
                <br />

                <label htmlFor ="sausage">
                    Sausage
                    <input onChange={inputChange}
                    name="sausage"
                    type="checkbox"
                    value="sausage"
                    />
                </label>
        </div>
        <br />

        <label htmlFor = "instructions">
            Any added instructions here
            <input
            id = "instructions"
            type = "text"
            name = "instructions"
            placeholder = "Enter Here"
            onChange = {inputChange}
            value = {formState.instructions}
            />
        </label>

        <br />

        <button disabled={buttonDisabled} type="submit">Submit</button>

        </form>
    )
}

export default Form