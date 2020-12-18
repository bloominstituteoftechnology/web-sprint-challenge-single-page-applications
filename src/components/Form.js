import React, {useState, useEffect} from 'react'
import axios from "axios";
import * as yup from "yup";
import schema from '../schema';

const initialValues = {
    name: '',
    text: '',
    pizzaSize: '',
    cheese: false,
    peperoni: false,
    chicken: false
}

const initialErrors = {
    name: '',
    text: '',
    pizzaSize: ''
}

export  const Form = () => {

    const [orders, setOrders] = useState([])

    const [form, setForm] = useState(initialValues)

    const [formErrors, setFormErrors] = useState(initialErrors)

    const [disabled, setDisabled] = useState(true)

    const postNewOrder = newPizza => {
        axios.post('https://reqres.in/api/users', newPizza)
        .then(res => {
            setOrders([res.data, ...orders])
            setForm(initialValues)
        })
    }

    const inputChange = (name, value) => {
        
        yup.reach(schema,name)
        .validate(value)
        .then(() => {
            setFormErrors({
                ...formErrors,[name]: ''
            })
        })
        .catch((err) => {
            setFormErrors({
              ...formErrors,
              [name]: err.errors[0],
            })
          })

        setForm({
            ...form, [name]: value
        })
    }

    const formSubmit = () => {
        const newPizza = {
            name: form.name.trim(),
            text:form.text.trim(),
            pizzaSize: form.pizzaSize,
            toppings: ['cheese', 'chicken', 'peperoni'].filter(item => form[item])
        }

        postNewOrder(newPizza)
    }

    useEffect(() => {
        schema.isValid(form).then((valid) => {
          setDisabled(!valid);
        });
      }, [form]);

    const onSubmit = e => {
        e.preventDefault()
        formSubmit()
    }

    const onChange = e => {
        const {name, value, type, checked} = e.target
        const valueToUse = type === 'checkbox' ? checked : value
        inputChange(name, valueToUse)
    }
    
    return (
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
                Chicken
                <input
                    type="checkbox"
                    name="chicken"
                    checked={form.chicken}
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
            <button id='submit-btn' disabled={disabled}>Order</button>
            </form>
            <div>
                {orders.map(item => 
                 <div key={item.id}>
                    <h1>Name: {item.name}</h1>
                    <p>Special Instructions: {item.text}</p>
                    <p>Size: {item.pizzaSize}</p>
                    <p>Toppings: {item.toppings}</p>
                    <p>Order Date: {item.createdAt}</p>
                 </div>)}
            </div>
        </div>
    )
};