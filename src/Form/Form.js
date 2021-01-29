
import React,{ useState, useEffect, Redirect } from 'react'
import * as yup from 'yup'
import axios from 'axios'
import formSchema from './Schema'

const initialUserForm = {
    name: '',
    size: 'Select a Size',
    topping1: false,
    topping2: false,
    topping3: false,
    topping4: false,
    note: ''
}
const initialFormErrors = {
    name: 'Name is required',
    size: 'Size is required'
}
const Form = props => {
    // eslint-disable-next-line
    const { pizzaData,setPizzaData } = props

    const [userForm, setUserForm] = useState({_: 'UserForm', ...initialUserForm})
    const [formErrors, setFormErrors] = useState({_: 'FormErrors', ...initialFormErrors})
    const [submitDisabled, setSubmitDisabled] = useState(true)

    useEffect(() => {
        formSchema.isValid(userForm).then(valid => {
            setSubmitDisabled(!valid)
        })
    },[userForm])

    const TrimData = data => {
        return {
            name: data.name.trim(),
            note: data.note.trim(),
            size: data.size,
            topping1: data.topping1,
            topping2: data.topping2,
            topping3: data.topping3,
            topping4: data.topping4,
        }
    }

    const FormChange = evt => {
        let { name, value, checked } = evt.target
        if (name === 'name' || name === 'size'){
            yup
            .reach(formSchema, name)
            .validate(typeof initialUserForm[name] === 'boolean' ? checked : value)
            .then(valid => setFormErrors({...formErrors, [name]: ''}))
            .catch(err => setFormErrors({...formErrors, [name]: err.errors[0]}))
        }
        setUserForm({...userForm, [name]: typeof initialUserForm[name] === 'boolean' ? checked : value})
    }
    const FormSubmit = evt => {
        evt.preventDefault()
        setSubmitDisabled(true)
        axios.post('https://reqres.in/api/users',TrimData(userForm))
            .then(res => {
                console.log(res.data)
                setUserForm({_: 'UserForm', ...initialUserForm})
                setPizzaData(res.data)
            })
            .catch(err => {
                debugger
            })
    }

    return(
        <>
            {/* {pizzaData ? <Redirect to='/congrats/' /> : <></>} */}
            <form onSubmit={FormSubmit}>
                <div className='inputs'>
                <label>
                    Name:
                    <input
                        className='textbox'
                        name='name'
                        type='text'
                        value={userForm.name}
                        onChange={FormChange}
                    ></input>
                </label>
                <label>
                    Size:
                    <select value={userForm.size} className='textbox' name='size' onChange={FormChange}>
                        <option disabled>Select a Size</option>
                        <option value='Small'>Small</option>
                        <option value='Medium'>Medium</option>
                        <option value='Large'>Large</option>
                        <option value='Extra Large'>Extra Large</option>
                    </select>
                </label>
                <label>
                    Extra Cheese:
                    <input
                        name='topping1'
                        type='checkbox'
                        checked={userForm.topping1}
                        onChange={FormChange}
                    ></input>
                </label>
                <label>
                    Pepperoni:
                    <input
                        name='topping2'
                        type='checkbox'
                        checked={userForm.topping2}
                        onChange={FormChange}
                    ></input>
                </label>
                <label>
                    Sausage:
                    <input
                        name='topping3'
                        type='checkbox'
                        checked={userForm.topping3}
                        onChange={FormChange}
                    ></input>
                </label>
                <label>
                    Pineapple:
                    <input
                        name='topping4'
                        type='checkbox'
                        checked={userForm.topping4}
                        onChange={FormChange}
                    ></input>
                </label>
                <label>
                    Note to Chef: 
                    <input
                        className='textbox'
                        name='note'
                        type='text'
                        value={userForm.note}
                        onChange={FormChange}
                    ></input>
                </label>
                <button id='Submit' disabled={submitDisabled}>Submit</button>
                </div>
                <div className='errors'>
                    <p>{formErrors.name}</p>
                    <p>{formErrors.size}</p>
                </div>
            </form>
        </>
    )
}
export default Form