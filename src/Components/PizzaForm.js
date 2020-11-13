import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
// import pizzaImage from'.../Assets/Pizza.jpg';


export default function PizzaForm(){



    return(
        <form>
            <div className='header'>
                <h1>Lambda Eats</h1>
                <div>
                    <button id='home'><Link to ='/'>Home</Link></button>
                    <button id='pizza'><Link to ='./pizza'>Build Pizza</Link></button>
                    <button id='help'>Help</button>
                </div>
            </div>
            <div className='form'>
                <h2>Build Your Own Pizza</h2>
                <img src=''
                    alt='Create your own pizza' />
            </div>
            <div>Build Your Own Pizza</div>

            <div className='sizeChoice'>
                <h3>Choice of Size</h3>
                <p>Required</p>
                <label>
                    <select>
                        <option value=''>Select</option>
                        <option value='small'>Small</option>
                        <option value='medium'>Medium</option>
                        <option value='large'>Large</option>
                        <option value='x-large'>X-Large</option>
                    </select>
                </label>
            </div>

            <div className='sauceChoice'>
                <h3>Choice of Sauce</h3>
                <p>Required</p>
                <label>Original Red
                    <input 
                        name='sauce'
                        type='radio'
                        value='original'                
                    />
                </label>

                <label>Garlic Ranch
                    <input 
                        name='sauce'
                        type='radio'
                        value='garlicRanch'                
                    />
                </label>
            
                <label>BBQ Sauce
                    <input 
                        name='sauce'
                        type='radio'
                        value='BBQ'                
                    />
                </label>

                <label>Spinach Alfredo
                    <input 
                        name='sauce'
                        type='radio'
                        value='spinachAlfredo'                
                    />
                </label>
            </div>

            <div className='toppings'>
                <h3>Add Topings</h3>
                <p>Choose up to 10</p>
                <div>
                <label>Pepperoni
                    <input 
                        type='checkbox'
                        name='pepperoni'
                    />
                </label>

                <label>Sausage
                    <input 
                        type='checkbox'
                        name='sausage'
                    />
                </label>

                <label>Canadian Bacon
                    <input 
                        type='checkbox'
                        name='canadianBacon'
                    />
                </label>
            
                <label>Spicy Italian Sausage
                    <input 
                        type='checkbox'
                        name='sausage'
                    />
                </label>

                <label>Grilled Chicken
                    <input 
                        type='checkbox'
                        name='chicken'
                    />
                </label>

                <label>Onions
                    <input 
                        type='checkbox'
                        name='onions'
                    />
                </label>

                <label>Green Pepper
                    <input 
                        type='checkbox'
                        name='greenPepper'
                    />
                </label>

                <label>Pinapple
                    <input 
                        type='checkbox'
                        name='pineapple'
                    />
                </label>

                <label>Black Olives
                    <input 
                        type='checkbox'
                        name='olives'
                    />
                </label>

                <label>Roasted Garlic
                    <input 
                        type='checkbox'
                        name='garlic'
                    />
                </label>

                <label>Three Cheese
                    <input 
                        type='checkbox'
                        name='threeCheese'
                    />
                </label>

                <label>Artichoke Hearts
                    <input 
                        type='checkbox'
                        name='artichoke'
                    />
                </label>

                <label>Extra Cheese
                    <input 
                        type='checkbox'
                        name='extraCheese'
                    />
                </label>
                </div>
            </div>
            <div className='substitute'>
                <h3>Choice of Substitute</h3>
                <p>Choose up to 1</p>
                <div>
                    <label>Gluten Free Extra Crust(+ $1.00)
                        <input 
                            type='checkbox'
                            name='glutenfree'
                        />
                    </label> 
                </div>

                <div className='specialInstuctions'>
                    <h3>Special Instructions</h3>
                    <label>
                        <input 
                            name='specialInstructions'
                            type='text'
                            maxLength='1000'
                        />
                    </label>
                </div>

                <div className='name'>
                <label>Name
                <input 
                    name='name'
                    type='text'
                    maxLength='20'
                />
            </label>
                </div>

                <div className='checkout'>
                    <label>
                        <select>
                            <option value='1'>1</option>
                            <option value='2'>2</option>
                            <option value='3'>3</option>
                            <option value='4'>4</option>
                            <option value='5'>5</option>
                        </select>
                    </label>

                    <button>Add To Order</button>
                </div>
            </div>
        </form>
    )
}