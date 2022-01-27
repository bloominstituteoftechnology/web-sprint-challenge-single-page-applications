import React from 'react';
import './App.css'

export default function Form(props) {

    const {values, submit,change, errors } = props

    const onSubmit = evt => {
        evt.preventDefault()
        submit();
    }
    const onChange = evt => {
        const { name,  value, type, checked} = evt.target
        const valueToUse = type === 'checkbox' ? checked : value
        change(name, valueToUse)
    }

    return (
        <body className='form'>
        <form id='pizza-form' onSubmit={onSubmit}>
            <div>
                <h1>Build Your Pizza!</h1>
                <img 
                className='homepageImg'
                 src='https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80'
                 alt=''
                />
            </div>
            <div>
                <h4>Enter your name!</h4>
                <label>
                    <input
                    id='name-input'
                    value={values.name}
                    onChange={onChange}
                    name='name'
                    placeholder='Name'
                    type='text'
                    />
                </label>
            </div>
            <div>
                <h4>Pick your size</h4>
                <label>
                <select
                id='size-dropdown'
                name='size'
                
                value={values.size}
                onChange={onChange}
                >
                 <option value=''>-Select a size-</option> 
                 <option value='small'>Small</option>  
                 <option value='medium'>Medium</option>
                 <option value='large'>Large</option>
                </select>
               </label>
            </div>
            <div className='topping'>
               <h4>Pick your toppings</h4>
               <label>Pineapple
                <input
                type='checkbox'
                name='pineapple'
                checked={values.pineapple}
                onChange={onChange}
                />
                </label> 
                <label>Veggies
                <input
                type='checkbox'
                name='veggies'
                checked={values.veggies}
                onChange={onChange}
                />
                </label> 
                <label>Cheese
                <input
                type='checkbox'
                name='cheese'
                checked={values.cheese}
                onChange={onChange}
                />
                </label> 
                <label>Secret Toppings
                <input
                type='checkbox'
                name='secretTopping'
                checked={values.secretTopping}
                onChange={onChange}
                />
                </label> 
                
            </div>
            <div >
            <label>
                <input
                id='special-text'
                type='text'
                name='specialInstructions'
                placeholder='Special Instructions'
                checked={values.specialInstructions}
                onChange={onChange}
                />
                </label> 
            </div>
            <div className="orderBtn">
                   <button id="order-button">Add To Order</button>
            </div>
            <div className='errors'>
                <p>{errors.name}</p>
            </div>
        </form>
        </body>
    )


}