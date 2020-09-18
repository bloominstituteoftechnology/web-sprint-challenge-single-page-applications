import React, { useState, useEffect } from "react";
import * as yup from "yup";
import axios from "axios";
import styled from 'styled-components'


const FormContainer = styled.div`
  background-repeat: no-repeat;
  background-size: cover;
  background-image: url( https://cdn.pixabay.com/photo/2020/03/25/21/05/pizza-4968645__340.jpg);
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
    background: lightgrey;
    border: 2px dotted darkslategrey;
    /* justify-content: space-evenly;
    flex-wrap: wrap; */
    margin: 10px;
    font-size: 1.6rem;
    font-family: "Courier New", 'Courier New', Courier, monospace, monospace;
  }
  button {
    width: 150px;
    background-color: black;
    background-color: greenyellow;
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
    //   useEffect(completeForm, [formState])
    // useEffect(() => {
    //     formSchema.isValid(formState).then(valid => setButtonDisabled(!valid));
    //   }, [formState])


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
            <h1>Order your pizza!</h1>
            <label htmlFor = "name">
           <h2> Enter Name Here</h2>
           
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

            {/* <br /> */}

        <label htmlFor = "pizzaSize">
            <h2>Size Options</h2>
            <select name = "size" data-cy="size" onChange = {inputChange}>
                <option value = "small">Small</option>
                <option value = "medium">Medium</option>
                <option value = "large">Large</option>
            </select>
        </label>

        <label htmlFor = "pizzaSauce">
           <h2>Select Sauce</h2>
            <select name = "pizzaSauce" data-cy="sauce" onChange = {inputChange}>
                <option value = "original">original</option>
                <option value = "alfredo">alfredo</option>
                <option value = "bbq">barbeque</option>
            </select>
        </label>

        <div>
            <h2>Choose your toppings.</h2>
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
                    data-cy="pepperoni"
                    />
                </label>
              

                <label htmlFor ="bananaPeppers">
                    Banana Peppers
                    <input onChange={inputChange}
                    name="bananaPeppers"
                    type="checkbox"
                    value="bananaPeppers"
                    data-cy="bananaPeppers"
                    />
                </label>
                

                <label htmlFor ="sausage">
                    Sausage
                    <input onChange={inputChange}
                    name="sausage"
                    type="checkbox"
                    value="sausage"
                    data-cy="sausage"
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

        <button data-cy="submit" disabled={buttonDisabled} type="submit">Submit</button>

        {/* <pre>{JSON.stringify(post, null, 2)}</pre> */}

        </form>
        <p>{pizzaOrder}</p>
        </FormContainer>
        </>
    )
}

export default Form