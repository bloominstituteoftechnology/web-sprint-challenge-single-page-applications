import React, { useState, useEffect } from 'react';
import * as yup from 'yup';
import './App.css';
import axios from 'axios';
import { use } from 'chai';


export default function FormInput (props) {

    //form req: name, pizza slice(dropd), toppings(ckbox), special inst, order bttn//

    const [form, setForm] = useState({name: '', phone: '', email: '', pizzaSlice: '', toppings: '', special: '',})

    const [errors, setErrors] = useState(name: '', phone: '', email: '', pizzaSlice: '', toppings: '', special: '',}}

    const [disabled, setDisabled] = useState(true)

    const [user, setUser] = useState([]);



return (
    
    
        <div className='form-inputs'>
          <div className='error-msg'style={{ color: 'red'}}>
             <div>{errors.name}</div>
             <div>{errors.email}</div>
             <div>{errors.password}</div>
             <div>{errors.tos}</div>  
        </div>  
            <form className='form-container'
            onSubmit={submit}> 
            <label>Name
                <input 
                onChange={change}
                value={form.name}
                name='name' 
                type='text'
                placeholder='enter name'
                maxLength='35'/>
            </label>

            <label>Phone
                <input 
                onChange={change}
                value={form.phone}
                name='phone' 
                type='text'
                placeholder='enter phone number'/>
            </label>

            <label>pizzaSlice:
                <select value={form.pizzaSlice} name="slice" onChange={handleChange}>
                <option value="">--select pizza size--</option>
                <option value="SM">Small Personal Pizza 8'</option>
                <option value="MD">Medium Pizza 12'</option>
                <option value="LG">Large Pizza 16'</option>
                
            </select>
            </label>
    
    
            <label>Special
                <input 
                onChange={change}
                value={form.special}
                name='special' 
                type='text'
                placeholder='type any special instructions here'
                maxLength='100'/>
            </label>

            <button disableed={disabled}>Place Order!</button>
            <div className='ordered'>
                <h2>Thank you for your business! Our pizza masters are preparing your order now!</h2>
                <p>Name: {user.name}</p>
                <p>Phone Number: {user.phone}</p>
                <p>Size: {user.slice}</p>
                <p>Special Instructions: {user.special}</p>
                <p>Order Number: {user.id}</p>
            </div>
            </form>
            </div>

}