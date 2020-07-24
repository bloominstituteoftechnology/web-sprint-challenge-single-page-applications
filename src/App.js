
import React, { useState, useEffect } from 'react'
import { Switch, Link, Route } from 'react-router-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import pizzaPhoto from './Assets/Pizza.jpg'
import axios from 'axios'


import FormToOrder from './FormToOrder'

const App = () => {

  const initialFormValues = {
    username: '',
    email: '',
    password:'',
    tos:false
  }
  const [formValues, setFormValues] = useState(initialFormValues)
  const [orders, setOrders] = useState(initialFormValues)
  const updateForm = (inputName, inputValue) => {
    const updatedFormValues = { ...formValues, [inputName]: inputValue }
    setFormValues(updatedFormValues)
  }

  const submitForm = () => {
 
 
    const newOrder = {

      username: formValues.username.trim(),
      email: formValues.email.trim(),
      password: formValues.password,
      tos:formValues.tos
    }
   

        axios.post('https://reqres.in/api/users',newOrder)
        .then(function (response) {
          console.log(response);
          setOrders([response,...orders]);
        })
        .catch(function (error) {
          console.log(error);
        });
    

   
    //setMembers([newMember, ...members])
      setFormValues(initialFormValues)
    }

  return (
    <Router>
      <div className= 'logoBar'>
      <h1>Lambda Eats</h1>
      <div className='navLinks'>
        <div className='home'>
        <Link to='/'>Home</Link>
        </div>
        <div className='help'>
        <Link to='/help'>Help</Link>
        </div>
      </div>
      </div>
        <div className='imgPizza'> 
        <img className='pizza'
        src= {pizzaPhoto}/>
        </div>
        const submitForm = () => {
        <div className='formToOrder'>
        <Link to='/FormToOrder'>Pizza</Link>
        </div>

        
}
        <Switch>
          <Route exact={true} path='/FormToOrder'>
          <FormToOrder 
          values = {formValues}
          update = {updateForm}
          submit = {submitForm}
            />
          </Route>

          <Route exact={true} path='/'>
          '/'
        </Route>
        </Switch>
}
    </Router>
  );
};
export default App;
