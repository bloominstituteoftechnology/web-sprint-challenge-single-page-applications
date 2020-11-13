import React, { useState } from 'react';


export default function PizzaForm(){



    return(
        <form>
            <div className='form'>
                <h2>Build Your Own Pizza</h2>
                <img src='https://lh3.googleusercontent.com/proxy/Hk7HPH-nwPMd631ON1lWxbkQpLlBwSnEWloDvb6GysEvKbx4JijlL_l4dAd1CGqvf4RgF3T-1DRpanC9S8SZW8YKZkCaYHlbjOK6DGMGkA1nD039Ufhh0vXfPM2aBkpDoQZp'
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
                <label>Original Required
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

        </form>
        

    )
}