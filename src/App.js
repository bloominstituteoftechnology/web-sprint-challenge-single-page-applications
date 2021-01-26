import React, { useState } from 'react'
import { Route, Switch } from 'react-router-dom'
import axios from 'axios'
import Home from './components/Home'
import Form from './components/Form'
import Pizza from './components/Pizza'
import * as yup from 'yup'

export default function App() {

    const schema = yup.object().shape({
        name: yup.string().required('Enter your name').min(2, 'Name must be at least 2 characters long'),
        size: yup.string().required('Pick a size'),
        sauce: yup.string().required('Pick a sauce'),
        toppings: yup.boolean(),
        specialInstructions: yup.string(),
    })
    
    const blankOrder = {
        name: '',
        size: '',
        sauce: '',
        toppings: {
            cheese: false,
            pepperoni: false,
            ham: false,
            greenPeppers: false,
            pineapple: false,
            chicken: false
        },
        specialInstructions: '',
    }

    const [order, setOrder] = useState([blankOrder])
    const [errors, setErrors] = useState({...blankOrder, toppings: ''})

    const validate = e => {
        e.persist()
        yup.reach(schema, e.target.name)
        .validate(e.target.value)
        .then(() => setErrors({
            ...errors,
            [e.target.name]: ''
        }))
        .catch(err => setErrors({
            ...errors,
            [e.target.name]: err.errors[0]
        }))
    }
    
    const update = e => {
        const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value
        setOrder({
            ...order,
            [e.target.name]: value
        })
        validate(e)
        
        
    }

    const submit = () => {
        const newOrder = {
            size: order.size,
            sauce: order.sauce,
            toppings: order.toppings,
            specialInstructions: order.specialInstructions
        }

        if(!newOrder.size || !newOrder.sauce || !newOrder.toppings) return;

        axios
            .post('https://reqres.in/', newOrder)
            .then(res => {
                console.log(res)
                setOrder(blankOrder)
            })
            .catch(err => console.log(err))
    }

    return(
        <Switch>

            <Route path='/pizza'>
                <Pizza order={order}/>
            </Route>

            <Route path='/form'>
                <Form 
                    order={order}
                    update={update}
                    submit={submit}
                    errors={errors}
                />
            </Route>
            
            <Route exact path='/'>
                <Home />
            </Route>
            
        </Switch>
    )
}