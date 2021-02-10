import React, { useState } from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import Form from './components/Form';
import Pizza from './components/Pizza';
import axios from 'axios';

export default function App() {
    
    const defaultOrder = {
        name: '',
        phone: '',
        size: '',
        sauce: '',
        pepperoni: false,
        ham: false,
        greenPeppers: false,
        pineapple: false,
        specialInstructions: ''
    };

    const [order, setOrder] = useState(defaultOrder);

    const updateForm = (name, value) => {
        setOrder({...order, [name]: value})
    };

    const submitForm = () => {
        const newOrder = {
            name: order.name,
            phone: order.phone,
            size: order.size,
            sauce: order.sauce,
            pepperoni: order.pepperoni,
            ham: order.ham,
            greenPeppers: order.greenPeppers,
            pineapple: order.pineapple,
            specialInstructions: order.specialInstructions
        };

        if(!newOrder.size || !newOrder.sauce || !newOrder.toppings) return;

        axios
            .post('https://reqres.in/', newOrder)
            .then(res => {
                console.log(res)
                setOrder(defaultOrder)
            })
            .catch(err => console.log(err))
    };

    return(
        <div className='homeContainer'>

            <Switch>

                <Route path='/pizza'>
                    <Pizza />
                </Route>

                <Route path='/form'>
                    <Form 
                        order={order}
                        update={updateForm}
                        submit={submitForm}
                        />
                </Route>

                <Route path='/'>
                    <Home />
                </Route>

            </Switch> 

        </div>
    )
}