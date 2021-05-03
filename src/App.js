import React, { useEffect, useState } from 'react'
import Foods from './components/Foods'
import FoodsForm from './components/FoodsForm'
import * as yup from 'yup'
import axios from 'axios'
import schema from './validate/formSchema'


const initialFormValues = {
  username: "",
  email: "",
  size: "",
  peppers: false,
  sausage: false,
  pineapple: false,
}

const initialFormErrors = {
  username: "",

}

const initialFoods = [];
const initialDisabled = true;


export default function App() {

  const [foods, setFoods] = useState(initialFoods); 
  const [formValues, setFormValues] = useState(initialFormValues); 
  const [formErrors, setFormErrors] = useState(initialFormErrors); 
  const [disabled, setDisabled] = useState(initialDisabled); 


  const getFoods = () => {
    axios
    .get(`http://localhost:4000/friends`)
    .then((res) => {
      setFoods(res.data)
    })
    .catch((err) => {
      debugger
      alert(`have error`)
    })
  } 

  const postNewFood = (newFood) => {
    axios
    .post(`http://localhost:4000/friends`, newFood)
    .then((res) => {
      setFoods([res.data, ...foods])
      setFormValues(initialFormValues)
    })
    .catch((err) => {
      console.log(err)
    })
  }

  const inputChange = (name, value) => {
    yup
      .reach(schema, name)
      .validate(value)
      .then(() => {
        setFormErrors({
          ...formErrors,
          [name]: "",
        })
      })
      .catch((err) => {
        setFormErrors({
          ...formErrors,
          [name]: err.errors[0],
        })
      })

      setFormValues({
        ...formValues,
        [name]: value,
      })
  }

  const formSubmit = () => {
    const newFood = {
      username: formValues.username.trim(),

      toppings: ["peppers", "sausage", "pineapple"].filter(
        (topping) => formValues[topping]
        )
    } 
    postNewFood(newFood)
  }

  useEffect(() => {
    getFoods()
  }, [])

  useEffect(() => {
    schema.isValid(formValues).then((valid) => {
      setDisabled(!valid)
    })
  }, [formValues])

  return (
    <div>
      <header>
        <h1>Pizza</h1>
      </header>
      

      <FoodsForm 
      values={formValues}
      change={inputChange}
      submit={formSubmit}
      disabled={disabled}
      errors={formErrors}
      />

      {foods.map((food) => {
        return <Foods key={food.id} details={food} />
      })}
      
    </div>
  )
}
