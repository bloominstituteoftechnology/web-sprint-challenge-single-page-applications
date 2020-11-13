import React, {useState, useEffect} from 'react'
import schema from '../validation/formSchema'
import axios from 'axios'
import * as yup from 'yup'


import './Formpage.css'
// Component for pushing susccesfully
import history from '../components/History'
// components form
import Form from '../components/FormPage'

function Formpage() {
    const initFormValues = {
        name: '',
        pizzaSize: '',
        peperoni: false,
        cheese: false,
        bacon: false,
        mushroom: false,
        chocolate: false,
        specialInstructions: '',

    }

    const initFormErrors = {
        name: '',
        pizzaSize: '',
        specialInstructions: ''
    }

    const initalDisabled = true;
    const initialOrders = []

    const [formValues, setFormValues] = useState(initFormValues)
    const [orders, setOrders] = useState(initialOrders)
    const [formErrors, setFormErrors] = useState(initFormErrors)
    const [disabled, setDisabled] = useState(initalDisabled)

    const getOrders = () => {
        axios.get('https://jsonbox.io/box_b4b9db838a7fdfab8aee')
            .then(res => console.log(res.data))
            .catch(err => console.log(err))
    }

    const postOrder = (order) => {
        axios.post('https://jsonbox.io/box_b4b9db838a7fdfab8aee',order)
            .then(res => {
                setOrders([...orders,res.data])
                console.log(orders)
            })
            .catch(err => console.log(err))
    }

    const validate = (name, value) => {
        yup
        .reach(schema, name)
        .validate(value)
        .then(valid => {
            setFormErrors({
                ...formErrors,
                [name]: ""
            })
        })
        .catch(err => {
            setFormErrors({
                ...formErrors,
                [name]: err.errors[0]
            })
        })
    }


    const onChange = (name, value) => {
        validate(name,value)
        setFormValues({
            ...formValues,
            [name]:value
        })
    }

    const formSubmit = () => {
        const newOrder = {
            name: formValues.name.trim(),
            pizzaSize: formValues.pizzaSize.trim(),
            specialInstructions: formValues.specialInstructions.trim(),
            toppings: ['peperoni','cheese','bacon','mushroom','chocolate'].filter(t =>formValues[t])
        }
        postOrder(newOrder)
        // Will push to the success page if order was successful
        history.push('/success')
    }

    useEffect(() => {
        getOrders()
    },[])

    useEffect(() => {
        schema.isValid(formValues).then(valid => {
            setDisabled(!valid)
        })
    },[formValues])


    return (
        <section className="pizza-section">
            <div className="pizza-container">
                <h2>Build you own Pizza</h2>
                <div className="Hero">
                    {/* Image background here */}
                </div>
                <div className="Pizza-buidler-3000">
                    <h3>Build your pizza</h3>
                    <Form values={formValues} change={onChange} submit={formSubmit} errors={formErrors} disabled={disabled} />
                </div>
            </div>

        </section>
    )
}

export default Formpage
