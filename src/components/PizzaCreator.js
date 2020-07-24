import React, { useState } from 'react'

export default function PizzaCreator(props){
    const initialValues = {
        name: '',
        size: 1,
        peppers: false,
        olives: false,
        onions: false,
        pineapple: false,
        special: ''
    }
    const [ pizza, setPizza ] = useState(initialValues)
    const [ errors, setErrors ] = useState([])

    const onInputChange = e => {
        if(e.target.name !== 'peppers' || 'olives' || 'onions' || 'pineappls'){
            setPizza({
                ...pizza,
                [e.target.name]: e.target.value
            })
        }else{
            setPizza({
                ...pizza,
                [e.target.name]: e.target.checked
            })
        }
    }
    const onSubmitForm = e => {
        e.preventDefault()
    }

    return (
        <form>
            <label>Name
                <input type='text'
                name='name'
                placeholder='Customer Name'
                value={pizza.name}
                onChange={onInputChange}
                />
            </label>

            <select name='size' onChange={onInputChange}>
                <option value='1'></option>
                <option value='2'>18"</option>
                <option value='3'>24"</option>
                <option value='4'>Deep Dish XXL</option>
            </select><br/>

            <h2>Topping Selection</h2><br/>
            <label>Peppers
            <input type='checkbox'
            name='peppers'
            checked={pizza.peppers}
            onChange={onInputChange}
            /></label><br/>
            <label>Olives
            <input type='checkbox'
            name='olives'
            checked={pizza.olives}
            onChange={onInputChange}
            /></label><br/>
            <label>Onions
            <input type='checkbox'
            name='onions'
            checked={pizza.onions}
            onChange={onInputChange}
            /></label><br/>
            <label>Pineapple
            <input type='checkbox'
            name='pineapple'
            checked={pizza.pineapple}
            onChange={onInputChange}
            /></label><br/>

            <h2>Special Instructions</h2>
            <input type='text'
            name='special'
            value={pizza.special}
            onChange={onInputChange}
            /><br/>
            
            <button onClick={onSubmitForm}>ADD TO ORDER</button>
        </form>
    )
}