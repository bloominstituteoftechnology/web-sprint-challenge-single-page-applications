import React, { useState } from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import Form from './components/Form';
import Pizza from './components/Pizza';
import axios from 'axios';

export default function App() {
    
    const initialFormValues = {
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
        specialInstructions: ''
    };

    const [values, setValues] = useState(initialFormValues);

    const updateForm = (inputName, inputValue) => {
        setValues({...values, [inputName]: inputValue})
    };

    const submitForm = () => {
        const newOrder = {
            size: values.size,
            sauce: values.sauce,
            toppings: values.toppings,
            specialInstructions: values.specialInstructions
        };

        if(!newOrder.size || !newOrder.sauce || !newOrder.toppings) return;

        axios
            .post('https://reqres.in/', newOrder)
            .then(res => {
                console.log(res)
                setValues(initialFormValues)
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
                        values={values}
                        update={updateForm}
                        submit={submitForm} />
                </Route>

                <Route path='/'>
                    <Home />
                </Route>

            </Switch> 

        </div>
    )
}