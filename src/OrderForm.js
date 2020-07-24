import React from 'react'; 


const OrderForm = (props) => {

    const {
        values,
        submit,
        inputChange, 
        checkboxChange, 
        disabled, 
        errors,
    } = props; 

    // defining event handlers // 

    const onSubmit = evt => {
        evt.preventDefault();
        submit(); 
    }

    const onCheckBoxChange = evt => {
        const { name, checked } = evt.target; 
        checkboxChange(name, checked); 
    }

    const onInputChange = evt => {
        const { name, value } = evt.target; 
        inputChange(name, value); 
    }

    return (
        <div>
            <h3>Build Your Pizza</h3>
            {/* text */}
        <form className='form-wrapper' onSubmit={onSubmit}>

            <div className='errors'>
                {/* rendering validation errors here */}
                <div>{errors.name}</div>
            </div>

            {/* Order Form Starts Here */}

            <label>What's the name for the order?
                    <input className='nameInput'
                    value={values.name}
                    onChange={onInputChange}
                    placeholder='Name required'
                    name='name'
                    maxLength='35'
                    />
                </label>

                {/* dropdown */}

                <label>Size
                    <select
                    value={values.size}
                    onChange={onInputChange} 
                    name='size'>
                        <option value='select'>Select an Option</option>
                        <option value='personal'>Personal - 8"</option>
                        <option value='family'>Family - 16"</option>
                        <option value='party'>Party - 21"</option>
                    </select>
                </label>

                {/* checkboxes */}
            <div className='checkboxes'>
                <h4>Add Toppings:</h4>
                <label>Anchovies 
                    <input 
                    name='anchovies'
                    type='checkbox'
                    checked={values.toppings.anchovies === true}
                    onChange={onCheckBoxChange}
                    />
                </label>
                <label>Pepperoni
                    <input 
                    name='pepperoni'
                    type='checkbox'
                    checked={values.toppings.pepperoni === true}
                    onChange={onCheckBoxChange}
                    />
                </label>
                <label>Pineapple
                    <input 
                    name='pineapple'
                    type='checkbox'
                    checked={values.toppings.pineapple === true}
                    onChange={onCheckBoxChange}
                    />
                </label>
                <label>Basil
                    <input 
                    name='basil'
                    type='checkbox'
                    checked={values.toppings.basil === true}
                    onChange={onCheckBoxChange}
                    />
                    </label>
            </div>

                    {/* textarea */}
                <div className="special">
                    <label>Special:
                        <textarea className="spcRequest" placeholder="Any special instruction for us? Tip: We can do cartwheels" />
                    </label>
                </div>
                
                <button className='orderBtn' disabled={disabled}>Place Order</button>
            </form>
        </div>
    )
}

export default OrderForm; 