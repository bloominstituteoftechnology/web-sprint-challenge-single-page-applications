import React, { useState } from 'react';
//import ConfirmPage from './components/ConfirmPage';
import * as yup from 'yup';
import axios from 'axios'


let sauceOptions = [
    {
      label: "Dirt",
      value: "dirt",
      testId: "dirt",
    },
    {
      label: "Leaves",
      value: "leaves",
      testId: "leaves",
    },
    {
      label: "Water",
      value: "water",
      testId: 'water',
    },
    {
      label: "Crushed Obsidian",
      value: "crushed obsidian",
      testId: 'crushed-obsidian',
    },
];

  let toppingOptions = [
    {
        label: "Icicles",
        value: "icicles",
        testId: "icicles-checkbox",
    },
    {
        label: "Snow",
        value: "snow",
        testId: 'snow-checkbox',
    },
    {
        label: "Berries",
        value: "berries",
        testId: 'berries-checkbox',
    },
    {
        label: "Rocks",
        value: "rocks",
        testId: 'rocks-checkbox'
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

        // Should be able to check errorState or Yup here instead of manually
        if(!formState.person || formState.person.trim().length < 2) {
            window.alert('Name is required and must be at least 2 letters in length');
            return
        }

        // https://github.com/LambdaSchool/web-sprint-challenge-single-page-applications#faqs
        console.log('Order placed for: ', formState);
        axios
            .post('https://reqres.in/api/orders', formState)
            .then(response => {
                console.log('Here is the created order record: ', response.data)
            })
        setFormState(formState)
    }
    //validate function - validating the form fields with yup
    const validate = (evt) => {
        // Check what our formState would be after updating
        // to use the new value
        const proposedUpdatedSchema = {
            ...formState,
            [evt.target.name]: evt.target.value
        }

        // See if the updated state is valid using our Yup
        // form schema
        formSchema
            .isValid(proposedUpdatedSchema)
            // If it is valid, clear the error state
            .then(res => {
                setErrorState({
                    ...errorState,
                    [evt.target.name]: ""
                })
            })
            // If it is not valid, set the error state
            // so we can notify the user of existing errors
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

            // Check if input change results in a valid or invalid formState
            validate(evt);

            const theValue = evt.target.type === 'checkbox' 
                ? evt.target.checked
                : evt.target.value; 

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
                >   {sauceOptions.map((oneSauce, i) =>(
                    <option key={i} value={oneSauce.value}>{oneSauce.label}</option>
                ))}
            </select>
        </label>
        <br></br>
       
        <h4>Toppings:</h4>
        {toppingOptions.map((oneOpt, index) =>( 
        <label
            htmlFor='toppings'
            className='toggle-switch-label'
            style={{ display: 'block' }}
            key={index}
        >
            {oneOpt.label}: 
            <input
                data-cy={oneOpt.testId}
                name={oneOpt.label}
                type='checkbox'
                value={oneOpt.value}
                checked={formState.toppings}
                onChange={inputChange}
            />
        </label>))} 
        
        <br></br>            
        <label htmlFor='substitutions' className='toggle-switch-label'>
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
            <label htmlFor='person'>
                Your Name: 
                    <input 
                        data-cy="name-field"
                        name='person'
                        type='text'
                        minLength="2"
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