import React from 'react'
import {Link} from 'react-router-dom'
export const PizzaForm = (props) => {
    const{
        values,
        onSubmit,
        onChange,
        errors,
        onCheckBoxChange
    } = props
    return (
        <div>
            <form onSubmit={onSubmit}>
                <label>
                    Name:
                    <input 
                    name='name'
                    type='text'
                    value={props.name}
                    onChange={onChange}
                    />
                </label>
                <div>
                    {errors.name}
                </div>
                <label>
                    Size:
                    <select 
                    type='text'
                    name='size'
                    value={props.size}
                    onChange={onChange}
                    >
                        <option value=''>---Select---</option>
                        <option value='small'>Small</option>
                        <option value='medium'>Medium</option>
                        <option value='large'>Large</option>
                    </select>
                </label>
                <label>
                    Special Instructions:
                    <input 
                    type='text'
                    name='specialInstructions'
                    value={props.specialInstructions}
                    onChange={onChange}
                    />
                </label>
                <div className="toppings">
                    <h4>Toppings</h4>

                    <label>Pepperoni
                        <input
                        type='checkbox'
                        name='pepperoni'
                        onChange={onCheckBoxChange}
                        checked={values.toppings.pepperoni} 
                        />
                    </label>


                    <label>Extra Cheese
                        <input
                        type='checkbox'
                        name='xtracheese'
                        onChange={onCheckBoxChange}
                        checked={values.toppings.xtracheese} 
                        />
                    </label>

                    <label>Mushrooms
                        <input
                        type='checkbox'
                        name='mushrooms'
                        onChange={onCheckBoxChange}
                        checked={values.toppings.mushrooms} 
                        />
                    </label>

                    <label>Buffalo Chicken
                        <input
                        type='checkbox'
                        name='buffalochicken'
                        onChange={onCheckBoxChange}
                        checked={values.toppings.buffalochicken} 
                        />
                    </label>
                </div>
                <button className='confirmBtn'>Confirm Order</button>
                
                    <Link to='/orders'>
                    
                        <button>Orders</button>
                    </Link>
                 
          
            
                
            </form>
        </div>
    )
}

export default PizzaForm