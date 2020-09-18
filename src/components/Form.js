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
    const [buttonDisabled, setButtonDisabled] = useState(false)

    let formSchema = yup.object().shape({
        name: yup.string().required("Enter Name").min(2),
        pizzaSize: yup.string().required("Select size"),
        pizzaSauce: yup.boolean().oneOf([true],"Select Sauce"),
        pineapple: yup.boolean().optional(),
        pepperoni: yup.boolean().optional(),
        bananaPeppers: yup.boolean().optional(),
        sausage: yup.boolean().optional(),
        instructions: yup.string().optional(),

    })

    useEffect(() => {
        formSchema.isValid(formState).then(valid => setButtonDisabled(!valid));
      }, [formState])

    const formSubmit = e => {
        e.preventDefault()
        if (formState) {
            props.setOrder([...props.order, {formState}])
        }


        axios 
        .post("http://regres.in/users", formState)
        .then(() => console.log("form submitted"))
        .catch(err => console.log(err))
    }

    const validateChange = e => {
        e.persist();
        yup
        .reach(formSchema, e.target.name)
        .validate(e.target.value)
        .then(() => 
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
        const value = 
        e.target.type === "checkbox" ? e.target.checked : e.target.value
        setFormState({
            ...formState,
            [e.target.name]: value
        })
        validateChange(e)
    }



    return (
        <form onSubmit = {formSubmit}>
            <label htmlForm = "name">
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
            <br />

        <label htmlForm = "pizzaSize">
            Size Options
            <select name = "pizzaSize" onChange = {inputChange}>
                <option value = "small">Small</option>
                <option value = "medium">Medium</option>
                <option value = "large">Large</option>
            </select>
        </label>

        <label htmlForm = "pizzaSauce">
            Sauce Options
            <select name = "pizzaSauce" onChange = {inputChange}>
                <option value = "original">original</option>
                <option value = "alfredo">alfredo</option>
                <option value = "bbq">barbeque</option>
            </select>
        </label>

        <div>
            <h2>Choose your toppings.</h2>
            <label htmlForm ="pineapple">
                    Pineapple
                    <input onChange={inputChange}
                    name="pineapple"
                    type="checkbox"
                    value="pineapple"
                    />
                </label>

                <label htmlForm ="pepperoni">
                    Pepperoni
                    <input onChange={inputChange}
                    name="pepperoni"
                    type="checkbox"
                    value="pepperoni"
                    />
                </label>

                <label htmlForm ="bananaPeppers">
                    Banana Peppers
                    <input onChange={inputChange}
                    name="bananaPeppers"
                    type="checkbox"
                    value="bananaPeppers"
                    />
                </label>

                <label htmlForm ="sausage">
                    Sausage
                    <input onChange={inputChange}
                    name="sausage"
                    type="checkbox"
                    value="sausage"
                    />
                </label>
        </div>

        <label htmlForm = "instructions">
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