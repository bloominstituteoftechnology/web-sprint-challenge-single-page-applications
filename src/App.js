import React, {useEffect, useState} from 'react';
import mcdonalds from './pics/McDonalds.jpg'
import Form from './Components/Form'
import * as yup from 'yup'
import schema from './validation/schema'
import { Route, Switch, Link} from 'react-router-dom'


const initialFormValues = {
  ///// DROPDOWN /////
  size: '',
  ///// RADIO BUTTONS /////
  sauce: '',
  ///// CHECKBOXES /////
  pepperoni: false,
  pineapple: false,
  onions: false,
  olives: false,
  ///// TEXT INPUTS /////
  additions: '',
  name: '',
}
const initialFormErrors = {
  size: '',
  sauce: '',
  name: '',
}
const initialOrders = []
const initialDisabled = true;

const App = () => {
  //states
  const [orders, setOrders] = useState(initialOrders)
  const [formValues, setFormValues] = useState(initialFormValues)
  const [formErrors, setFormErrors] = useState(initialFormErrors)
  const [disabled, setDisabled] = useState(initialDisabled) 

  //event handlers

  const inputChange = (name, value) => {
    // 🔥 STEP 10- RUN VALIDATION WITH YUP

    yup
      .reach(schema, name)
      .validate(value)
      .then(() => setFormErrors(
        {...formErrors, [name]: ''}
      ))
      .catch(err => setFormErrors(
        {...formErrors, [name]: err.errors[0]}
      ))

    setFormValues({
      ...formValues,
      [name]: value
    })
  }

  const formSubmit = () => {
    const newOrder = {
      size: formValues.size,
      sauce: formValues.sauce,
      toppings: ['pepperoni', 'pineapple', 'onions', 'olives'].filter(topping => formValues[topping]),
      additions: formValues.additions.trim(),
      name: formValues.name.trim(),
    }
    //add new order to orders array
    setOrders([newOrder, ...orders])
    //reset form
    setFormValues(initialFormValues)
  }

  //side effect

  useEffect(() => {
    schema.isValid(formValues).then(valid => setDisabled(!valid));
  }, [formValues])


  return (
    <div className='App'>
      <Switch>
        <Route path='/pizza'>
          <Form
            values={formValues}
            change={inputChange}
            submit={formSubmit}
            disabled={disabled}
            errors={formErrors}
          />
        </Route>

        <Route exact path='/'>
        <nav>
        <div className='logoContainer'>LAMBDA EATS</div>
        <div className='navButtonsContainer'>
          <Link to='/'>Home</Link>
          <Link to='/pizza'>Pizza</Link> 
        </div>
      </nav>
      <section className='hero'>
        <h1>
          Your favorite food, delivered while coding
        </h1>
        <a href='/pizza'>Pizza?</a>
      </section>
      <section className='otherPlacesToOrder'>
        <h2>Food Delivery in Redondo Beach</h2>
        <div className='restaurant'>
          <img src={mcdonalds} alt=''/>
          <h4>Mcdonalds</h4>
          <p>$ - American - Fast Foot - Burgers</p>
          <p>
            <span className='tag'>20-30 Min</span>
            <span className='tag'>$5.99 Delivery Fee</span>
          </p>
        </div>
        <div className='restaurant'>
          <img src={mcdonalds} alt=''/>
          <h4>Mcdonalds</h4>
          <p>$ - American - Fast Foot - Burgers</p>
          <p>
            <span className='tag'>20-30 Min</span>
            <span className='tag'>$5.99 Delivery Fee</span>
          </p>
        </div>
        <div className='restaurant'>
          <img src={mcdonalds} alt=''/>
          <h4>Mcdonalds</h4>
          <p>$ - American - Fast Foot - Burgers</p>
          <p>
            <span className='tag'>20-30 Min</span>
            <span className='tag'>$5.99 Delivery Fee</span>
          </p>
        </div>
        <div className='restaurant'>
          <img src={mcdonalds} alt=''/>
          <h4>Mcdonalds</h4>
          <p>$ - American - Fast Foot - Burgers</p>
          <p>
            <span className='tag'>20-30 Min</span>
            <span className='tag'>$5.99 Delivery Fee</span>
          </p>
        </div>
        <div className='restaurant'>
          <img src={mcdonalds} alt=''/>
          <h4>Mcdonalds</h4>
          <p>$ - American - Fast Foot - Burgers</p>
          <p>
            <span className='tag'>20-30 Min</span>
            <span className='tag'>$5.99 Delivery Fee</span>
          </p>
        </div>
        <div className='restaurant'>
          <img src={mcdonalds} alt=''/>
          <h4>Mcdonalds</h4>
          <p>$ - American - Fast Foot - Burgers</p>
          <p>
            <span className='tag'>20-30 Min</span>
            <span className='tag'>$5.99 Delivery Fee</span>
          </p>
        </div>
      </section>
        </Route>
      </Switch>

    </div>
  );
};
export default App