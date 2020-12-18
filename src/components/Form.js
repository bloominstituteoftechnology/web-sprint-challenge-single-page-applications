import React, { useState, useEffect } from "react";
import * as yup from "yup";
import axios from "axios";
import styled from 'styled-components'


const FormContainer = styled.div`
  background-repeat: no-repeat;
  background-size: cover;
 
  height: 870px;
  padding-top: 30px;
  h2 {
    font-size: 2rem;
    /* margin-left: 10px;
    padding-bottom: 10px; */
    text-align: center;
    font-family:  'Courier New', Courier, monospace, monospace;
  }
  form {
    display: flex;
    flex-direction: column;
    width: 500px;
    margin: 10px auto;
    padding: 50px;
    border: 10px solid black;
    border-radius: 5px;
    background-color: white;
    height: auto;
    color: black;
  }
  label {
    display: flex;
    flex-direction: column;
    align-items: center;
    background: white;
    border: 2px solid black;
    /* justify-content: space-evenly;
    flex-wrap: wrap; */
    margin: 10px;
    font-size: 1.6rem;
  }
  button {
    width: 150px;
    background-color: black;
    background-color: black;
    color: white;
    font-size: 1.2rem;
    margin: 20px 0 0 85px;
    padding: 8px 11px;
    cursor: pointer;
    border: 2px black solid;
    border-radius: 5px;
  }
  button:disabled {
    background-color: white;
    border: 1px solid silver;
    color: gray;
    cursor: not-allowed;
  }
  pre {
    font-size: 1.5rem;
    text-align: center;
  }
 
`;



const Form = (props) => {

    const [pizzaOrder, setPizzaOrder] = useState('')

    const defaultState = {
        name: "",
        pizzaSize: "",
        pizzaSauce: false,
        pepporoni: false,
        bacon: false,
        chicken: false,
        ham: false,
        instructions: "",
    }

    const [formState, setFormState] = useState(defaultState)
    const [errors, setErrors] = useState({...defaultState})
    const [buttonDisabled, setButtonDisabled] = useState(true)

    const formSchema = yup.object().shape({
        name: yup.string().required("Enter Name").min(2),
        pizzaSize: yup.boolean().required("Select size"),
        pizzaSauce: yup.boolean().required("Select Sauce"),
        pepporoni: yup.boolean().optional(),
        bacon: yup.boolean().optional(),
        chicken: yup.boolean().optional(),
        ham: yup.boolean().optional(),
        instructions: yup.string().optional(),

    })

    const completeForm = () => {
        formSchema.isValid(formState)
          .then(isValid => {
            setButtonDisabled(!isValid)
          })
      }



    const validateChange = e => {

        yup
        .reach(formSchema, e.target.name)
        .validate(e.target.value)
        .then((valid) => { 
            setButtonDisabled(!valid)
            setErrors({
                ...errors,
                [e.target.name]: ""
            })})
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

            setPizzaOrder(JSON.stringify(res.data))
          })
          .catch(error => {
            console.log(error.response)
          })
      }


    return (
        <>
        <FormContainer>
        <form onSubmit = {formSubmit} className="form">
            <h1>Order Form</h1>
            <label htmlFor = "name">
           <h2>Name</h2>

                <input 
                id = "name"
                type = "text"
                name = "name"
                placeholder = "Enter Name"
                data-cy="name"
                onChange = {inputChange}
                value = {formState.name}
                errors = {errors}
                />
            </label>

        <label htmlFor = "pizzaSize">
            <h2>Size</h2>
            <select name = "pizzaSize" data-cy="size" onChange = {inputChange}>
                <option value = "small">Small</option>
                <option value = "medium">Medium</option>
                <option value = "large">Large</option>
            </select>
        </label>

        <label htmlFor = "pizzaSauce">
           <h2>Sauce</h2>
            <select name = "pizzaSauce" data-cy="sauce" onChange = {inputChange}>
                <option value = "original">original</option>
                <option value = "alfredo">alfredo</option>
                <option value = "bbq">barbeque</option>
            </select>
        </label>

        <div>
            <h2>Toppings</h2>
            <label htmlFor ="pepporoni">
                   Pepporoni
                    <input onChange={inputChange}
                    name="pepporoni"
                    type="checkbox"
                    value="pepporoni"
                    />
                </label>

                <label htmlFor ="bacon">
                    Bacon
                    <input onChange={inputChange}
                    name="bacon"
                    type="checkbox"
                    value="bacon"
                    data-cy="bacon"
                    />
                </label>


                <label htmlFor ="chicken">
                    Chicken
                    <input onChange={inputChange}
                    name="chicken"
                    type="checkbox"
                    value="chicken"
                    data-cy="chicken"
                    />
                </label>


                <label htmlFor ="ham">
                    Ham
                    <input onChange={inputChange}
                    name="ham"
                    type="checkbox"
                    value="ham"
                    data-cy="ham"
                    />
                </label>
        </div>
        <br />

        <label htmlFor = "instructions">
            Additional Instructions
            <input
            id = "instructions"
            type = "text"
            name = "instructions"
            placeholder = "Enter Here"
            data-cy="instructions"
            onChange = {inputChange}
            value = {formState.instructions}
            />
        </label>

        <br />

        <button data-cy="submit" disabled={buttonDisabled} type="submit">Add To Order</button>


        </form>
        <p>{pizzaOrder}</p>
        </FormContainer>
        </>
    )
}

export default Form