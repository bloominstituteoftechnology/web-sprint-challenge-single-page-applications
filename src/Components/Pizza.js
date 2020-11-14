import React, {useState} from 'react';
import styled from 'styled-components';
import Result from './Result'
import * as yup from "yup";
import {Form, FormGroup, Label, Input, FormFeedback, Button, CustomInput} from 'reactstrap';


export default function Pizza (props) {
    ////SET THE STATES
    const [initialFormValue, setInitialFormValues] = 
    useState({
        //Dropdown
        size: '',
        //Radio
        sauce: '',
        //Checkboxes
        toppings: {
            pepperoni: false,
            susage: false,
            canadianBacon: false,
            olives: false
        },
        //Textarea
        // specialInstructions: '',
        //counter
        howMany: '',
        }
    );

    //Set an orders state
    const [orders, setOrders] = useState([]);

    ////EVENT HANDLERS
    //Submission
    const submit = (orderDetails)=>{
        const {size, sauce, toppings, howMany} = orderDetails;
        setOrders(...orders, [orderDetails])
    }
    //Changes

    return (

        // Render the Pizza component 
        <> 
        <StyledFormContainer >
        <StyledForm>
        <Form>
            <FormGroup>
                <legend> Select Size </legend>
                <Input type="select" name="pizzaSize" id="pizzaSize">
                    <option selected={true} disabled="disabled">Select Size
                    </option>
                    <option value='small'> Small </option>
                    <option value='medium'>Medium</option>
                    <option value='large'>Large</option>
                    <option value='xlarge'>X-Large</option>
                </Input>
            <FormFeedback> Please select a size! </FormFeedback>
            </FormGroup>
            <FormGroup>
                <legend>Select Sauce</legend>
                <FormGroup check>
                    {/* <Label check> */}
                    <Input type="radio" name="radio1" />{' '}
                    Regular Sauce
                    {/* </Label> */}
                </FormGroup>
                <FormGroup check>
                    {/* <Label check> */}
                    <Input type="radio" name="radio1" />{' '}
                    Spicy Sauce
                    {/* </Label> */}
                </FormGroup>
            </FormGroup>
            
            <FormGroup>
                <legend>Select Toppings</legend>
                <div>
                    <CustomInput type="checkbox" id="pepperoni" label="Pepperoni" />
                    <CustomInput type="checkbox" id="susage" label="Susage" />
                    <CustomInput type="checkbox" id="canadianBacon" label="Canadian Bacon" />
                    <CustomInput type="checkbox" id="olives" label="Olives" />
                </div> 
            </FormGroup>
            
            <FormGroup className="number-input-submit">
                    <input type="number" className='number-counter' value='1'/>                
                    <Button color='success' className='submit-button'>
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

const StyledForm = styled.form `
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