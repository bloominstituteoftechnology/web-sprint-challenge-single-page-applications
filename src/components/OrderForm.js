import React from 'react'
import { Route, Link, Switch } from "react-router-dom";

import styled from 'styled-components'

const FormContainer = styled.div`
    display: flex; 
    justify-content: center;
`

const FormWrapper = styled.form`
    display: flex;
    flex-direction: column;
    background-color: mistyrose;
    justify-content:center;
    width: 52%;
    border-radius: 10px;
    border: 2px solid darkgray;
    box-shadow: 2px 2px 2px darkgray;
    margin-top: 5%;
    padding-left: 2%;
    padding-right: 2%;
    padding-bottom: 2%;
    .fullName{
        margin-bottom: 2%;
    }
    .glutenFree{
        margin-top: 2%;
        margin-bottom: 2%;
    }
    .instructions{
        margin-bottom: 2%;
    }
    .errors{
        margin-top:2%;
    }
`

const Toppings = styled.div`
    display:flex;
    margin-top:4%;
    .toppingColumn1{
        display: flex;
        flex-direction: column;
        margin-right: 2%;
        margin-left: 2%;
    }
    .toppingColumn2{
        display:flex;
        flex-direction: column;
    }
`


function OrderForm (props) {
    
    const {change,values,submit,disabled,errors } = props

    const onChange = evt => {

        const {name, value, checked, type} = evt.target
        console.log(name)
        console.log(value)
        console.log(checked)
        console.log(type)
        console.log(errors)
        
        const valueToUse = type === 'checkbox' ? checked : value
        change(name, valueToUse)
    }

    const onSubmit = evt => {
        console.log(evt.target)
        evt.preventDefault()
        submit()
    }

    return (
        <div>
            <Link to= {'/'}>
                <button className="homeButton">Lambda Eats</button>
            </Link>

            {/* ------------------------  orderform below --------------------- */}

            <FormContainer>
                
                <FormWrapper onSubmit={onSubmit}>
    
                    <div>
                        <h2>Build Your Own Pizza</h2>
                    </div>

                    <div className='fullName'>
                        <label> Full Name:
                            <input
                                name='name'
                                type='text'
                                value={values.name}
                                onChange={onChange}
                                />
                        </label>
                    </div>
    
                    <label> Choice of Size: 
                        <select
                            onChange={onChange}
                            value={values.size}
                            name='size'
                        >
                            <option value=''>---- select ----- </option>
                            <option value='Small'>Small</option>
                            <option value='Medium'>Medium</option>
                            <option value='Large'>Large</option>
                            <option value='X-Large'>X-Large</option>
                        </select>
                    </label>
    
                    <Toppings> 

                        <h4>Toppings</h4>
                        
                        <div className='toppingColumn1'>
                            
                                <label> pepperoni
                                    <input 
                                        type='checkbox' 
                                        name='pepperoni' 
                                        checked={values.pepperoni} 
                                        onChange={onChange}
                                    />
                                </label>  

                                <label>bacon
                                    <input 
                                        name='bacon' 
                                        type='checkbox'
                                        checked={values.bacon}
                                        onChange={onChange}
                                    />
                                </label>

                                <label>onion
                                    <input 
                                        name='onion' 
                                        type='checkbox'
                                        checked={values.onion}
                                        onChange={onChange}
                                    />
                                </label>
                            
                        </div>
                        
                        <div className='toppingColumn2'>
                            <label>peppers
                                <input 
                                    name='peppers' 
                                    type='checkbox'
                                    checked={values.peppers}
                                    onChange={onChange}
                                />
                            </label>
                            
                            <label>diced tomatoes
                                <input 
                                    name='dicedTomatoes' 
                                    type='checkbox' 
                                    checked={values.dicedTomatoes} 
                                    onChange={onChange}
                                />
                            </label>
                        </div>
    
                    </Toppings> 
                    {/* closing div for Add-Toppings Section  */}
                    
                    <div className='glutenFree'>
                        <label> Choice of Substitute: <span></span>
                            <label>Gluten Free
                                <input 
                                    name='glutenFree' 
                                    type='checkbox' 
                                    checked={values.glutenFree}
                                    onChange={onChange}
                                />
                            </label>
                        </label>
                    </div>
                    
                    <div className='instructions'>
                        <label> Special Instructions: <span></span>
                            <input 
                                name='instructions' 
                                type='text'
                                value={values.instructions}
                                onChange={onChange}
                            />
                        </label>
                    </div>
                    
                    
                   

                        <button disabled={disabled}>Add to Order</button>

                         {/* RENDERED THE VALIDATION ERRORS HERE */}
                        <div className='errors'>
                            <div>{errors.name}</div>
                            <div>{errors.size}</div>
                            {/* <div>{errors.role}</div>
                            <div>{errors.civil}</div> */}
                        </div>
                    
                        
                        
                    
                </FormWrapper>
            </FormContainer> 
            
        </div>
    )
}  

export default OrderForm