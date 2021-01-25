import React, {useEffect, useState} from 'react'
import * as Yup from "yup";
import { string } from 'yup/lib/locale';

const formSchema = Yup.object().shape({
    name: Yup
    .string()
    .required('must include name')
    .min(2, 'Must be at least 2 characters'),
    type:Yup
    .string()
    .required('type required'),
    agree: Yup
    .boolean()
    .oneOf([true]),
    instructions:Yup
    .string()

    

})



export default function Form () {
    const [form, setForm] = useState( {name:'', type: '', agree: false, instructions: ''

    })
    const [formState, setFormState] = useState({name:'', type: '', agree: false, instructions: ''

    })

    const [error, setErrors] = useState({ name:'', type: '', agree: false, instructions: ''
        
    })

    // useEffect(() =>{
    //     formSchema.isValid(formState).then(valid =>{
    //         setButtonDisabled(!valid)
    //     })
    // }, [formState])

    const inputChange = e =>{
        const {name, type, agree, instructions} = e.target
    }

    
    const formSubmit =e =>{
        e.preventDefault()
        console.log('submitted')
    }

    const setFormErrors = (name, value) =>{
    Yup
    .reach(formSchema, name)
    .validate(value)
    .then(valid =>{
        setErrors({
            ...error, [name]: ''
        })
    })
    .catch(err => {
        setErrors({
          ...error, [name]: err.errors[0]
        });
      });
    }
    
    const handleChange = e =>{
        const { name, type, value, checked} = e.target
        const valueToUse = type === 'checkbox' ? checked : value
        setForm({...form, [name]: valueToUse})
    }

return (
    <div className='Pizza'>
    <label> Name
        <input 
        value={form.name}
        name='name'
        type='text'
        maxLength='30'
        handleChange={handleChange}
        />

    </label> 

    <label> Select your Pizza
        <select name='type' value={form.type} handleChange={handleChange}>
            <option value ='1'> Small</option>
            <option value = '2'> Medium</option>
            <option value ='3'>Large</option> 
            
        </select>

        <label> Pepperoni
            <input 
            name='agree'
            type= 'checkbox'
            checked={form.agree} 
            handleChange={handleChange}
            />
        </label>
        <label> Sausage
            <input 
            name='agree'
            type= 'checkbox'
            checked={form.agree} 
            handleChange={handleChange}
            />
        </label>

        <label> Tomato
            <input 
            name= 'agree'
            type= 'checkbox'
            checked={form.agree} 
            handleChange={handleChange}
            />
        </label>

        <label> Olives
            <input 
            name='agree'
            type= 'checkbox'
            checked={form.agree} 
            handleChange={handleChange}
            />
        </label>

        <label> Special instructions
        <input 
        value={form.instructions}
        name='instructions'
        type='text'
        maxLength='30'
        handleChange={handleChange}
        />
        </label>

        <button className='submitbtn'> Choose Pizza </button>


    </label>

    </div>




    

        
        
       

)
}
