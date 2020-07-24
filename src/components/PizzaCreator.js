import React, { useState } from 'react'
import { pizzaSchema } from './Schemas'

export default function PizzaCreator(props){
    const initialValues = {
        name: '',
        size: '',
        peppers: false,
        olives: false,
        onions: false,
        pineapple: false,
        special: ''
    }
    const [ pizza, setPizza ] = useState(initialValues)
    const [ errors, setErrors ] = useState([])

    const onInputChange = e => {
        console.dir(e.target)
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
        pizzaSchema.validate(pizza, { abortEarly: false })
        .then( _ => {
            if(errors.length > 0){
                setErrors([])}
            props.setAllPizzas([...props.allPizzas, pizza])
            setPizza(initialValues)
        })
        .catch(err => {
            console.dir(err)
            setErrors([...err.inner])
        })
        console.log(pizza)
        console.log(pizza.peppers)
        console.log(props.allPizzas)
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

            <select name='size' 
            onChange={onInputChange} 
            value={pizza.size.value}
            className='size'>
                <option value=''></option>
                <option value='18"'>18"</option>
                <option value='24"'>24"</option>
                <option value='Deep Dish XXL'>Deep Dish XXL</option>
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
            className='special'
            value={pizza.special}
            onChange={onInputChange}
            /><br/>
            
            <button onClick={onSubmitForm}>ADD TO ORDER</button>
            <div>
                {errors.map( err => (  
                    <p style={{color: "red"}}>{err.message}</p>
                ))}
            </div>
        </form>
    )
}