import React from 'react'
import { Link, useRouteMatch } from "react-router-dom";

export default function PizzaForm(props) {
    const {values, submit, change, disabled, errors,} = props
    
    const { url } = useRouteMatch()


    const onSubmit = evt => {
        evt.preventDefault()
        submit()
    }

    const onChange = evt => {
        const { name, value, type, checked } = evt.target
        const valueToUse = type === 'checkbox' ? checked : value;
        change(name, valueToUse)
    }

    return (
        <form  onSubmit={onSubmit} className="container">
            
                <div className='errors'>
                    <div>{errors.name}</div>
                    <div>{errors.email}</div>
                </div>

                <div className='container'>
                <br></br>

                <label>Name
                <input
                    type='text'
                    name='name'
                    value={values.name}
                    onChange={onChange}
                ></input>
                </label>

                <label>Email 
                <input 
                    type='text' 
                    name='email' 
                    value={values.email} 
                    onChange={onChange} 
                ></input>
                </label>
                </div>
                <div>

                <label>Size
                     <select
                        onChange={onChange}
                        value={values.role}
                        name='role'
                        >
                        <option value=''>- Select an option -</option>
                        <option value='small'>Small</option>
                        <option value='medium'>Medium</option>
                        <option value='large'>Large</option>
        
                    </select>
                 </label>


                </div>

                <div className='form-group checkboxes'>
                    <h4>Hobbies</h4>
                <label>Pepperoni
                    <input 
                    type='checkbox' 
                    name='pepperoni' 
                    checked={values.pepperoni} 
                    onChange={onChange} />
                </label>

                <label>Bacon
                    <input 
                    type='checkbox'
                     name='bacon' 
                     checked={values.bacon} 
                     onChange={onChange} />
                </label>

                <label>Mushrooms
                    <input 
                    type='checkbox' 
                    name='mushrooms' 
                    checked={values.mushrooms} 
                    onChange={onChange} />
                </label>
                
                <label>Extra Cheese
                    <input 
                    type='checkbox' 
                    name='extraCheese' 
                    checked={values.extraCheese} 
                    onChange={onChange} />
                </label>    
                

                <label>Special Instructions
                    <input 
                    type='text' 
                    name='instructions' 
                    value={values.instructions} 
                    onChange={onChange} 
                    ></input>
                </label>
                </div>
                <button id='submitBtn' disabled={disabled}>submit</button>

            </form>
    )
}
