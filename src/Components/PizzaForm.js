import React, { useState, useEffect } from 'react';
import * as yup from 'yup';
import pizzaSplash from '../Images/Pizza.jpg';
import styled from 'styled-components';
import axios from 'axios';

const schema = yup.object().shape({
    name: yup.string().required('Please enter your name').min(2,'That is not a real name.'),
    phone: yup.string().required('Please enter a phone number.').matches(/^[0-9]{10}$/, 'Please enter a valid phone number.')
})

const defaultFormState = {
    name:'',
    email:'',
    phone:'',
    pizzaSize:'',
    toppings:{
       Pepperoni: false,
       Sausage: false,
       Bacon: false,
       Chicken: false,
       Olives: false,
       Spinach: false,
       Mushroom: false,
       Zucchini: false
    },
    instructions:''
    
}

const defaultErrorState = {
    name:'',
    phone:''
}



const PizzaForm = props => {

    const [formState, setFormState] = useState(defaultFormState);
    const [errors, setErrors] = useState(defaultErrorState);
    const [isDisabled, setIsDisabled] = useState(false);

    useEffect(() => {
        schema.isValid(formState).then(valid => setIsDisabled(!valid));
    }, [formState], schema)

const validate = e => {
    e.persist();
    yup.reach(schema, e.target.name).validate(e.target.value)
    .then(valid => setErrors({...errors, [e.target.name]:''}))
    .catch(err => setErrors({...errors, [e.target.name]: err.errors[0]}))
}


    const handleChange = e => {
        if (e.target.type === 'checkbox') {
            setFormState({
                ...formState,
                toppings: {
                        ...formState.toppings,
                        [e.target.value]: e.target.checked 
                }
            })
    } else {
        setFormState({
                ...formState,
                [e.target.name]: e.target.value
        })
    }
        if(e.target.name === 'name' || e.target.name === 'phone'){
            validate(e);
        }
    }

    

    const handleSubmit = e => {
        e.preventDefault();
        console.log(formState);
        axios
        .post("https://reqres.in/api/users", formState)
        .then((res) => {props.addOrder(res.data) 
        console.log(orders)})
    
            // console.log(`form submit success! "${res.data.name}" has been added!`);
            // console.log(res.data);
            // props.setFormState([...props.formState, res.data]);
        .catch(err => console.log(err));
        }


    return( 
        
        <FormContainer>
            <form onSubmit={handleSubmit}>
            <label> Name
                <input 
                type='text'
                name='name'
                onChange={handleChange}
                data-cy='name'
                value={formState.name}/>
                {errors.name.length > 0 && <p style={{color:'red'}}>{errors.name}</p>}
            </label>
            <label> Email
                <input 
                type='email'
                name='email'
                onChange={handleChange}
                data-cy='email'
                value={formState.email}/>
            </label>
            <label> Phone Number
                <input 
                type='tel'
                name='phone'
                onChange={handleChange}
                data-cy='phone'
                value={formState.phone}/>
                {errors.phone.length > 0 && <p style={{color:'red'}}>{errors.phone}</p>}
            </label>
            <label> Select Pizza Size
                <select name="pizzaSize" onChange={handleChange} data-cy='pizzaSize'>
                    <option value='Small'>Small</option>
                    <option value='Medium'>Medium</option>
                    <option value='Large'>Large</option>
                    <option value='XtrLarge'>XtrLarge</option>
                </select>
            </label>
            <fieldset>
                <div className='checkboxContainer'>
                <h2>Select Toppings</h2>
                <div>
                <label>Pepperoni
                <input 
                    type='checkbox' 
                    name='toppings'
                    onChange={handleChange}
                    data-cy='Pepperoni'
                    value='Pepperoni'
                />
                </label>
                <label> Sausage
                <input
                    type='checkbox' 
                    name='toppings'
                    onChange={handleChange}
                    data-cy='Sausage'
                    value='Sausage'
                />
                </label>
                <label> Bacon
                <input 
                    type='checkbox' 
                    name='toppings'
                    onChange={handleChange}
                    data-cy='Bacon'
                    value='Bacon'
                />
                </label>
                <label> Chicken
                <input 
                    type='checkbox' 
                    name='toppings'
                    onChange={handleChange}
                    data-cy='Chicken'
                    value='Chicken'
                />
                </label>
                <label>Olives
                <input 
                    type='checkbox' 
                    name='toppings'
                    onChange={handleChange}
                    data-cy='Olives'
                    value='Olives'
                />
                </label>
                <label> Spinach
                <input
                    type='checkbox' 
                    name='toppings'
                    onChange={handleChange}
                    data-cy='Spinach'
                    value='Spinach'
                />
                </label>
                <label> Mushroom
                <input 
                    type='checkbox' 
                    name='toppings'
                    onChange={handleChange}
                    data-cy='Mushroom'
                    value='Mushroom'
                />
                </label>
                <label> Zucchini
                <input 
                    type='checkbox' 
                    name='toppings'
                    onChange={handleChange}
                    data-cy='Zucchini'
                    value='Zucchini'
                />
                </label>
                </div>
                </div>
            </fieldset>

            <label>Directions
                <input type='textarea'
                 name='instructions'
                 onChange={handleChange}
                 data-cy='instructions'
                 value={formState.instructions}/>
                
            </label>
            <button data-cy='submit-button' disabled={isDisabled} type='submit'>Order Your Pizza</button>
            </form>
        </FormContainer>
    );
}


const FormContainer = styled.div`
    background-repeat: no-repeat;
    width: 100%;
    height: 100vh;
    background-size: cover;
    background-image: url(${pizzaSplash});
    
    form{
    position: fixed;
    left: 50vh;
    right: 50vh;
    color: white;
    width: 40rem;
    display: flex;
    flex-direction:column;
    align-items: center;
    backdrop-filter: brightness(40%);
    margin-top: 6rem;
    }
    
    .checkboxContainer{
        text-align:center;
    }
`

export default PizzaForm;