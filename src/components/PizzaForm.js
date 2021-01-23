import React, { useState } from 'react';
//import ConfirmPage from './components/ConfirmPage';
import * as yup from 'yup';


let sauceOptions = [
    {
      label: "Dirt",
      value: "dirt",
    },
    {
      label: "Leaves",
      value: "leaves",
    },
    {
      label: "Water",
      value: "water",
    },
    {
      label: "Crushed Obsidian",
      value: "crushed obsidian",
    },
];

  let toppingOptions = [
    {
        label: "Icicles",
        value: "icicles",
    },
    {
        label: "Snow",
        value: "snow",
    },
    {
        label: "Berries",
        value: "berries",
    },
    {
        label: "Rocks",
        value: "rocks",
    },   
];

//Here outside the function we put the formSchema for validation
const formSchema = yup.object().shape({
    person: yup
      .string()
      .required('Must be at least 2 characters'),
     
  });

  

export default function PizzaForm () {
//Create State
    const [formState, setFormState] = useState([{
        size: '',
        sauce: '',
        toppings: false,
        substitute: false,
        person: '',
        instructions: ''
    }]);

    const [errorState, setErrorState] = useState([{
        size: '',
        sauce: '',
        toppings: false,
        substitute: false,
        person: '',
        instructions: ''
    }]);
    //const submitDisabled = true;
    //submit function
    const onSubmit = evt => {
        evt.preventDefault();
        console.log('Order Placed')
        setFormState(formState)
    }
    //validate function - validating the form fields with yup
    const validate = (evt) => {
        yup.reach(formSchema.evt.target.name)
            .validate(evt.target.value) 
            .then(res => {
                setErrorState({
                    ...errorState,
                    [evt.target.name]: ""
                })
            })
            .catch(err => {
                console.log(err.errors)
                setErrorState({
                    ...errorState,
                    [evt.target.name]: err.errors[0]
                })
            })
    
        }; 
        //Change Handler
        const inputChange = evt => {
            evt.persist();
            validate(evt);
            const theValue = evt.target.type === 'checkbox' ? evt.target.checked : evt.target.value; 
            setFormState({ ...formState, [evt.target.name] : theValue}) 
        }

    return(
    <>
    <div className='pizza'>
        <h3>Build Your Own Pizza</h3>
        <img src='https://scontent-ort2-1.xx.fbcdn.net/v/t1.0-9/56490411_2354982494533034_1379379019702599680_o.jpg?_nc_cat=109&ccb=2&_nc_sid=9267fe&_nc_ohc=WnRekyuCJ3sAX_u-pPo&_nc_ht=scontent-ort2-1.xx&oh=61ba35cbf94c956d9174c9b1aad7d8d7&oe=6032C88E' alt='Ice Pizza' width='500px'/>
    </div>

    <form className='form-container' onSubmit={onSubmit}>
        <label htmlFor='size'>
            Choice of size
                <select 
                    name='size'
                    value={formState.size}
                    onChange={inputChange}
                >
                        <option value='small'>Small</option>
                        <option value='medium'>Medium</option>
                        <option value='large'>Large</option>
                </select>
        </label>
        <br></br>
        <label htmlFor='sauce'>
            Choice of Sauce
                <select 
                    value={formState.sauce}
                    name='sauce'
                    onChange={inputChange}
                    >   {sauceOptions.map((oneSauce) =>(
                        <option value={oneSauce.value}>{oneSauce.label}</option>
                    ))}
                </select>
        </label>
        <br></br>
       
        <p>Toppings</p>
        {toppingOptions.map(oneOpt =>( 
        <label htmlFor='toppings' class='toggle-switch-label' key='toppings'>
            {oneOpt.label} : 
                <input 
                    name='toppings'
                    type='checkbox'
                    value={oneOpt.value}
                    checked={formState.toppings}
                    onChange={inputChange}
                />
        </label>))} 
        
        <br></br>            
        <label htmlFor='substitutions' class='toggle-switch-label'>
            Sub Ice for Bark? Check for yes: 
                <input 
                    name='substitutions'
                    type='checkbox'
                    value={formState.substitute}
                    onChange={inputChange}
                />
        </label>
        <br></br>
        <label htmlFor='instructions'>
            Add Special Instructions: 
                <input 
                    name='instructions'
                    type='text'
                    value={formState.instructions}
                    onChange={inputChange}
                />
        </label>
        <br></br>

        <div className='person-ordering'>
            <label htmlFor='Person'>
                Your Name: 
                    <input 
                        name='Person'
                        type='text'
                        value={formState.person}
                        onChange={inputChange}
                    />
            </label>
        </div>
        <div className='submit-button'>
            <button>Submit Your Order!</button>
        </div>
    </form>
    </>
    );
}