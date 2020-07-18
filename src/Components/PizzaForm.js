import React from 'react';
import * as yup from 'yup';
import styled from 'styled-components';

const PizzaForm = props => {

const handleChange = props => {
    
}

    return(
        <div>
            <label> Name
                <input 
                type='text'
                name='text'
                onChange={handleChange}
                data-cy=''
                value=''/>
            </label>
            <label> Email
                <input 
                type='email'
                name='email'
                onChange={handleChange}
                data-cy=''
                value=''/>
            </label>
            <label> Phone Number
                <input 
                type='tel'
                name='tel'
                onChange={handleChange}
                data-cy=''
                value=''/>
            </label>
            <label>
                <div className='PizzaSize'>
                    Choose Size of Pizza
                <input 
                    type='checkbox' 
                    name=''
                    onChange={handleChange}
                    data-cy=''
                    value=''
                />
                <input 
                    type='checkbox' 
                    name=''
                    onChange={handleChange}
                    data-cy=''
                    value=''
                />
                <input 
                    type='checkbox' 
                    name=''
                    onChange={handleChange}
                    data-cy=''
                    value=''
                />
                </div>
            </label>
            <label>
                <select>
                    <option></option>
                    <option></option>
                    <option></option>
                    <option></option>
                </select>
            </label>
            <label>
                <select>
                    <option></option>
                    <option></option>
                    <option></option>
                    <option></option>
                </select>
            </label>
            <label>
                <select>
                    <option></option>
                    <option></option>
                    <option></option>
                    <option></option>
                </select>
            </label>
            <label>
                <select>
                    <option></option>
                    <option></option>
                    <option></option>
                    <option></option>
                </select>
            </label>
            <label>
                <input type=''/>
            </label>
            <button>Order Your Pizza</button>
            
        </div>
    );
}

export default PizzaForm;