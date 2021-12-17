import React from 'react';
import Header from './Header.js';
import styled from 'styled-components';

const StyledForm = styled.form`

`

const toppings = ['Pepperoni', 'Sausage', 'Canadian Bacon', 'Spicy Italian Sausage', 'Grilled Chicken', 'Onions', 'Green Pepper', 'Diced Tomatos', 'Black Olives', 'Roasted Garlic', 'Artichoke Hearts', 'Three Cheese', 'Pineapple', 'Extra Cheese'];
export default function PizzaForm(props){
    return (
        <>
            <Header />
            <h1>Build Your Own Pizza</h1>
            <img src=''></img>
            <StyledForm>
                <label>Choice of Size
                    <select>
                        <option value=''>-Select a size-</option>
                        <option value='small'>12"</option>
                        <option value='medium'>14"</option>
                        <option value='large'>16"</option>
                        <option value='x-large'>18"</option>
                    </select>
                </label>
                <label>Choice of Sauce
                    <label>Original Red
                        <input
                            type='radio'
                            name='sauce'
                        />
                    </label>
                    <label>Garlic Ranch
                        <input
                            type='radio'
                            name='sauce'
                        />
                    </label>
                    <label>BBQ Sauce
                        <input
                            type='radio'
                            name='sauce'
                        />
                    </label>
                    <label>Spinach Alfredo
                        <input
                            type='radio'
                            name='sauce'
                        />
                    </label>
                </label>
                <label>Add Toppings
                    {toppings.map(topping => {
                        return (
                            <label>{topping}
                                <input
                                    type='checkbox'
                                    name={topping}
                                />
                            </label>
                        )
                    })}
                </label>

                <button id='order-button'>Add to Order</button>

            </StyledForm>
        </>
    )
}