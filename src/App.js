import React, { useState } from 'react'
import { Link, Route } from 'react-router-dom'
import Form from './components/Form'
import axios from 'axios'

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
    }
    const [values, setValues] = useState(initialFormValues)

    const updateForm = (inputName, inputValue) => {
        setValues({...values, [inputName]: inputValue})
    }

    const submitForm = () => {
        const newOrder = {
            size: values.size,
            sauce: values.sauce,
            toppings: values.toppings,
            specialInstructions: values.specialInstructions
        }

        if(!newOrder.size || !newOrder.sauce || !newOrder.toppings) return;

        axios
            .post('https://reqres.in/', newOrder)
            .then(res => {
                console.log(res)
                setValues(initialFormValues)
            })
            .catch(err => console.log(err))
    }

    return(
        <div className='homeContainer'>
            <h1>Lambda Eats</h1>
            <p>Pizza delivered hot to your door</p>
            <img 
                src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8ye68MxcWs4pHKOnv5Z1AbcIZ_n-C1Z8wtg&usqp=CAU' 
                alt=''
            />
            <Link 
                to='/form'
                className='orderButton'
            >
            Order Now!   
            </Link>

            <Route path='/form'>
                <Form 
                    values={values}
                    update={updateForm}
                    submit={submitForm}
                    />
            </Route>
            
        </div>
    )
}