import React from 'react'
import { Route, Link } from 'react-router-dom'
import Pizza from './Pizza'

export default function Form(props) {
    const { values, update, submit } = props

    const onChange = evt => {
        const name = evt.target.name
        const value = evt.target.value
        update(name, value)
    }

    const onSubmit = evt => {
        evt.preventDefault()
        submit()
    }

    
return(
    <form className='formContainer' onSubmit={onSubmit}>
        <h1>Build Your Own Pizza</h1>
        <img 
            src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHH9dtENUkufgfi_jz-quw_b5lHbgSFbn3_g&usqp=CAU'
            alt=''
        />

        <div className='inputs'>
            <label>Choice of Size
                <select value={values.size} name='size' onChange={onChange}>
                    <option value=''>---Select A Size---</option>
                    <option value='small'>Small</option>
                    <option value='medium'>Medium</option>
                    <option value='large'>Large</option>
                    <option value='xl'>Extra Large</option>
                </select>
            </label>

            <label>Choice of Sauce
                <select value={values.sauce} name='sauce' onChange={onChange}>
                    <option value=''>---Select A Sauce---</option>
                    <option value='marinara'>Marinara</option>
                    <option value='alfredo'>Alfredo</option>
                    <option value='bbq'>BBQ</option>
                    <option value='none'>No Sauce</option>
                </select>
            </label>

            <label>Choice of Toppings:
            <label>Cheese
                <input
                    name='cheese'
                    type='checkbox'
                    value={values.toppings.cheese}
                    onChange={onChange}
                />
            </label>

            <label>Pepperoni
                <input
                    name='pepperoni'
                    type='checkbox'
                    value={values.toppings.pepperoni}
                    onChange={onChange}
                />
            </label>

            <label>Ham
                <input
                    name='ham'
                    type='checkbox'
                    value={values.toppings.ham}
                    onChange={onChange}
                />
            </label>

            <label>Green Peppers
                <input
                    name='greenPeppers'
                    type='checkbox'
                    value={values.toppings.greenPeppers}
                    onChange={onChange}
                />
            </label>

            <label>Pineapple
                <input
                    name='pineapple'
                    type='checkbox'
                    value={values.toppings.pineapple}
                    onChange={onChange}
                />
            </label>

            <label>Chicken
                <input
                    name='chicken'
                    type='checkbox'
                    value={values.toppings.chicken}
                    onChange={onChange}
                />
            </label>
            </label>

            <label>Special Instructions
                <input
                    name='specialInstructions'
                    type='text'
                    placeholder='Enter Special Instructions Here'
                    value={values.specialInstructions}
                    onChange={onChange}
                />
            </label>
        </div>

        <Link to='/pizza'>Add to Order</Link>

        <Route path='/pizza'>
            <Pizza />
        </Route>

    </form>
)
}