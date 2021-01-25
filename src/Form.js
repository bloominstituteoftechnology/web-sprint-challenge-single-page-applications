import React, {useState} from 'react'



export default function Form () {
    const [form, setForm] = useState( {
        name:'',
        type: '',
        agree: false,
        instructions: ''


    })


    
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
        <select name='size' value={form.type} handleChange={handleChange}>
            <option value ='1'> Small</option>
            <option value = '2'> Medium</option>
            <option value ='3'>Large</option> 
            
        </select>

        <label> Pepperoni
            <input 
            name='type'
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

        <button class='submitbtn'> Choose Pizza </button>


    </label>

    </div>




    

        
        
       

)
}
