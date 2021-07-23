import React, { useState,useEffect } from 'react';
import '../styles.css'
// import formSchema from '../validations/formSchema'
import * as yup from 'yup'
import axios from 'axios';


function Form({teamMembers,setTeamMembers}) {

    //array to add dynamic checkbox toppings 
    const toppings = [
        'Pepperoni',
        'Mushroom',
        'Extra cheese',
        'Sausage',
        'Onion',
        'Black olives',
        'Green pepper',
        'Fresh garlic',
        'Pinapple',
        'Anchovies'
    ]

    //declare the schema use for the validation without the checkboxes
    const shape = {
        name: yup
            .string()
            .trim()
            .min(2,'Name must be 2 at least characters long')
            .required('username is required'),
        size:  yup
        .string()
        .required('size is required'),
        special:  yup
            .string(),
    }
    
    

    const [users,setUsers] = useState([])
    const [form,setForm] = useState({name:'',size:'small',special:''});
    const [errors,setErrors] = useState({name:'',size:'small',special:''}); 
    const [disabled,setDisabled] = useState(true);
    
//add dycnamic checkbox to formSchema
    toppings.forEach(element => {
        shape[element.replace(/\s/g, '').toLowerCase()]= yup.boolean()
    })

    const formSchema = yup.object().shape(shape)



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
            setUsers([...users,res.data])
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
            <div>{errors.name}</div>
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
     
        <pre>
            {JSON.stringify(users,undefined, 2)}
        </pre>
     
     </div>
  );
}

export default Form;
