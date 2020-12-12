import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import * as yup from 'yup';
import axios from 'axios';

function PizzaForm() {
const [pizzaForm, setPizzaForm] = useState({
    name: '',
    size: 'small',
    pepperoni: false,
    pineapple: false,
    anchovies: false,
    ham: false,
    sausage: false,
    instructions: ''
})
const [disabled, setDisabled] = useState(true);
const [order, setOrder] = useState();
const [serverError, setServerError] = useState([]);
const [inlineError, setInlineError] = useState({
    name: ''
});
const handleNameChange = e => {
    e.persist();
    validate(e);
    setPizzaForm({...PizzaForm, [e.target.name]: e.target.value})
}
const handleChange = e => {
    e.persist();
    setPizzaForm({...pizzaForm, [e.target.name]: e.target.type === 'checkbox' ? e.target.checked : e.target.value})
}
const handleSubmit = e => {
    e.preventDefault();
    axios.post('https://reqres.in/api/users', pizzaForm)
    .then((res) => {
        setOrder(res.data);
        setServerError(null);
        setPizzaForm({
            name: '',
            size: 'small',
            pepperoni: false,
            pineapple: false,
            anchovies: false,
            ham: false,
            sausage: false,
            instructions: ''
        });
    })
    .catch((err) => {
        setServerError('Uh oh, something is wrong');
    });
};
const formSchema = yup.object().shape({
    name: yup.string().required('must provide a name').min(2, 'must have more than two characters')
});
useEffect(() => {
    formSchema.isValid(pizzaForm).then((valid) => {
        setDisabled(!valid);
    });
}, [pizzaForm]);
const validate = e => {
    yup
        .reach(formSchema, e.target.name)
        .validate(
            e.target.type === 'checkbox' ? e.target.checked : e.target.value
        )
        .then((valid) => {
    setInlineError({...inlineError, [e.target.name]: ''});
        })
        .catch((err) => {
            setInlineError({...inlineError, [e.target.name]: err.errors[0]})
        })
}
return (
    <form onSubmit={handleSubmit}>
        {serverError && <p>{serverError}</p>}

        <h1>Pizza Time!</h1>
        <Link to='/'>
            <button>Back to Home</button>
        </Link>
        <label htmlFor='name'>Name: </label>
        <input
            id='name'
            name='name'
            placeholder='first and last name'
            value={pizzaForm.name}
            onChange={handleNameChange}
        />
        {inlineError.name && <p>{inlineError.name}</p>}
        <label htmlFor='size'>Size: </label>
        <select id='size' name='size' value={pizzaForm.size} onChange={handleChange}>
            <option value='small'>Twelve inch</option>
            <option value='medium'>Sixteen inch</option>
            <option value='large'>Twenty inch</option>
            <option value='extra-large'>Twenty-four inch</option>
        </select>
        <h2>Toppings</h2>
        <label htmlFor='pepperoni'>Pepperoni: </label>
        <input 
        type='checkbox'
        id='pepperoni' 
        name= 'pepperoni'
        checked={pizzaForm.pepperoni}
        onChange={handleChange}
        />
        <label htmlFor='pineapple'>Pineapple: </label>
        <input 
        type='checkbox'
        id='pineapple' 
        name= 'pineapple'
        checked={pizzaForm.pineapple}
        onChange={handleChange}
        />
        <label htmlFor='anchovies'>Anchovies: </label>
        <input 
        type='checkbox'
        id='anchovies' 
        name= 'anchovies'
        checked={pizzaForm.anchovies}
        onChange={handleChange}
        />
        <label htmlFor='ham'>Ham: </label>
        <input 
        type='checkbox'
        id='ham' 
        name= 'ham'
        checked={pizzaForm.ham}
        onChange={handleChange}
        />
        <label htmlFor='sausage'>Sausage: </label>
        <input 
        type='checkbox'
        id='sausage' 
        name= 'sausage'
        checked={pizzaForm.sausage}
        onChange={handleChange}
        />
        <textarea
        id='instructions'
        name='instructions'
        placeholder='Other instructions?'
        value={pizzaForm.instructions}
        onChange={handleChange}
        />
        <button id='orderButton' disabled={disabled}>Add to order</button>
        <pre>{JSON.stringify(order, null, 2)}</pre>
    </form>
)
}
export default PizzaForm;