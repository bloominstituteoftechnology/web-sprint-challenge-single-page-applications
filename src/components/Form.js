import React from 'react'
import { Link } from 'react-router-dom'

export default function Form(props) {
    const { order, update, submit } = props

    const onChange = evt => {
        const name = evt.target.name
        const value = evt.target.type === 'checkbox' ? evt.target.checked : evt.target.value
        update(name, value)
    }

    const onSubmit = evt => {
        evt.preventDefault()
        submit()
    }

return(
    <form className='formContainer' onSubmit={onSubmit}>
        <nav>
            <Link to='/'>Home</Link>
        </nav>
        <h1>Build Your Own Pizza</h1>
        <img 
            src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHH9dtENUkufgfi_jz-quw_b5lHbgSFbn3_g&usqp=CAU'
            alt=''
        />
        <div className='inputs'>
            <label>Choice of Size
                <select value={order.size} name='size' onChange={onChange}>
                    <option value=''>---Select A Size---</option>
                    <option value='small'>Small</option>
                    <option value='medium'>Medium</option>
                    <option value='large'>Large</option>
                    <option value='xl'>Extra Large</option>
                </select>
            </label>

            <label>Choice of Sauce
                <select value={order.sauce} name='sauce' onChange={onChange}>
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
                    value={order.toppings}
                    onChange={onChange}
                />
            </label>

            <label>Pepperoni
                <input
                    name='pepperoni'
                    type='checkbox'
                    value={order.toppings}
                    onChange={onChange}
                />
            </label>

            <label>Ham
                <input
                    name='ham'
                    type='checkbox'
                    value={order.toppings}
                    onChange={onChange}
                />
            </label>

            <label>Green Peppers
                <input
                    name='greenPeppers'
                    type='checkbox'
                    value={order.toppings}
                    onChange={onChange}
                />
            </label>

            <label>Pineapple
                <input
                    name='pineapple'
                    type='checkbox'
                    value={order.toppings}
                    onChange={onChange}
                />
            </label>

            <label>Chicken
                <input
                    name='chicken'
                    type='checkbox'
                    value={order.toppings}
                    onChange={onChange}
                />
            </label>
            </label>

            <label>Special Instructions
                <input
                    name='specialInstructions'
                    type='text'
                    placeholder='Enter Special Instructions'
                    value={order.specialInstructions}
                    onChange={onChange}
                />
            </label>
        </div>

        <Link to='/pizza'>Add to Order</Link>

    </form>
)
}