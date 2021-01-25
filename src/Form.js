import React, { useState, useEffect } from 'react';
import * as yup from 'yup';
import './App.css';
import axios from 'axios';



export default function FormInput (props) {


    //form req: name, pizza slice(dropd), toppings(ckbox), special inst, order bttn//

    const [form, setForm] = useState({
        name: '', 
        phone: '', 
        email: '', 
        size: '',
        pineapple: false,
        pepperoni: false,
        mushroom: false, 
        special: '',})

    const [errors, setErrors] = useState({name: '', phone: '', email: '', size: '',})
    const [disabled, setDisabled] = useState(true)
    const [user, setUser] = useState([]);

    
    
    const schema= yup.object().shape({
        name: yup.string().required('name is required!').min(2, 'name must be at least 2 characters long'),
        phone: yup.string().required('phone number is required!').min(9, 'enter 9 digit phone number including area code'),
        email: yup.string().email('invalid email').required('valid email address required'),
        size: yup.string().oneOf(['Small', 'Medium', 'Large'], 'size of pizza required'),
        pineapple: yup.boolean().optional(),
        pepperoni: yup.boolean().optional(),
        mushroom: yup.boolean().optional(),
        special: yup.string(),
        
        
       })

    
    const setFormErrors = (name, value) => {
        yup.reach(schema, name).validate(value)
        .then( () => setErrors({...errors, [name]: ''}))
        .catch(err => setErrors({...errors, [name]: err.errors[0]}))
    }

    const change = event => {
        const { checked, value, name, type } = event.target
        const valueChecked = type === 'checkbox' ? checked : value
        setFormErrors(name, valueChecked)
        setForm({...form, [name]: valueChecked})
    }

    const submit = event => {
        event.preventDefault()
        axios
        .post('https://reqres.in/api/users', form)
        .then(res => {
            setUser(JSON.stringify(res.data))
            console.log('success', res)
        })
        .catch(err => {
            console.log('error submitting', err)
        })
        }
    


    useEffect( () => {
            schema.isValid(form).then(valid => setDisabled(!valid))
        }, [form])
    

return (
    
    
        <div className='form-inputs'>
          <div className='error-msg'style={{ color: 'red'}}>
             <div>{errors.name}</div>
             <div>{errors.phone}</div>
             <div>{errors.email}</div> 
             <div>{errors.size}</div>
             <div>{errors.cheese}</div>
        </div>  
            <form className='form-container'
            onSubmit={submit}> 
            <div className= 'inputs'>
            <label>Name
                <input 
                onChange={change}
                value={form.name}
                name='name' 
                type='text'
                placeholder='enter name'
                maxLength='35'/>
            </label>

            <label>Phone Number
                <input 
                onChange={change}
                value={form.phone}
                name='phone' 
                type='text'
                placeholder='enter phone number'/>
            </label>

            <label>Email Address
                <input 
                onChange={change}
                value={form.email}
                name='email' 
                type='text'
                placeholder='enter email address'/>
            </label>

            <label>Pizza Size:
                <select onChange={change} name="size"> value{form.size}
                <option value="">--select pizza size--</option>
                <option value="Small">Small Personal Pizza 8'</option>
                <option value="Medium">Medium Pizza 12'</option>
                <option value="Large">Large Pizza 16'</option>    
            </select>
            </label>
    
            <label htmlFor = 'pineapple'>
                Pineapple
                <input onChange={change}
                name= 'pineapple'
                type= 'checkbox'
                id='1'
                value={form.pineapple}/>

            </label>


            <label htmlFor = 'pepperoni'>
                Pepperoni
                <input onChange={change}
                name= 'pepperoni'
                type= 'checkbox'
                id='2'
                value='pepperoni'/>

            </label>

            <label htmlFor = 'mushroom'>
                Mushrooms
                <input onChange={change}
                name= 'mushroom'
                id='3'
                type= 'checkbox'
                value={form.mushroom}/>

            </label>


            <label>Special Instructions
                <input 
                onChange={change}
                value={form.special}
                name='special' 
                type='text'
                placeholder='type any special instructions'
                maxLength='100'/>
            </label>
            </div>
            <button disabled={disabled}>Place Order!</button>
        </form>
        <p>{user}</p>
        </div>
)
}