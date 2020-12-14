import React from 'react'

export default function Form(props) {
    const { submit, change, form, disable } = props
    const onSubmit = evt => {
        evt.preventDefault();
        submit();
    }

    const onChange = evt => {
        const { name, value, type, checked } = evt.target;
        const valueToUse = type === 'checkbox' ? checked: value;
        change(name, valueToUse)
    }

    return (
        <div className='formDiv'>
            <form onSubmit={onSubmit}>
                <label>Name:
                    <input onChange={onChange} value={form.name} name='name' type='text' />
                </label>

                <select onChange={onChange} value={form.size} name='size'>Size Selection
                <option value=''>Select</option>
                <option value='1'>Small: 10 in, 6 slice</option>
                <option value='2'>Medium: 12 in, 8 slice</option>
                <option value='3'>Large: 14 in, 10 slice</option>
                <option value='4'>Extra-Large: 18 in, 12 slice</option>
                </select>

                <label><h3>Topping Selection</h3>
                
                <label>Pepperoni
                    <input type='checkbox' onChange={onChange} value={form.pepperoni} name='pepperoni' />
                </label>

                <label>Onion
                    <input type='checkbox' onChange={onChange} value={form.onion} name='onion' />
                </label>
                
                <label>Peppers
                    <input type='checkbox' onChange={onChange} value={form.peppers} name='pepper' />
                </label>

                <label>Sausage
                    <input type='checkbox' onChange={onChange} value={form.sausage} name='sausage' />
                </label>

                <label>Extra Cheese
                    <input type='checkbox' onChange={onChange} value={form.extraCheese} name='extraCheese' />
                </label>

                <label>Olives
                    <input type='checkbox' onChange={onChange} value={form.olive} name='olive' />
                </label>

                <label>Jalapenos
                    <input type='checkbox' onChange={onChange} value={form.jalapeno} name='jalapeno' />
                </label>
                </label>

                <label>Special Instruction Requests
                    <input onChange={onChange} value={form.instruct} name='instruct' type='text' />
                </label>
                <button id='submitBtn' disabled={disable}>Place Order Here</button>
            </form>
        </div>
    )
}