import React, { useState } from 'react'
import { Route, Switch } from 'react-router-dom'
import axios from 'axios'
import Home from './components/Home'
import Form from './components/Form'
import Pizza from './components/Pizza'

export default function App() {
    
    const blankOrder = {
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
    
    const update = (name, value) => {
        setOrder({...order, [name]: value})
        
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
                />
            </Route>
            
            <Route exact path='/'>
                <Home />
            </Route>
            
        </Switch>
    )
}