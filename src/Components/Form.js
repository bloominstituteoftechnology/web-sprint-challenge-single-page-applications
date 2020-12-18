import React, { useState, useEffect } from 'react'
import axios from 'axios'
import * as yup from 'yup'
import schema from '../schema'

const initalValues ={
    name: '',
    text: '',
    pizzaSize: '',
    cheese: false,
    peperoni: false,
}

const initialErrors= {
    name: '',
    text: '',
    pizzaSize: '',
}

export const Form = () => {
    const [orders, setOrders] = useState([])

    const[form, setForm] = useState(initalValues)

    const[formErrors, setFormErrors] = useState(initialErrors)

    const postNewOrder = newPizza => {
        axios.post('https://reqres.in/', newPizza)
        .then(res => {
            setOrders([res.data, ...orders])
            setForm(initialValues)
        })
    }

    const formSubmit = () => {
        const newPizza = {
            name: form.name.trim(),
            text:form.text.trim(),
            pizzaSize: form.pizzaSize,
            toppings: ['cheese', 'peperoni'].filter(item => form[item])
        }
        postNewOrder(newPizza)
    }

    const onSubmit = e => {
        e.preventDefault()
        formSubmit()
    }

    const onChange = e => {
        const {name, value, type, checked} = e.target
        const valueToUse = type === 'checkbox' ? checked : value
        inputChange(name, valueToUse)
    }

    return(
        <div>
        <form onSubmit={onSubmit}>
        <div>
            <div>{formErrors.name}</div>
            <div>{formErrors.pizzaSize}</div>
        </div>
        <label>
            Name:
            <input 
            value={form.name}
            onChange={onChange}
            name='name'
            type='text'
            />
        </label>
        <label>
            Pizza Size:
            <select id='size' onChange={onChange} value={form.pizzaSize} name='pizzaSize'>
                <option value=''>==Select a size</option>
                <option value='large'>Large</option>
                <option value='medium'>medium</option>
                <option value='small'>small</option>
            </select>
        </label>
        <label>
            Cheese
            <input
                type="checkbox"
                name="cheese"
                checked={form.cheese}
                onChange={onChange}
            />
        </label>
    

        <label>
            Peperoni
            <input
                type="checkbox"
                name="peperoni"
                checked={form.peperoni}
                onChange={onChange}
            />
        </label>
        <label>
            Special Instructions:
            <input 
            value={form.text}
            onChange={onChange}
            name='text'
            type='text'
            />
        </label>
        <button id='submit-btn'>Order</button>
        
        </form>
        
        
    </div>
    )
}