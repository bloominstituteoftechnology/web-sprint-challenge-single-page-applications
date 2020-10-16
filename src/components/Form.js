import React, { useState } from 'react';
import HomeStyle from './HomeStyle';
import { Link } from 'react-router-dom';
import Styled from 'styled-components';
import * as yup from 'yup';
import axios from 'axios';


const FormStyle = Styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin-top: 10%;
  .errorName {
    color: red;
  }
  `;

  const schema = yup.object().shape({
    name:
    yup.string().required('Name is a required field').min(2, 'Name field length must be atleast 2 characters'),
    size:
    yup.boolean().oneOf([true], 'You must select a pizza size'),
    Pepperoni:
    yup.boolean(),
    Ham:
    yup.boolean(),
    Pineapple:
    yup.boolean(),
    ExtraCheese:
    yup.boolean(),
    siInput:
    yup.string(),
  })

function FormPage () {

  const [ form, setForm ] = useState({
    name: '',
    size: '0',
    Pepperoni: false,
    Ham: false,
    Pineapple: false,
    ExtraCheese: false,
    siInput: '',
  })

  const [ errors, setErrors ] = useState({
    name: '',
    size: '',
    Pepperoni: '',
    Ham: '',
    Pineapple: '',
    ExtraCheese: '',
    siInput: '',
  })

  const [ user, setUser ] = useState({
    setForm
  })

  const submit = event => {
    event.preventDefault()
    const newUser = {
      name: form.name,
      size: form.size,
      Pepperoni: form.Pepperoni,
      Ham: form.Ham,
      Pineapple: form.Pineapple,
      ExtraCheese: form.ExtraCheese,
      siInput: form.siInput,
    }

  axios.post('https://reqres.in/api/users', newUser)
        .then(res => {
            setForm({
              name: '',
              size: '0',
              Pepperoni: false,
              Ham: false,
              Pineapple: false,
              ExtraCheese: false,
              siInput: '',
            })
            setUser({
              name: form.name,
              size: form.size,
              Pepperoni: form.Pepperoni,
              Ham: form.Ham,
              Pineapple: form.Pineapple,
              ExtraCheese: form.ExtraCheese,
              siInput: form.siInput,
            })
        })
        .catch(err => {
        })
    }



  const setFormErrors =(name, value) => {
    yup.reach(schema, name).validate(value)
    .then(() => setErrors({ ...errors, [name]: '' }))
    .catch(err => setErrors({ ...errors, [name]: err.errors[0] }))
}

  const change = event => {
    const { checked, value, name, type } = event.target
    const valueToUse = type === 'checkbox' ? checked : value
    setFormErrors(name, valueToUse)
    setForm({ ...form, [name]: valueToUse})
  }

    return (
      <>
      <HomeStyle>
            <div className='HeaderContainer'>
              <div className='Logo'>
                <h1>Lambda Eats</h1>
              </div>
              <div className='Navigation'>
                <Link to='/'>
                  Home
                </Link>
                <Link to='/Pizza'>
                  Form
                </Link>
              </div>
            </div>
            </HomeStyle>

            <FormStyle>
            <div className='errorName'>
                {errors.name}<br />
              </div>
            <form onSubmit={submit} autoComplete='off'>
            <div>
              <label>
                Name:
                <input onChange={change} value={form.name} type='text' name='name' />
              </label>
              </div>

              <div>
              <label>
                Pizza Size:
                <select onChange={change} value={form.size} name='size'>
                  <option value="0">---Select Size---</option>
                  <option value="1">Kids</option>
                  <option value="2">Small</option>
                  <option value="3">Medium</option>
                  <option value="4">Large</option>
                  <option value="5">Extra Large</option>
                </select>
              </label>
              </div>

              <div>
              <label>
                Pepperoni:
                <input onChange={change} checked={form.Pepperoni} name='Pepperoni' type='checkbox' />
              </label>
              <label>
                Ham:
                <input onChange={change} checked={form.Ham} name='Ham' type='checkbox' />
              </label>
              <label>
                Pineapple:
                <input onChange={change} checked={form.Pineapple} name='Pineapple' type='checkbox' />
              </label>
              <label>
                Extra Cheese:
                <input onChange={change} checked={form.ExtraCheese} name='ExtraCheese' type='checkbox' />
              </label>
              </div>

              <div>
              <label>
                Special Instructions:
                <input onChange={change} value={form.siInput} name='siInput' type='text' />
              </label>
              </div>

              <button name='button'>Add to order</button>

              <div className='returnContainer'>
                <h3>Returned Data:</h3>
                <strong>Name:</strong><p>{user.name}</p>
                <strong>Size:</strong><p>{user.size}</p>
                <strong>Pepperoni:</strong><p>{user.Pepperoni === true ? 'Add Topping' : ' '}</p>
                <strong>Ham:</strong><p>{user.Ham === true ? 'Add Topping' : ' '}</p>
                <strong>Pineapple:</strong><p>{user.Pineapple === true ? 'Add Topping' : ' '}</p>
                <strong>ExtraCheese:</strong><p>{user.ExtraCheese === true ? 'Add Topping' : ' '}</p>
                <strong>Special Instructions:</strong><p>{user.siInput}</p>

              </div>
              
            </form>
            </FormStyle>
            </>
    );
  };
  export default FormPage;
