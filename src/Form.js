import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios'
import * as yup from 'yup'

const schema = yup.object().shape({
    name: yup.string().required('Order needs a name or initials.').min(2, 'Name or initials required'),
    toppings: yup.boolean().oneOf([true], 'Select at least one topping.')

})

function Form({ pizzaValues, setPizzaValues }){
    const [formValues, setFormValues] = useState({})
    const [errors, setErrors] = useState({})
    const [disabled, setDisabled] = useState(true)

const setFormErrors = (name, value) => {
    yup.reach(schema, name).validate(value)
    .then(() => setErrors({ ...setErrors, [name]: ''}))
    .catch(err => setErrors({ ...errors, [name]: err.errors[0]}))
}
const onValueChange = event => {
    const { checked, value, name, type } = event.target
    const valueToUse = type === 'checkbox' ? checked : value
    setFormErrors(name, valueToUse)
    setFormValues({ ...formValues, [name]: valueToUse})
}

const onFormSubmit = event => {
    event.preventDefault() //once again, this info's not going anywhere real
    const pizzaUser = {name: formValues.name.trim(),  toppings: formValues.toppings}
    axios.post('https://reqres.in/api/users', pizzaUser)
        .then(res => {
            setFormValues({name: '', })
        })
        .catch(err => {
            console.log('PIZZA ERROR!')
            debugger
        })
    setPizzaValues([...pizzaValues, formValues])
}

useEffect(() =>{
    schema.isValid(formValues).then(valid => setDisabled(!valid))
}, [formValues])

return(
    <form className='formComponent' onSubmit={onFormSubmit}>
        <input
            type='text'
            value={formValues.name}
            placeholder='Customer Name'
            onChange={onValueChange}
            name='name'
        />
        <br />
        <select 
            type='select'
            value={formValues.size}
            placeholder='Pizza Size'
            onchange={onValueChange}
            name='pizzasize'
        >
            <option value='Personal'>Personal: 6"</option>
            <option value='Small'>Small: 8"</option>
            <option value='Medium'>Medium: 12"</option>
            <option value='Large'>Large: 16"</option>
            <option value='XL'>Extra Large: 18"</option>
            <option value='ROYAL'>ROYAL SIZED: 24"</option>
        </select>
        <br />
        <p> Choose your Toppings!</p>
        <label>Extra Cheese
            <input 
            onChange={onValueChange}
            checked={formValues.toppings}
            name="toppings"
            type="checkbox"
            />
        </label>
        <br />

        <label>Pepperoni
            <input 
            onChange={onValueChange}
            checked={formValues.toppings}
            name="toppings"
            type="checkbox"
            />
        </label>
        <br />

        <label>Sausage
            <input 
            onChange={onValueChange}
            checked={formValues.toppings}
            name="toppings"
            type="checkbox"
            />
        </label>
        <br />

        <label>Ham
            <input 
            onChange={onValueChange}
            checked={formValues.toppings}
            name="toppings"
            type="checkbox"
            />
        </label>
        <br />

        <label>Pineapple
            <input 
            onChange={onValueChange}
            checked={formValues.toppings}
            name="toppings"
            type="checkbox"
            />
        </label>
        <br />

        <label>Sardines
            <input 
            onChange={onValueChange}
            checked={formValues.toppings}
            name="toppings"
            type="checkbox"
            />
        </label>
        <br />

        <label>Calamari
            <input 
            onChange={onValueChange}
            checked={formValues.toppings}
            name="toppings"
            type="checkbox"
            />
        </label>
        <br />

        <label>Shrimp
            <input 
            onChange={onValueChange}
            checked={formValues.toppings}
            name="toppings"
            type="checkbox"
            />
        </label>
        <br />

        <label>Arugula
            <input 
            onChange={onValueChange}
            checked={formValues.toppings}
            name="toppings"
            type="checkbox"
            />
        </label>
        <br />

        <label>Gabba Goo
            <input 
            onChange={onValueChange}
            checked={formValues.toppings}
            name="toppings"
            type="checkbox"
            />
        </label>
        <br />
        <br />
        <input
            type='text'
            value={formValues.special}
            placeholder='Special Instructions'
            onChange={onValueChange}
            name='special'
        />
        <br />
        <br />
        <button disabled={disabled}>Submit order!</button>
    </form>
)
}
export default Form;