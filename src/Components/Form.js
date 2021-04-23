import axios from "axios";
import React, {useEffect, useState} from "react";
import styled from "styled-components";
import * as yup from 'yup';

const DivBodyStyles = styled.div `
    text-align:center;
`

const UlFormStyle = styled.ul `
dipslay:flex;
flex:column;
margin:1rem;
list-style-type:none;
`;

const Li = styled.li`
margin-left:auto;
margin-right:auto;
padding:1rem;
font-size:1.5rem;
`

const CheckboxDiv = styled.div`
display:flex;
flex-flow:column wrap;
height:10rem;
width:20rem;
margin-right:auto;
margin-left:auto;
`

const Button = styled.button`
width:10%;
height:4%;
margin-left:auto;
margin-right:auto;
`
/*const pizzaOrder = []*/

const schema = yup.object().shape({
    name: yup.string().required().min(2,'name must be at least 2 characters'),
})



const initialValues = {
    name: '',
    size: '',
    topping1: false,
    topping2: false,
    topping3: false,
    topping4: false,
    topping5: false,
    special: '',
}

export default function Form(Props){

    const [disabled, setDisabled] = useState(true)
    const[formValues, setFormValues] = useState(initialValues);
    const[errors, setErrors] = useState({initialValues})

    const setFormErrors = (name,value) => {
        yup.reach(schema,name).validate(value)
        .then(() => setErrors({...errors, [name]: ''}))
        .catch(err => setErrors({...errors, [name]: err.errors[0] }))
    }
   

    useEffect(() => {
    schema.isValid(formValues).then(valid => setDisabled(!valid))
    },[formValues])

    

    const change = ev =>{
        const { checked,name,value,type } = ev.target
        const values = type === 'checkbox' ? checked: value 
        console.log(name);
        console.log(value);
        setFormErrors(name, values)
        setFormValues({...formValues, [name]: values})
    }

    const submit = ev => {
        ev.preventDefault();
        const newPizza = {
            name: formValues.name,
            size: formValues.size,
            topping1: formValues.topping1,
            topping2: formValues.topping2,
            topping3: formValues.topping3,
            topping4: formValues.topping4,
            topping5: formValues.topping5,
            special: formValues.special,
    }
        axios.post('https://reqres.in/api/orders', newPizza)
            .then(res => {
                setFormValues(initialValues)
            })
            .catch(err =>{

            })
        
}

    

    return (
        <DivBodyStyles>
            <h2>Build Your Own Pizza!</h2>
                <form id='pizza-form' onSubmit={submit}>
                    <UlFormStyle>
                        <Li>
                            <h3>Choice of Size</h3>
                            <select onChange={change} value={formValues.size} name ="size">
                                <option value="">Large</option>
                                <option value="1">Medium</option>
                                <option value="2">Small</option>
                            </select>
                        </Li>
                        <h3>Choice of Sauce</h3>
                        <Li>
                            <label>BBQ</label>
                            <input 
                            type='radio'
                            onChange={change}
                            value="bbq"
                            name="topping1"
                            checked={formValues.topping1 === 'bbq'}
                            />
                        </Li>
                        <Li>
                            <label>Ranch</label>
                            <input 
                            type='radio'
                            onChange={change}
                            value="ranch"
                            name="topping1"
                            checked={formValues.topping1 === 'ranch'}
                            />
                        </Li>
                        <Li>
                            <label>Original</label>
                            <input type='radio'
                            onChange={change}
                            value="original"
                            name="topping1"
                            checked={formValues.topping1 === 'original'}
                            />
                        </Li>
                        <Li>
                            <label>Spinach</label>
                            <input type='radio'
                            onChange={change}
                            value="spinach"
                            name="topping1"
                            checked={formValues.topping1 === 'spinach'}
                            />
                        </Li>
                        <h3>Add Toppings</h3>
                    <CheckboxDiv>
                        <Li>
                            <label>Mushrooms</label>
                            <input type='checkbox'
                            onChange={change}
                            checked={formValues.topping2}
                            value='mushrooms'
                            name="topping2"
                            />
                        </Li>
                        <Li>
                            <label>Pepperonies</label>
                            <input type='checkbox'
                            onChange={change}
                            checked={formValues.topping3}
                            value='pepperonies'
                            name="topping3"
                            />
                        </Li>
                        <Li>
                            <label>Peppers</label>
                            <input type='checkbox'
                            onChange={change}
                            checked={formValues.topping4}
                            value='peppers'
                            name="topping4"
                            />
                        </Li>
                        <Li>
                            <label>Garlic</label>
                            <input type='checkbox'
                            onChange={change}
                            checked={formValues.topping5}
                            value='garlic'
                            name="topping5"
                            />
                        </Li>
                    </CheckboxDiv>
                        <h3>Choice of Substitute</h3>
                        <Li>
                            <label></label>
                            <input />
                        </Li>

                        <Li>
                            <label>Special Instructions</label>
                            <input name='special' onChange={change}/>
                        </Li>
                        <div style={{color:'red'}}>
                            <div>{errors.name}</div>
                        </div>
                        <Li>
                            <label>Name</label>
                            <input id='name-input' name='name' onChange={change}/>
                        </Li>
                    </UlFormStyle>
                    <Button disabled={disabled}>Add to Order</Button>
                </form>
        </DivBodyStyles>
    )
  }
  
