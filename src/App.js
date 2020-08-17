import React, { useState, useEffect } from "react";
import { Switch, Route, Link } from 'react-router-dom';
import Form from './components/Form.js';
import Orders from './components/Orders.js';
import formSchema from './validation/formSchema'
import axios from 'axios';
import * as Yup from 'yup'
import './App.css';

// Set initial values
const initialFormValues = {
  name: '',
  size: '',
  sauce: {
    red: false,
    garlic: false,
    spicy: false,
    bbq: false,
  },
  cheese: {
    mozzarella: false,
    parmesan: false,
  },
  instructions: '',
};

const initialFormErrors = {
  name: '',
  size: '',
  sauce: '',
  cheese: '',
  instructions: '',
};

const initialOrders = [
  {
    name: 'Donald Faulknor',
    size: 'medium',
    sauce: {
      red: true,
      garlic: false,
      spicy: false,
      bbq: false,
    },
    cheese: {
      mozzarella: true,
      parmesan: false,
    },
    instructions: 'Ring the doorbell'
  }
];
const initialDisabled = true;

const App = () => {
  const [orders, setOrders] = useState(initialOrders);
  const [formValues, setFormValues] = useState(initialFormValues);
  const [formErrors, setFormErrors] = useState(initialFormErrors);
  const [disabled, setDisabled] = useState(initialDisabled);

  const getOrders = () => {
    return (orders)
  };

  const postNewOrder = newOrder => {
    axios.post('https://reqres.in/api/orders', newOrder)
      .then(response => {
        setOrders([...orders, response.data])
        console.log(response.data);
      })
      .catch(error => {
        console.log(error)
      })
      .finally(() => {
        setFormValues(initialFormValues)
      })
  };
  const onInputChange = evt => {
    const { name, value } = evt.target
    Yup
      .reach(formSchema, name)
      .validate(value)
      .then(() => {
        setFormErrors({
          ...formErrors,
          [name]: ""
        })
      })
      .catch(error => {
        setFormErrors({
          ...formErrors,
          [name]: error.errors[0]
        })
      })

    setFormValues({
      ...formValues,
      [name]: value
    })
  };

  const onCheckboxChange = evt => {
    const { name, checked } = evt.target

    setFormValues({
      ...formValues,
      sauce: {
        ...formValues.sauce,
        [name]: checked,
      },
      cheese: {
        ...formValues.cheese,
        [name]: checked,
      }
    })
  };

  const onSubmit = evt => {
    evt.preventDefault()

    const newOrder = {
      size: formValues.size.trim(),
      sauce: Object.keys(formValues.sauce)
        .filter(sauceName => (formValues.sauce[sauceName] === true)),
      cheese: Object.keys(formValues.cheese)
        .filter(cheeseName => (formValues.sauce[cheeseName] === true)),
      instructions: formValues.instructions,
    }
    postNewOrder(newOrder)
  };

  useEffect(() => {
    getOrders()
  });

  useEffect(() => {
    formSchema.isValid(formValues).then(valid => {
      setDisabled(!valid)
    })
  }, [formValues]);
  return (
    <div>
      <div className='uk-section'>
        <div className='uk-container'>
          <Switch>
            <Route path='/order'>
              <Form
                values={formValues}
                onInputChange={onInputChange}
                onCheckboxChange={onCheckboxChange}
                onSubmit={onSubmit}
                disabled={disabled}
                errors={formErrors}
              />
              {
                orders.map(order => {
                  return (
                    <Orders key={order.name} order={order} />
                  )
                })
              }
            </Route>
            <Route path='/'>
              <h1>Welcome to Lambda Eats</h1>
              <Link to={'/order'}>
                Place Order Online
              </Link>
            </Route>
          </Switch>
        </div>
      </div>
    </div>
  );
};
export default App;