import React, {useState} from "react";
import { Route, Link, Switch } from 'react-router-dom'
import OrderForm from "./components/OrderForm";
import Home from './components/Home'
import Help from './components/Help'
import {} from './Validation/formSchema'

const initialFormValues = {
  size: '',
  sauce: '',
  items: '',
  instructions: '',
  name: '',
}

const initialFormErrors = {
  size: '',
  sauce: '', 
  items: '',
  name: '',
}

const initialDisabled = true

const App = () => {

  const [values, setValues] = useState(initialFormValues)
  const [formErrors, setFormErrors] = useState(initialFormErrors)
  const [disabled, setDisabled] = useState(initialDisabled)


  const formSubmit = () => {
    const newPizzaOrder ={
      size: values.size.trim(),
      sauce: values.sauce.trim(),
      items: values.items.trim(),
      instructions: values.instructions.trim(),
      name: values.name.trim(),
    }
    setValues(newPizzaOrder)
  }

  const inputChange = () => {

  }

  return (
    <>
    <header>
      <h1>Lambda Eats</h1>
      <div className='navLinks'>
        <Link to='/'>Home</Link>
        <Link to='/Help'>Help</Link>
      </div>
    </header>

    <Switch>
      <Route path='/orderForm'>
        <OrderForm 
          values= {values}
          disabled= {disabled}
          change={inputChange}
          submit={formSubmit}
          errors={formErrors}
        />
      </Route>
      <Route path='/help'>
        <Help />
      </Route>
      <Route path='/'>
        <Home />
      </Route>
    </Switch>

      
    </>
  );
};
export default App;
