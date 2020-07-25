import React, { useState } from 'react';
import Form from './Form'
import {BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import './App.css';
import axios from 'axios'
import Orders from './Orders'
import pizzaP from './Assets/Pizza.jpg'
import * as yup from 'yup'

const App = () => {

const initialFormValues = {
  size:'',
  sauce:'',
  Pepperoni:false,
  Sausage:false,
  CanadianBacon:false,
  Bacon:false,
  Salami:false,
  GrilledChicken:false,
  Onions:false,
  GreenPepper:false,
  DicedTomatoes:false,
  Olives:false,
  Pineapple:false,
  ExtraCheese:false,
  toppings:[{id: 1, value: "Pepperoni"},
            {id: 2, value: "Sausage"},
            {id: 3, value: "Canadian Bacon"},
            {id: 4, value: "Bacon"},
            {id: 5, value: "Salami"},
            {id: 6, value: "Grilled Chicken"},
            {id: 7, value: "Onions"},
            {id: 8, value: "Green Pepper"},
            {id: 9, value: "Diced Tomatoes" },
            {id: 10, value: "Olives" },
            {id: 11, value: "Pineapple" },
            {id: 12, value: "Extra Cheese" }],
  note:'',
  name: '',
}

const [orders, setOrders] = useState([])
const [formValues, setFormValues] = useState(initialFormValues)


const submitForm = () => {

  var toppings="";
  if(formValues.Pepperoni)
  toppings=toppings+"Pepperoni "
  if(formValues.Sausage)
  toppings=toppings+"Sausage "
  if(formValues.CanadianBacon)
  toppings=toppings+"Canadian Bacon "
  if(formValues.Bacon)
  toppings=toppings+"Bacon "
  if(formValues.Salami)
  toppings=toppings+"Salami "
  if(formValues.GrilledChicken)
  toppings=toppings+"Grilled Chicken "
  if(formValues.Onions)
  toppings=toppings+"Onions "
  if(formValues.GreenPepper)
  toppings=toppings+"Green Pepper "
  if(formValues.DicedTomatoes)
  toppings=toppings+"Diced Tomatoes "
  if(formValues.Olives)
  toppings=toppings+"Olives "
  if(formValues.Pineapple)
  toppings=toppings+"Pineapple "
  if(formValues.ExtraCheese)
  toppings=toppings+"Extra Cheese "

  if(toppings==="")
    toppings="No Toppings"

  const newOrder = {
    name: formValues.name.trim(),
    size:formValues.size,
    sauce:formValues.sauce,
    topping:toppings,
    note:formValues.note.trim()




    /*Pepperoni:formValues.Pepperoni,
    Sausage:formValues.Sausage,
    CanadianBacon:formValues.CanadianBacon,
    Bacon: formValues.Bacon,
    Salami: formValues.Salami,
    GrilledChicken: formValues.GrilledChicken,
    Onions: formValues.Onions,
    GreenPepper: formValues.GreenPepper,
    DicedTomatoes: formValues.DicedTomatoes,
    Olives: formValues.Olives,
    Pineapple: formValues.Pineapple,
    ExtraCheese: formValues.ExtraCheese,*/
    
  }

  //YUP
  
  formSchema.validate(newOrder,options)
  .then(function(response) {
    axios.post('https://reqres.in/api/users',newOrder)
    .then(function (response) {
      console.log(response.data);
      setOrders([response.data,...orders]);
      console.log(orders);
    })
    .catch(function (error) {
      console.log(error);
    });
    
  })
  .catch(function (response){
    var err="";
    response.errors.map(x=> err=err+x+"\n")
    window.alert(err)
      console.log(response)})
}
var options ={
  abortEarly:false,
}
  const formSchema = yup.object().shape({
    
    
 
        size:yup.string()
    .required('Must Select Size')
    .oneOf(['Small','Medium','Large'], 'Must Select Size'),

    sauce:yup.string()
    .required('Must Select Sauce')
    .oneOf(['Original Red','Garlic Ranch','BBQ Sauce'], 'Must Select Sauce'),

    name: yup
        .string()
        .required('No name provided.')
        .min(2, 'Name is too short - should be 2 chars minimum.'),
 
  });

  const updateForm = (inputName, inputValue) => {
    const updatedFormValues = { ...formValues, [inputName]: inputValue }
    setFormValues(updatedFormValues)
  }
  return (
    
      
    <Router>
        <nav>
          
        <ul>
            <li><a class="logo">Lambda Eats</a></li>
            <Link to="/"><li><a class="nav">Home</a></li></Link>


          </ul>
        </nav>
        
          <div>
        <Switch>
      <Route exact={true} path="/">
      <div class='pizza'>
        <img src={pizzaP}/>
        <Link to={`/pizza`}>
          <a class='pizzab'>
              Pizza?
          </a>
          </Link>
      </div>
      </Route>

      <Route path='/pizza'>
      <Form
      values = {formValues}
      update = {updateForm}
      submit = {submitForm}
      />

        </Route>
      </Switch>
    </div>
    <div>
      <Orders orders={orders}/>
    </div>
    </Router>
  );
};




export default App;
