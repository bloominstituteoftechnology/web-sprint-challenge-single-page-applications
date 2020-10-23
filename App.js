import React, {useState, useEffect}from "react";
import Form from './src/components/Form'
import Home from './src/components/Home'
import formSchema from './src/validation/formSchema'
import * as yup from 'yup'
import axios from 'axios'
import {Route, Switch, Link} from 'react-router-dom'


const initialFormValues = {
  first_name: '',
  size: '',
  toppings:{
    pepperoni: false,
    chicken: false,
    onions: false,
    tomatoes: false,
  },
  substitute: false,

  instructions:'',
}

const initialFormErrors = {
  first_name:'',
  size: '',
  instructions: '',
}

const initialDisabled = true



const App = () => {

  const [orders, setOrders] = useState([])
  const [formValues, setFormValues] = useState(initialFormValues)
  const [formErrors, setFormErrors] = useState(initialFormErrors)
  const [disabled, setDisabled] = useState(initialDisabled)

  const postNewOrder = newOrder => {
    axios.post ('https://reqres.in/api/users', newOrder)
    .then(res => {
      setOrders([...orders, res.data])
    })
    .catch(err => {
      console.log('order is invalid')
    })
    .finally(() => {
      setFormValues(initialFormValues)
    })
  }

  const onInputChange = event => {
    const name = event.target.name
    const value = event.target.value

    yup
      .reach(formSchema, name)
      .validate(value)
      .then(valid => {
        setFormErrors({
          ...formErrors,
          [name]: ''
        })
      })
      .catch(err => {
        setFormErrors({
          ...formErrors,
          [name]: err.errors[0]
        })
      })
      setFormValues({
        ...formValues,
        [name]: value
      })
  }
  const onCheckboxChange = event => {
    const {name} = event.target
    const {checked} = event.target

    setFormValues({
      ...formValues,
      toppings: {
        ...formValues.toppings,
        [name]: checked,
      }
    })
  }
  const onSubmit = event => {
    event.preventDefault()

    const newOrder = {
      first_name: formValues.first_name.trim(),
      size: formValues.size,
      toppings: Object.keys(formValues.toppings)
      .filter(toppings => formValues.toppings[toppings] === true),
      instructions: formValues.instructions.trim()
    }
    postNewOrder(newOrder)
    console.log(newOrder)
  }

  useEffect(() =>{
    formSchema.isValid(formValues)
    .then(valid => {
      setDisabled(!valid)
    })
  },[formValues])


//   return (
//     <>
//       <h1>Lambda Eats</h1>
//       <p>You can remove this code and create your own header</p>
//     </>
//   );
// };
// export default App;
return (
  <div className="App">
    <header className="App Header">
      <h1>Lambda Eats</h1>
      <nav>
        <Link to='/'>Home</Link>
        <Link to='/pizza'>Order</Link>
      </nav>
    </header>
    <Switch>
      <Route path='/pizza'>
        <Form 
          values={formValues} 
          onInputChange={onInputChange}
          onCheckboxChange={onCheckboxChange}
          onSubmit={onSubmit}
          errors={formErrors}
          disabled={disabled}
        />
      </Route>
      <Route path='/'>
        <Home />
      </Route>
    </Switch>
    {
      orders.map(order =>{
        return (
          <div key={order.id} className='order container'>
            <h4>{order.first_name} your order has been received</h4>
            <h5>{order.size}</h5>
            <h5>{order.toppings}</h5>
            <h5>{order.instructions}</h5>
          </div>
        )
      })
    }
  </div>
);
};
export default App;