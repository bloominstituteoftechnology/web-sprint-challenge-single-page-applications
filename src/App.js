import React, { useState, useEffect } from "react";
import { Route, Link, Switch } from 'react-router-dom';
import Confirmation from "./Confirmation";
import Order from "./Order";
import Home from "./Home";
import schema from './validation/formSchema';
import * as yup from 'yup';

const initialFormValues = {
    customerName: '',
    pizzaSize: '',
    pepperoni: false,
    sausage: false,
    bacon: false,
    onion: false,
    tomato: false,
    cheese: false,
    special: ''

};

const initialFormErrors = {
    customerName: '',
    pizzaSize: ''
};

const initialDisabled = true;

export default function App()
{
    const [formValues, setFormValues] = useState(initialFormValues); // object
    const [formErrors, setFormErrors] = useState(initialFormErrors); // object
    const [confirmation, setConfirmation] = useState(initialFormValues);
    const [disabled, setDisabled] = useState(initialDisabled);       // boolean

    const setNewOrder = (newOrder) =>
    {
        setConfirmation(newOrder);
        setFormValues(initialFormValues);
    };

    const validate = (name, value) =>
    {
        yup.reach(schema, name)
            .validate(value)
            .then(() => setFormErrors({ ...formErrors, [name]: '' }))
            .catch(err => setFormErrors({ ...formErrors, [name]: err.errors[0] }));
    };

    const inputChange = (name, value) =>
    {
        validate(name, value);
        setFormValues({
            ...formValues,
            [name]: value
        });
    };

    const formSubmit = () =>
    {
        const newOrder = {
            customerName: formValues.customerName.trim(),
            pizzaSize: formValues.pizzaSize,
            toppings: ['pepperoni', 'sausage', 'bacon', 'onion', 'tomato', 'cheese'].filter(topping => !!formValues[topping]),
            special: formValues.special.trim()
        };

        setNewOrder(newOrder);
    };

    useEffect(() =>
    {
        schema.isValid(formValues).then(valid => setDisabled(!valid));
    }, [formValues]);


    return (
        <div className='container'>
            <nav>
                <h1 className='pizza-header'>Lambda Eats</h1>
                <div className='nav-links'>
                    <Link to="/">Home</Link>
                    <span> </span>
                    <Link to="/pizza">Order</Link>
                </div>
            </nav>

            <Switch>
                <Route path="/pizza">
                    <Order
                        values={formValues}
                        change={inputChange}
                        submit={formSubmit}
                        disabled={disabled}
                        errors={formErrors}
                    />
                </Route>

                <Route path="/order/confirmation">
                    <Confirmation details={confirmation} />
                </Route>

                <Route path="/">
                    <Home />
                </Route>
            </Switch>
        </div>
    );
};