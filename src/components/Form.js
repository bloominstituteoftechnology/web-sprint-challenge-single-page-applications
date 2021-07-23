import React, { useState,useEffect } from 'react';
import '../styles.css'
import formSchema from '../validations/formSchema'
import * as yup from 'yup'
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import {toppings} from '../constants'


function Form({teamMembers,setTeamMembers}) {
    

    const [orders,setOrders] = useState([])
    const [form,setForm] = useState({name:'',size:'small',special:''});
    const [errors,setErrors] = useState({name:'',size:'small',special:''}); 
    const [disabled,setDisabled] = useState(true);
    const history = useHistory()



    const setFormErrors = (name, value)=>{
        yup.reach(formSchema,name).validate(value).then(()=>setErrors({...errors,[name]:''}))
        .catch(err => setErrors({...errors, [name]: err.errors[0] }))
    }

   

    const change = (event) =>{
      const {checked,value,name,type} = event.target
      const valueToUse = type === 'checkbox' ? checked : value
      setFormErrors(name,valueToUse)
      setForm({...form, [name]:valueToUse})
      

     }

     const submit = event =>{
        event.preventDefault()

        axios.post(`https://reqres.in/api/users`, form)
        .then(res=>{
            console.log(res.data)
            setOrders([...orders,res.data])
            history.push({
                pathname: '/order-confirm',
                state: { orderData: res.data }
              })
        })
        .catch(err=>{
            console.log(err)

        })
       
        
     }

     useEffect(()=> {
        formSchema.isValid(form).then(valid => setDisabled(!valid))
     },[form])

     console.log('form',form)

  return (
<div className="center">
     <form onSubmit={submit} className="center" id='formId'>
        <div style={{color:'red'}}>
            <h5 id='error-message'>{errors.name}</h5>
        </div>
         <label>Name
            <input onChange={change} value={form.name} id='name-input' placeholder='Name' name='name' type='text'></input>
         </label>

         <label>Size
            <select onChange={change} value={form.size} id='size-dropdown' placeholder='size' name='size' >
                <option>Small</option>
                <option>Medium</option>
                <option>Large</option>

            </select>
         </label>

         {toppings.map(topping=>
         <label>{topping}
            <input onChange={change} checked={form.topping?.replace(/\s/g, '').toLowerCase()} id={topping.replace(/\s/g, '').toLowerCase()+'Id'}  name={topping.replace(/\s/g, '').toLowerCase()} type='checkbox'></input>
         </label>)}

         <label>Special Instructions
            <input onChange={change} value={form.special} id='special-text' placeholder='Special Instructions' name='special' type='text'></input>
         </label>

        <button id='order-button' disabled={disabled}>Place Order</button>
     </form>
     
     </div>
  );
}

export default Form;
