import React from 'react'

export default function Form(props) {
    const { submit, change,  form, disabled} = props
    const onSubmit = evt => {
        evt.preventDefault();
        submit();
    }

    const onChange = evt => {
        const { name, value, type, checked } = evt.target;
        const valueToUse = type === 'checkbox' ? checked : value;
        change(name, valueToUse)
    }

    return (
        <div className='formDiv'>
            <form onSubmit={onSubmit}>

                <label>Name:
                    <input onChange={onChange} value={form.name} name='name' type='text'/>
                </label>

                <select onChange={onChange} value= {form.size} name='size'>Choice of Size
                    <option value=''>Select</option>
                    <option value='1'>Small(10")</option>
                    <option value='2'>Medium(13")</option>
                    <option value='3'>Large(18")</option>
                </select>

                <label><h3>Choice of Toppings</h3>
                
                    <label>Peperoni
                        <input type='checkbox'  onChange={onChange} value={form.peperoni} name='peperoni'/>
                    </label>
                    
                    <label>Diced Tomatoes
                        <input type='checkbox' onChange={onChange} value={form.tomatoes} name='tomatoes'/>
                    </label>
                    
                    <label>Extra Cheese
                        <input type='checkbox' onChange={onChange} value={form.xtraCheese} name='xtraCheese'/>
                    </label>
                    
                    <label>Artichoke
                        <input type='checkbox' onChange={onChange} value={form.artichoke} name='artichoke'/>
                    </label>
                </label>
                
                <label>Any special instructions?
                    <input onChange={onChange} value={form.instruct} name='instruct' type='text'/>
                </label>
                <button id='submitBtn' disabled={disabled}>Place Order</button>
            </form>
        </div>
    )
}