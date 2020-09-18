import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { FormGroup, Input, Button, Alert } from 'reactstrap'
import { BrowserHistory } from 'react-router-dom'
import styled from 'styled-components'
import * as yup from 'yup'

const Form = styled.form`
  max-width: 800px;
  margin: 60px auto;
  border: 2px solid black;
  padding: 20px;
`
const Styledh3 = styled.h3`
  text-align: center;
`
const StyledToppings = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  height: 400px;
  align-content: space-between;
  padding: 20px;
`
const StyledLabel = styled.label`
  padding: 10px 0;
`
const StyledOrderFooter = styled.div`
  display: flex;
  justify-content: space-between;
`

export default function OrderForm({ order, setOrder }) {

  const initialState = {
    customer: '',
    size: '',
    sauces: [
      { name: 'Original Red', id: 'original-red', isChecked: false },
      { name: 'Spinach Alfredo', id: 'spinach-alfredo', isChecked: false },
      { name: 'Garlic Ranch', id: 'garlic-ranch', isChecked: false },
      { name: 'BBQ Sauce', id: 'bbq-sauce', isChecked: false }
    ],
    toppingsChecked: [
      { name: 'Pepperoni', id: 'pepperoni', isChecked: false, cypressTest: 'pepperoniTest' },
      { name: 'Sausage', id: 'sausage', isChecked: false, cypressTest: 'sausageTest' },
      { name: 'Canadian Bacon', id: 'canadian-bacon', isChecked: false },
      { name: 'Spicy Italian Sausage', id: 'spicy-italian-sausage', isChecked: false },
      { name: 'Grilled Chicken', id: 'grilled-chicken', isChecked: false },
      { name: 'Onions', id: 'onions', isChecked: false },
      { name: 'Mushrooms', id: 'mushrooms', isChecked: false },
      { name: 'Green Pepper', id: 'green-pepper', isChecked: false },
      { name: 'Diced Tomatos', id: 'diced-tomatos', isChecked: false },
      { name: 'Black Olives', id: 'black-olives', isChecked: false },
      { name: 'Roasted Garlic', id: 'roasted-garlic', isChecked: false },
      { name: 'Artichoke Hearts', id: 'artichoke-hearts', isChecked: false },
      { name: 'Three Cheese', id: 'three-cheese', isChecked: false },
      { name: 'Pineapple', id: 'pineapple', isChecked: false },
      { name: 'Extra Cheese', id: 'extra-cheese', isChecked: false },
    ],
    substitute: '',
    instructions: '',
    quantity: ''
  }

  const [formState, setFormState] = useState(initialState);
  const [serverError, setServerError] = useState('')
  const [formValid, setFormValid] = useState(false)
  const [isButtonDisabled, setButtonDisabled] = useState(true)
  const [errors, setErrors] = useState(initialState)

  const formSchema = yup.object().shape({
    customer: yup.string().min(3, "Your name is required").required("Your name is required"),
    size: yup.string().required("Please choose a size"),
    sauces: yup.array()
      .of(yup.object().shape({
        name: yup.string(),
        id: yup.string(),
        isChecked: yup.boolean()
      })),
    toppingsChecked: yup.array()
      .of(yup.object().shape({
        name: yup.string(),
        id: yup.string(),
        isChecked: yup.boolean()
      })),
    instructions: yup.string()
  })

  const validateChange = e => {
    const name = e.target.name;
    yup
      .reach(formSchema, e.target.name, e.target.type)
      .validate(e.target.value)
      .then(valid => {
        setErrors({ ...errors, [e.target.name]: "" })
      })
      .catch(err => {
        console.log("OrderForm -> err", err)
        setErrors({ ...errors, [name]: err.errors })
      })
  }

  useEffect(() => {
    formSchema.isValid(formState).then(valid => {
      setButtonDisabled(!valid)
      setFormValid(valid)
      console.log("OrderForm -> valid", valid)
    })
  }, [formState])

  const handleChange = e => {
    e.persist();
    let newFormState;
    if (e.target.type === 'checkbox') {
      newFormState = {
        ...formState,
        toppingsChecked: formState.toppingsChecked.map(item => {
          return (
            item.id === e.target.id ? {
              ...item, isChecked: !item.isChecked
            } : { ...item }
          )
        })
      }
    } else if (e.target.type === 'radio') {
      newFormState = {
        ...formState,
        sauces: formState.sauces.map(item => {
          return (
            item.id === e.target.id ? {
              ...item, isChecked: !item.isChecked
            } : { ...item, isChecked: false }
          )
        })
      }
    } else {
      newFormState = {
        ...formState, [e.target.name]: e.target.value
      }
    }
    validateChange(e)
    setFormState(newFormState)
  }

  const handleSubmit = e => {
    e.preventDefault();
    axios.post('https://reqres.in/api/users', formState)
      .then(res => {
        console.log(res.data)
        const data = {
          ...res.data,
          sauces: res.data.sauces.filter(sauce => sauce.isChecked === true),
          toppingsChecked: res.data.toppingsChecked.filter(toppings => toppings.isChecked === true),
        }
        setOrder([...order, data])
        setFormState(initialState)
      }
      )
      .catch(err => console.log(err))
  }

  return (
    <Form style={{ padding: '40px' }} onSubmit={e => handleSubmit(e)}>
      <Styledh3>Build Your Own Pizza</Styledh3>
      <FormGroup>
        <legend>Your Name</legend>
        <Input type="text" placeholder="Your Name" value={formState.customer} onChange={e => handleChange(e)} name="customer" data-cy="customer" />
        {errors.customer ? (<Alert color="warning">{errors.customer}</Alert>) : null}
      </FormGroup>

      <FormGroup>
        <legend>Select Size</legend>
        <Input type="select" onChange={e => handleChange(e)} value={formState.size} name="size" data-cy="size">
          <option value="">Select Pizza Size</option>
          <option value="small">Small</option>
          <option value="medium">Medium</option>
          <option value="large">Large</option>
        </Input>
        {errors.size ? (<Alert color="warning">{errors.size}</Alert>) : null}
      </FormGroup>

      <FormGroup check style={{ display: 'flex', flexDirection: 'column' }}>
        <legend>Choice of Sauce</legend>
        {formState.sauces.map(sauce => {
          return (
            <StyledLabel htlmFor={sauce.id} check>
              <Input type="radio" name="sauces" id={sauce.id} onChange={e => handleChange(e)} value={sauce.isChecked} checked={sauce.isChecked} />
              {sauce.name}
            </StyledLabel>
          )
        })}

      </FormGroup>

      <FormGroup check style={{ display: 'flex', flexDirection: 'column' }}>
        <legend>Add Toppings</legend>
        <StyledToppings>
          {formState.toppingsChecked.map(toppings => {
            return (
              <StyledLabel htmlFor={toppings.id}>
                <Input
                  type="checkbox"
                  checked={toppings.isChecked} name="toppingsChecked"
                  id={toppings.id}
                  data-cy={toppings.cypressTest}
                  onChange={e => handleChange(e)}
                />
                {toppings.name}
              </StyledLabel>
            )
          })}
        </StyledToppings>
      </FormGroup>
      {/* 
      <FormGroup>
        <legend>Choice of Substitute</legend>
        <CustomInput type="switch" label="Gluten Free Crust (+ $1.00" value={formState.substitute} name="substitute" onChange={e => handleChange(e)} />
      </FormGroup> */}

      <FormGroup>
        <legend>Instructions</legend>
        <Input type="text" name="instructions" value={formState.instructions} onChange={e => handleChange(e)} placeholder="Anything else you'd like to add?" />
      </FormGroup>

      <Button type="submit" data-cy="submit" disabled={isButtonDisabled} color="primary">Place your order!</Button>
    </Form>
  )
}