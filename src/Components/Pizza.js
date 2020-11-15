import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import Result from './Result'
import * as yup from "yup";
import {Form, FormGroup, Label, Input, Button, CustomInput} from 'reactstrap';
import schema from '../validation/PizzaOrderSchema'


export default function Pizza (props) {
    ////SET THE STATES
    //Create an empty initial state for the form
    const [initialFormValues, setInitialFormValues] = 
    useState({
        //Dropdown
        size: '',
        //Radio
        sauce: '',
        //Checkboxes
        pepperoni: false,
        susage: false,
        canadianBacon: false,
        olives: false,
        //Textarea
        // specialInstructions: '',
        //counter
        howMany: '1',
        }
    );
    //Create a state for the form with user input and to control the form
    const [formValues, setFormValues] = useState(initialFormValues);

    //Create a state for the place order button so that is disabled by default until the requirements have been completed
    const [buttonDisabled, setButtonDisabled] = useState(true);
    
    //Set an orders state
    const [orders, setOrders] = useState([]);

    ////EVENT HANDLERS
    //Make changes to state based on the user action (event) - We will pass this down to the form when we control it with state using the value prop
    const inputChange = (evt) => {
        //Destructure the event.target object so we do not have to write it out as evt.target.value every time. That would still work though if we didn't desturcture and used evt.target.x
        const {name, value, checked, type} = evt.target;
        // debugger;
        const correctValue = type === 'checkbox' ? checked : value;
        setFormValues({...formValues, [name]: correctValue})
        // setFormValues({...formValues.toppings, [ormValues.toppings.[name]: value })
    }
    //Submission
    const submit = (orderDetails)=>{
        const {size, sauce, toppings, howMany} = orderDetails;
        setOrders(...orders, [orderDetails])
    }
    //Changes

    ////SIDE EFFECTS
    //Validate the form and enable the place order button only if the form is valid
    useEffect(() => {
        schema.isValid(formValues).then(valid => setButtonDisabled(!valid))
    },[formValues])

    return (

        // Render the Pizza component 
        <> 
        <StyledFormContainer >
        <StyledForm>
        <Form>
            {/*Dropdown list for size*/}
            <FormGroup>
                <legend> Select Size </legend>
                <Input type="select" onChange={inputChange} name="size">
                    <option defaultChecked={true} hidden value=''>
                        Select a size
                    </option>
                    <option value='small'> Small </option>
                    <option value='medium'>Medium</option>
                    <option value='large'>Large</option>
                    <option value='xlarge'>X-Large</option>
                </Input>
            </FormGroup>

            {/*Radio buttons for sauce*/}
            <FormGroup>
                <legend>Select Sauce</legend>
                <FormGroup check>
                    {/* <Label check> */}
                    <Input type="radio" name="sauce" value='regular' onChange={inputChange}/>{' '}
                    Regular Sauce
                    {/* </Label> */}
                </FormGroup>
                <FormGroup check>
                    {/* <Label check> */}
                    <Input type="radio" name="sauce" value='spicy' onChange={inputChange}/>{' '}
                    Spicy Sauce
                    {/* </Label> */}
                </FormGroup>
            </FormGroup>
            
            
                {/* Checkboxes for the toppings */}
            <FormGroup>
                <CustomInput id='pepperoni' checked= {formValues.pepperoni} type="checkbox" name="pepperoni" label="Pepperoni" onChange={inputChange}/>
                <CustomInput id='susage' checked= {formValues.susage} type="checkbox" name="susage" label="Susage" onChange={inputChange}/>
                <CustomInput id='canadianBacon' checked= {formValues.canadianBacon} type="checkbox" name="canadianBacon" label="Canadian Bacon" onChange={inputChange}/>
                <CustomInput id='olives' checked={formValues.olives} type='checkbox' name='olives' label='Olives' onChange={inputChange} />
            </FormGroup>            

            <FormGroup className="number-input-submit">
                <input type="number" className='number-counter' name='howMany' value={formValues.howMany || '0'} onChange={inputChange}/>                
                <Button disabled={buttonDisabled} color='success' className='submit-button'>
                Place Order
                </Button>
            </FormGroup>
       </Form>
       
       
       
       </StyledForm>
       </StyledFormContainer>
       </>
     );
   }

const StyledFormContainer = styled.div`
display: flex;
/* border: blue solid 1px; */
align-items: center;
 justify-content: center; 
`

const StyledForm = styled.div `
background-color: beige;
min-width: 500px;
display: flex;
flex-flow: column;
margin-top: 10px;
padding: 10px;
flex-flow: column;
align-items: center;
justify-content: center;
   .submit-button-div{
       display: flex;
       justify-content: center;
   }
   .number-input-submit{
        /* input[type=number]::-webkit-inner-spin-button { */
        /* cursor: none; */
        /* } */
        display: flex;
        flex-flow: row wrap;
        justify-content: center;
    }
        .submit-button{
            min-width: 50%;
            margin-left: 5px;
        }
        .number-counter{
            max-width: 25%;
            opacity: 1
        }
        input[type=number]::-webkit-inner-spin-button {
        opacity: 1
}
`