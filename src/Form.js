import React, { useEffect, useState } from 'react'
import { render } from 'react-dom'
import App from './App'
import styled from 'styled-components'
import { findAllByDisplayValue } from '@testing-library/react'
import schema from "../src/schemas/formSchema"
import * as yup from "yup"

const initialToppings = {
    onion: false,
    pepperoni: false,
    mushroom: false,
    sausage: false,
    greenPepper: false,
    canadianHam: false,
    grilledChicken: false,
    arugula: false,
    blackOlives: false,
    bacon: false
}

const initialFormErrors = {
    name: "",
    size: "",
    gluttenFree: ""
  }
  
function Form() {
    const [name, setName] = useState('')
    const [size, setSize] = useState('')
    const [topping, setTopping] = useState(initialToppings)
    const [gluttenFree, setGluttenFree] = useState(false)
    const [specialInstructions, setSpecialInstructions] = useState('')
    const [formErrors, setFormErrors] = useState(initialFormErrors)
    const [newOrder, setNewOrder] = useState('')
    const [formValues, setFormValues] = useState({})
  
    const onChange = evt => {
        console.log(true)
    }

    const onChangeInput = evt => {
      const { name, value } = evt.target
      validate(evt.target.name, evt.target.value)
      setFormValues({...formValues, [name]: value})
      console.log(name, value)
    }

    const onChangeCheckbox = evt => {
        const { name, checked } = evt.target
        console.log(name, checked)
        setTopping({...topping, [name]: checked})
        setNewOrder({...newOrder, [name]: checked})
    }

    const validate = (name, value) => {
        yup
          .reach(schema, name)
          .validate(value)
          .then((valid)=>{
            setFormErrors({
              ...formErrors, [name]: "",
            })
          })
          .catch((err)=>{
            setFormErrors({
              ...formErrors, [name]: err.errors[0]
            })
          })
      }

    const submit = evt => {
      evt.preventDefault()
      console.log(gluttenFree)

      const orderDetails = {
        name: formValues.name,
        size: formValues.size,
        topping: formValues.topping,
        gluttenFree: formValues.gluttenFree,
        specialInstructions: formValues.specialInstructions
      }

      setNewOrder(orderDetails)
    }
  
    useEffect(() => {
        
    }, [])
    
    return (
    <StyledForm>
        <div className="form">
            <h1>Build Your Own Pizza</h1>
            <hr />
            <img src="https://st.depositphotos.com/1003814/5052/i/450/depositphotos_50523105-stock-photo-pizza-with-tomatoes.jpg" alt="" />
        </div>
        <br />
    <div className='info'>
        <input 
            type='text' 
            name='name' 
            onChange={onChangeInput}
            value={formValues.name}
            placeholder='Name' 
        />
        <input
            type='email' 
            name='email' 
            onChange={onChangeInput}
            value={formValues.email}
            placeholder='email' 
        />
    </div>
        <h4>Choose Your Pizza Size</h4>
        <select className='size'
            type='text' 
            name='size' 
            onChange={onChange}
            // value={formValues.size}>
            >
              <option value=''>:::Select:::</option>
              <option value='Bambino'>Bambino</option>
              <option value='Piccola'>Piccola</option>
              <option value='Media'>Media</option>
              <option value='Grande'>Grande</option>
              <option value='Gigantesca'>Gigantesca</option>  
           </select>
        <div className='toppings'>
            <h4>Choose Your Toppings</h4>
            <span>Choose up to 5</span>
            <br />
            <label>Onion</label>
            <input className='checkboxTop'
                type='checkbox'
                name='onion'
                // checked={topping.onion}
                value='onion'
                onChange={onChangeCheckbox}
            />
            <label>Pepperoni</label>
            <input className='checkboxTop'
                type='checkbox'
                name='pepperoni'
                value='pepperoni'
                //checked={topping.pepperoni}
                onChange={onChangeCheckbox}
            />
            <label>Mushroom</label>
            <input className='checkboxTop'
                type='checkbox'
                name='Mushroom'
                //checked={topping.mushroom}
                onChange={onChangeCheckbox}
            />
            <label>Sausage</label>
            <input className='checkboxTop'
                type='checkbox'
                name='Sausage'
                //checked={topping.sausage}
                onChange={onChangeCheckbox}
            />
            <label>Green Pepper</label>
            <input className='checkboxTop'
                type='checkbox'
                name='Green Pepper'
                //checked={topping.greenPepper}
                onChange={onChangeCheckbox}
            />
            <label>Canadian Ham</label>
            <input className='checkboxBottom'
                type='checkbox'
                name='Canadian Ham'
                //checked={topping.canadianHam}
                onChange={onChangeCheckbox}
            />
            <label>Bacon</label>
            <input className='checkboxBottom'
                type='checkbox'
                name='Bacon'
                //checked={topping.bacon}
                onChange={onChangeCheckbox}
            />
            <label>Grilled Chicken</label>
            <input className='checkboxBottom'
                type='checkbox'
                name='Grilled Chicken'
                //checked={topping.grilledChicken}
                onChange={onChangeCheckbox}
            />
            <label>Black Olives</label>
            <input className='checkboxBottom'
                type='checkbox'
                name='Black Olives'
                //checked={topping.blackOlives}
                onChange={onChangeCheckbox}
            />
            <label>Arugula</label>
            <input className='checkboxBottom'
                type='checkbox'
                name='Arugula'
                //checked={topping.arugula}
                onChange={onChangeCheckbox}
            />
            <br />
        </div>
        <div className='gluttenFree'>
        <h4>Glutten Free Option</h4>
            <label>Yes</label>
                <input
                    type='radio'
                    name='option'
                    checked={gluttenFree}
                    onChange={() => setGluttenFree(true)}
                />    
            <label>No</label>
                <input
                    type='radio'
                    name='option'
                    checked={!gluttenFree}
                    onChange={() => setGluttenFree(false)}
                />  
                <br /> 
            <h4>Special Instructions</h4> 
            <input className='specialIns'
                type='text' 
                name='specialInstructions' 
                onChange={onChangeInput}
                value={formValues.memberFirstName}
                placeholder='Anything you would like to add?' 
            />
        </div>
        <br />
        <button onClick={submit}>Submit Your Order</button>
    </StyledForm>    
    )
}

const StyledForm = styled.form `
img {
    display: block;
    margin-left: auto;
    margin-right: auto;
    /* opacity: 75%; */
    border-radius: 15px;
    box-shadow: 5px 5px 5px whitesmoke;
    text-align: center;
}

/* .checkboxTop, .checkboxBottom {
    display: flex;
    justify-content: space-between;
    margin: 25px;
    font-family: 'Montserrat', sans-serif;
} */

.info > input, .specialIns{
    border-radius: 15px;
    font-family: 'Montserrat', sans-serif;
    padding: 10px;
    width: 300px;
    background-color: white;
    color: black;
    text-align: center;
    &:hover{
        background-color: slategrey;
        color: greenyellow;
        cursor: pointer;
    }
    &:focus {
        border: gray;
        outline: none;
        }
    &:active {
        border: gray;
        outline: none;
    }
}

.size, button {
    border-radius: 15px;
    font-family: 'Montserrat', sans-serif;
    padding: 10px;
    width: 150px;
    background-color:greenyellow;
    color: black;
    text-align:center;
    &:hover{
        background-color: slategrey;
        color: greenyellow;
        cursor: pointer;
    }
    &:focus {
        border: gray;
        outline: none;
        }
    &:active {
        border: gray;
        outline: none;
    }
}

/* .specialIns {
    width: 500px;
    color: black; 
} */

span {
    font-style: italic;
    text-shadow: 2px 2px 2px darkgray;
}
`
export default Form