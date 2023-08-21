import React,{useState}from "react";
import { Route,Routes, Link } from "react-router-dom";
import Form from "./comps/Form";
import axios from "axios";
import * as yup from 'yup'
import formschema from "./comps/formSchema";

const intialvalues = {
  name: "",
  agree: false,
  agree2: false,
  agree3: false,
  agree4: false,
  size: ""
}

const intialErrors = {
  name: "",
  agree: "",
  agree2: "",
  agree3: "",
  agree4: "",
  size: ""
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
  yup.reach(formschema, name)
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
     <Link to="/pizza">    <button id="order-pizza"> Order Now!!!</button> </Link>
     <Link to="/"> Images</Link>
      </nav>
  
      <Routes>
        <Route path="/" />
        <Route path="/pizza" element={<Form values={formValues} change={handleChange} errors={formErrors}  submit={handleSubmit}  />} />
      </Routes>
      {users.map(user => (
        <div key={user.id}>
          <p>{user.name}</p>
          <p>{user.size}</p>
        </div>
      ))}

   
   </>
  );
};
export default App;
