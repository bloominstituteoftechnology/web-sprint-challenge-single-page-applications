
import React from 'react';
import './App.css';


/////////////////////////
const PizzaForm = (props) => {
    const { values, submit, change, errors, disabled} = props
    const onSubmit = evt => {
        evt.preventDefault()
        submit()
    }
    const onChange = evt => {
        const { name, value, type, checked} = evt.target
        const valueToUse = type === 'checkbox' ? checked : value
        change(name, valueToUse)
    }

    return (
        <div className = "pizzaFormDiv">
            <h1>Order Pizza in 60 Seconds</h1>
            <div className="photo">
                {/* <img src='./pizza-3.jpg' alt='cheesy pizza'></img> */}
            {/*Attempt to put photo here , i couldnt */}
            </div>
            <form onSubmit = {onSubmit}>

                <label><h3>Full Name</h3>
                    <h4>Required</h4>
                    <input 
                    name = "name" 
                    type="text" 
                    value = {values.name} 
                    onChange={onChange}/>
                </label>

                <label>
                    <h3>Size Options</h3>
                    <h4>Required</h4>
                    <select
                    onChange={onChange}
                    value={values.size}
                    name='size'>
                        <option value = ''>--Select size--</option>
                        <option value = 'small'>Small</option>
                        <option value = 'medium'>Medium</option>
                        <option value = 'large'>Large</option>
                    </select>
                </label>

                <label>
                    <h3>Select Toppings</h3>
                    
                    <label>
                        Pepperoni
                    <input 
                        type='checkbox'
                        name='pepperoni'
                        onChange={onChange}
                    />
                    </label>

                    <label>
                        Jalapeno
                    <input 
                        type='checkbox'
                        name='jalapeno'
                        onChange={onChange}
                        />
                    </label>

                    <label>
                        Ham
                    <input 
                        type='checkbox'
                        name='ham'
                        onChange={onChange}
                        />
                    </label>

                    <label>Pineapple
                    <input 
                        type='checkbox'
                        name='pineapple'
                        onChange={onChange}
                        />
                    </label>
                </label>

                <label>
                <h3>Leave Us Special Instructions Below</h3>
                
                <input style = {{width: '95%', marginLeft:'2%', marginBottom: '4%', marginTop: '4%'}}
                 name = 'instructions' 
                 type = 'text' 
                 onChange={onChange} 
                value = {values.instructions}/>
                </label>
                <div className = "errors">
                    <p>{errors.name}</p>
                    <p>{errors.size}</p>
                </div>
                <button id = "submit" disabled={disabled}>Order Pizza</button>
            </form>
        </div>
    );
    };

    
export default PizzaForm;