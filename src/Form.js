import axios from 'axios';
import React, {useEffect, useState} from 'react'
import * as Yup from "yup";
import { string } from 'yup/lib/locale';

const formSchema = Yup.object().shape({
    name: Yup
    .string()
    .required('must include name')
    .min(2, 'Must be at least 2 characters'),
    size:Yup
    .string()
    .required('size required')
    .min(2, 'size required'),
    pepperoni: Yup.boolean(),
    sausage: Yup.boolean(),
    tomato: Yup.boolean(),
    olives: Yup.boolean(),
    agree: Yup
    .boolean()
    .oneOf([true]),
    instructions:Yup
    .string()

    

})



export default function Form () {

    const initialForm ={
        name: '',
        size:'',
        pepperoni: false,
        sausage: false,
        tomato: false,
        olives: false,
        instructions:''

    
    }

    const initialFormErrors ={
        name:'',
        size:'please select a size',
        agree:'',
        instructions:''

    }
    
    const [form, setForm] = useState(initialForm)

    const [formError, setFormErrors] = useState(initialFormErrors)

    // useEffect(() =>{
    //     formSchema.isValid(form).then(valid =>{
    //         setButtonDisabled(!valid)
    //     })
    // }, [form])

    

    
    const formSubmit =e =>{
        e.preventDefault()
        axios
        .post('https://reqres.in/api/pizza', form)
        .then(res =>{
            console.log(res)
        })
        .catch(err =>{
            console.log(err)
        })
        console.log('submitted')
    }

    const handleError = (name, value) =>{
    Yup
    .reach(formSchema, name)
    .validate(value)
    .then(valid =>{
        setFormErrors({
            ...formError, [name]: ''
        })
    })
    .catch(err => {
        setFormErrors({
          ...formError, [name]: err.errors[0]
        });
      });
    }
    
    const handleChange = e =>{
        const { name, type, value, checked} = e.target

        handleError(name,value)
        const valueToUse = type === 'checkbox' ? checked : value
        setForm({...form, [name]: valueToUse})
        // const {name, value, type} = e.target
        // setForm({...form, [name]: value})
    }

return (
    
    <div className='Pizza'>
        <form onSubmit={formSubmit}>
            <label> Name
                <input 
                value={form.name}
                name='name'
                type='text'
                maxLength='30'
                onChange={handleChange}
                />
            
            </label> 

            <label> Select your size
                <select name='size' value={form.type} onChange={handleChange}>
                    <option value =''> </option>
                    <option value ='small'> Small</option>
                    <option value = 'medium'> Medium</option>
                    <option value ='Large'>Large</option> 
                    
                </select>
            </label>

            <label> Pepperoni
                <input 
                name='pepperoni'
                type= 'checkbox'
                checked={form.pepperoni} 
                onChange={handleChange}
                />
            </label>
            <label> Sausage
                <input 
                name='sausage'
                type= 'checkbox'
                checked={form.sausage}
                onChange={handleChange}
                />
            </label>

            <label> Tomato
                <input 
                name= 'tomato'
                type= 'checkbox'
                checked={form.tomato} 
                onChange={handleChange}
                />
            </label>

            <label> Olives
                <input 
                name='olives'
                type= 'checkbox'
                checked={form.olives} 
                onChange={handleChange}
                />
            </label>

            <label> Special instructions
            <input 
            value={form.instructions}
            name='instructions'
            type='text'
            maxLength='30'
            onChange={handleChange}
            />
            </label>

            <button className='submitbtn'> Choose Pizza </button>
            {formError.name} 
            {formError.size}


            
        </form>
    </div>




    

        
        
       

)
}
