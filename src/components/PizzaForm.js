import React, {useState, useEffect} from 'react';
import Header from './Header.js';
import styled from 'styled-components';


const StyledForm = styled.form`
    width: 60%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    div h2{
        background-color: lightgrey;
        border: 1pc solid grey;
        width: 100%;
        text-align: center;
    }

    .toppings{
        border: 1px solid black;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .listOfToppings{
        display: flex;
        border: 1px solid red;
        width: 70%;
        flex-wrap: wrap;
    }

    .listOfToppings label{
        min-width: 48%;
        text-align: center;
    }
`

const toppings = ['pepperoni', 'sausage', 'canadian bacon', 'spicy sausage'];
export default function PizzaForm(props){

    const { formValues, inputChange, formSubmit, formErrors} = props;

    const onChange = event => {
        console.log('event.target--------')
        console.log(event.target);
        const { name, value, checked, type } = event.target;
        const valueToUse = type === 'checkbox' ? checked : value;
        inputChange(name, valueToUse);
    }

    const onSubmit = event => {
        event.preventDefault();
        formSubmit();
    }

    return (
        <>
            <Header />
            <h1>Build Your Own Pizza</h1>
            <img src=''></img>
            <StyledForm id='pizza-form' onSubmit={onSubmit}>
                <div className='customerName'><h2>Customer Information</h2>
                    <label>What's your name?
                        <input 
                            type='text'
                            id='name-input'
                            name='name'
                            value={formValues.name}
                            onChange={onChange}
                        />
                    </label>
                </div>
                <div className='size'><h2>Choice of Size</h2>
                <label>Choose your size:
                    <select 
                    id='size-dropdown'
                    value={formValues.size}
                    onChange={onChange}
                    name='size'>
                        <option value=''>-Select a size-</option>
                        <option value='small'>Small - 12"</option>
                        <option value='medium'>Medium - 14"</option>
                        <option value='large'>Large - 16"</option>
                        <option value='xlarge'>X-Large - 18"</option>
                    </select>
                </label>
                </div>
                <div className='sauce'><h2>Choice of Sauce</h2>
                    <label>Original Red
                        <input
                            type='radio'
                            name='sauce'
                            value='Original Red'
                            onChange={onChange}
                        />
                    </label>
                    <label>Garlic Ranch
                        <input
                            type='radio'
                            name='sauce'
                            value='Garlic Ranch'
                            onChange={onChange}
                        />
                    </label>
                    <label>BBQ Sauce
                        <input
                            type='radio'
                            name='sauce'
                            value='BBQ Sauce'
                            onChange={onChange}
                        />
                    </label>
                    <label>Spinach Alfredo
                        <input
                            type='radio'
                            name='sauce'
                            value='Spinach Alfredo'
                            onChange={onChange}
                        />
                    </label>
                </div>
                <div className='toppings'><h2>Add Toppings</h2>
                    <div className='listOfToppings'>
                        {toppings.map(topping => {
                            return (
                                <label>{topping}
                                    <input
                                        type='checkbox'
                                        name={topping.replace(" ", '')}
                                        checked={formValues.topping}
                                        onChange={onChange}
                                    />
                                </label>
                            )
                        })}
                    </div>
                </div>
            
                <div className='specialInstructions'><h2>Special Instructions</h2>
                    <label> Special Instructions:
                        <input 
                            onChange={onChange}
                            name='specialInstructions'
                            type='text'
                            id='special-text'
                            value={formValues.specialInstructions}
                        />
                    </label>
                </div>

                <button id='order-button'>Add to Order</button>
                <div className='errors'>
                <div>{formErrors.name}</div>
                <div>{formErrors.size}</div>
                <div>{formErrors.sauce}</div>
        </div>

            </StyledForm>
        </>
    )
}