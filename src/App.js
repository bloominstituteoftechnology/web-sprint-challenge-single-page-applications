import React,{useState}from "react";
import { Route,Routes, Link } from "react-router-dom";
import axios from "axios";

import schema from './comps/formSchema'
import * as yup from 'yup'

import Form from "./comps/Form";
import Home from "./comps/Home";

const intialvalues = {
  name: "",
  topping1: false,
  topping2: false,
  topping3: false,
  topping4: false,
  size: "",
  specialText: ""
}

const intialErrors = {
  name: "",
  topping1: "",
  topping2: "",
  topping3: "",
  topping4: "",
  size: "",
  specialText: ""

}
const App = () => {
const [formValues,setFormvalues] = useState(intialvalues)
const [formErrors,setFormErrors] = useState(intialErrors)
const [users,setUsers] = useState([])




const handleChange = (name,value) => {
  setFormvalues({...formValues, [name]: value})
  formValidate(name,value)

}

const formValidate = (name,value) => {
  yup.reach(schema,name)
   .validate(value)
    .then(() => setFormErrors({...formErrors, [name]: ""}))
    .catch(err => setFormErrors({
        ...formErrors, [name]: err.errors[0]}))
}


const handleSubmit = () => {
axios.post("https://reqres.in/api/orders", formValues)
.then(res => {
  setUsers([res.data,...users])
})
.catch(err => console.error(err))
}





  return (
<><p>{formErrors.name}</p>
      <h1>Bloomtech Eats</h1>
      <i>Welcome to the best Pizza spot in the DMV!!!</i>
   <button> Carry Out </button> <button> Delivery</button> 

   <nav>
     <Link to="/"> Home </Link>
     <Link to="/pizza">    <button id="order-pizza" > Order Now!!!</button> </Link>
     <Link to="/"> Images</Link>
      </nav>
  
     
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/pizza" element={ <Form values={formValues} 
   change={handleChange} 
   errors={formErrors} 
   submit={handleSubmit} />}/>
      </Routes>
      {users.map(user => (
        <div key={user.id}>
          <p>{user.name}</p>
          <p>{user.size}</p>
          <p>{user.topping1}</p>
          <p>{user.topping2}</p>
          <p>{user.topping3}</p>
          <p>{user.topping4}</p>
        </div>
      ))}


   
   </>
  );
};
export default App;
