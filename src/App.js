import React, { useState, useEffect } from "react";

//imported router
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'


//Imported yup 
import * as yup from 'yup'

//imported components
import HomePage from './HomePage'
import Pizza from './Pizza'

//Styling
import  styled  from 'styled-components'

const FormContainer = styled.div`
  background-color: #287D7D;
  text-align: center;
  padding: 1px;
  margin: 0 auto;
  text-align: center;
  font-size: 20px;
  font-family: Gill Sans;
  color: #FFFF9D
  
`


const OrderContainer =styled.div`
  background-color: #91C46C;
  text-align: center;
  padding: 10px;
  border: 20px 
  margin: 0 auto;
  
`



//Schema = for validating inputs



const schema = yup.object().shape({
  name: yup.string().required('Name is Required').min(2, 'Needs to be at least 2 characters minimum'),
  pSize: yup.string().required('Pizza size is required'),
  pepporoni: yup.boolean(true || false),
  cheese: yup.boolean(true || false),
  bacon: yup.boolean(true ||false),
  pineapple: yup.boolean(true || false),
  spInstructions: yup.string('Optional')

  

  
})


const App = () => {
  //state for data that is gathered from the order form
  const [form, setForm] = useState({
    name: '',
    pSize:'',
    pepporoni: false,
    cheese: false,
    bacon: false,
    pineapple: false,
    spInstructions:'',
  })

  //Slice of state for disabled button until form is complete
  const [disabled, setDisabled] = useState(true)

  
  //Slice of state for errors
  const [errors, setErrors] = useState({
    name: '',
    pSize:'',
    pepporoni: false,
    cheese: false,
    bacon: false,
    pineapple: false,
    spInstructions:'',
  })

  //Slice of state for orders being rendered to the page
  const [orders, setOrders] = useState([])
  
  //function that validates errors based on the schema
  const validate = (name, value) => {

    yup.reach(schema, name)
      .validate(value)
      .then(() => setErrors({...errors, [name]: ''}))
      .catch(err => setErrors({...errors, [name]: err.errors[0]}))
  }
 

  useEffect(() =>{
    schema.isValid(form).then(valid =>  setDisabled(!valid))
  }, [form])


  return (
    
    <Router>
      
        <Route path='/pizza'>
          <FormContainer>
          
            <Pizza
              form={form}
              setForm={setForm}
              disabled={disabled}
              errors={errors}
              setErrors={validate}
              orders={orders}
              setOrders={setOrders}/>
          </FormContainer>
        </Route>
        <Route exact path='/'> 
          <HomePage/>
        </Route> 


      
      {
        orders.map( order => {
          // console.log(order)
          return(
          
          <OrderContainer>
          <div>
            <h2>Your Order is on the Way!</h2>
            <h3>Order Receipt</h3>
              <div>Name:{order.name}</div>
              <div>Pizza Size:{order.pSize}</div>
              <div>Toppings: {order.pepperoni}, {order.cheese},  {order.bacon}, {order.pineapple}</div>
              <div>Special Instructions: {order.spInstructions ? order.spInstructions : "N/A"} </div>
          </div>
          </OrderContainer>  
           
          )
        })
      }
      
       
    </Router>
    
  );
};
export default App;
