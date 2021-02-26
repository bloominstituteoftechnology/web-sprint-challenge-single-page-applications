import React from 'react'



export default function OrderForm(){

    const items = [
        'peperoni',
        'mushroom',
        'olives',
        'sausage', 
        'artichokes',
        'tomatos',
        'peppers',
        'onion',
        'garlic',
        'chicken',
        'ham',
        'cheese',
        'pinapple',
        'jalapino'
    ]


    const onChange = evt => {
        const {name, value, type, checked} = evt.target
        const valueToUse = type === 'checkbox' ? checked :value 
    }


    return(
        <>
            <div className='formHeader'>
                <h2>Build a pie!</h2>
                <img src='../Assets/Pizza.jpg' alt='Pizza image, YUM!'/>
            </div>
            <form className='formContainer'>
                <h2>Build Your Own Pizza Pie</h2>
                <label><h4>Choice of Size</h4>Required
                    <select value=' size' name='size' onChange={onChange}>
                        <option value= ''></option>
                        <option value='small'>Small</option>
                        <option value='medium'>Medium</option>
                        <option value='large'>Large</option>
                    </select>
                </label>
                <h4>Choose a Sauce</h4>
                <label>Tomato
                    <input 
                    type='radio'
                    value='tomato'
                    name='sauce'
                    // onChange={onChange}
                    // checked={values.sauce === 'tomato'}
                    />
                </label>
                <label>White
                    <input 
                    type='radio'
                    value='white'
                    name='sauce'
                    // onChange={onChange}
                    // checked={values.sauce === 'white'}
                    />
                </label>
                <label>Olive oil
                    <input 
                    type='radio'
                    value='green'
                    name='sauce'
                    // onChange={onChange}
                    // checked={values.sauce === 'green'}
                    />
                </label>
                
                <label><h4>Add Toppings</h4>Choose up to FIVE 
                    <div className='itemsDiv'>
                        {
                            items.map(item => {
                                return (<label>{item}
                                    <input 
                                    name='items'
                                    value={item}
                                    type='checkbox'
                                    // onChange={onChange}
                                    // checked={values.item}
                                    />
                                </label>
                            )})
                        }
                    </div>
                </label>
                
                <div className='submitBtn'>
                    <button>Submit order</button>
                </div>
            </form>
        </>
    )
}