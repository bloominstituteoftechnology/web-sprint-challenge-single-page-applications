import React from 'react'
import  {useHistory} from 'react-router-dom'



export default function OrderForm(props){

    const{
        values,
        disabled,
        change,
        submit,
        errors
    } = props

    const onChange = evt => {
        const {name, value, type, checked} = evt.target
        const valueToUse = type === 'checkbox' ? checked :value 
        change(name,valueToUse)
    }

    const history = useHistory()

    const onSubmit = evt => {
        evt.preventDefault()
        submit()
        history.push('/orderConfirm')
    }

    return(
        <>
            <div className='formHeader'>
                <h2>Build a pie!</h2>
                <img src='src/Assets/Pizza.jpg' alt='Pizza image, YUM!'/>
            </div>
            <form className='formContainer' onSubmit={onSubmit}>
                <h2>Build Your Own Pizza Pie</h2>

                <div className='errors'>
                    <div>{errors.size}</div>
                    <div>{errors.sauce}</div>
                    <div>{errors.items}</div>
                    <div>{errors.name}</div>
                  </div>

                <label><h4>Choice of Size</h4>Required
                    <select
                     value={values.size}
                      name='size' onChange={onChange}>
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
                    onChange={onChange}
                    checked={values.sauce === 'tomato'}
                    />
                </label>
                <label>White
                    <input 
                    type='radio'
                    value='white'
                    name='sauce'
                    onChange={onChange}
                    checked={values.sauce === 'white'}
                    />
                </label>
                <label>Olive oil
                    <input 
                    type='radio'
                    value='green'
                    name='sauce'
                    onChange={onChange}
                    checked={values.sauce === 'green'}
                    />
                </label>

                {/* ITEMS */}
                <label><h4>Add Toppings</h4>
                    <label>peperoni
                        <input 
                        name='peperoni'
                        type='checkbox'
                        onChange={onChange}
                        checked={values.peperoni}
                        />
                    </label>
                    <label>mushroom
                        <input 
                        name='mushroom'
                        type='checkbox'
                        onChange={onChange}
                        checked={values.mushroom}
                        />
                    </label>
                    <label>olives
                        <input 
                        name='olives'
                        type='checkbox'
                        onChange={onChange}
                        checked={values.olives}
                        />
                    </label>
                    <label>sausage
                        <input 
                        name='sausage'
                        type='checkbox'
                        onChange={onChange}
                        checked={values.sausage}
                        />
                    </label>
                    <label>artichokes
                        <input 
                        name='artichokes'
                        type='checkbox'
                        onChange={onChange}
                        checked={values.artichokes}
                        />
                    </label>
                    {/* <div className='itemsDiv'>
                        {
                            items.map(item => {
                                return (<label>{item}
                                    <input 
                                    name='items'
                                    value={item}
                                    type='checkbox'
                                    onChange={onChange}
                                    checked={values.item}
                                    />
                                </label>
                            )})
                        }
                    </div> */}
                </label>
                <label>Special instructions
                    <input
                    placeholder='Keep it simple please'
                    type='text'
                    name='instructions'
                    value={values.instructions}
                    onChange={onChange}
                    />
                </label>
                <label>Costomer Name
                    <input 
                    placeholder='First and last name please'
                    type='text'
                    name='customerName'
                    value={values.customerName}
                    onChange={onChange}
                    />
                </label>
                
                <div className='submitBtn'>
                    <button disabled={disabled} id='submit'>Submit order</button>
                </div>
            </form>

           
        </>
    )
}