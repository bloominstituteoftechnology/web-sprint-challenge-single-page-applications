import React,{ useState }from "react";
import * as yup from 'yup';
import axios from 'axios';

const initialPizzaOrder ={
  name: '',
  Email: '',
  extraCheese: false,
  pepperoni: false,
  pineapple: false,
  ham: false,
};

function Form(){
  const schema = yup.object().shape({
    name: yup.string().min(6, 'use more than six characters'),
    Email: yup.string().required('Provide Email'),
    extraCheese: yup.boolean(),
    pepperoni: yup.boolean(),
    pineapple: yup.boolean(),
    ham: yup.boolean(),
  });
  
}

const [order, setOrder] = useState(initialPizzaOrder)
  const [errors, setErrors] = useState({
  name: '',
  Email: '',
  extraCheese: false,
  pepperoni: false,
  pineapple: false,
  ham: false
  })
  const [thisOrder, SetThisOrder] = useState(initialPizzaOrder)

  axios
  .post("https://reqres.in/api/", newOrder)
  .then((res) => {
    setOrder(initialPizzaOrder)
    SetThisOrder([...order,res.data])
    console.log("Api success", res.data);
  })
  .catch((err) => {
    console.log("error", err);
  });

  const onSubmit = (e)=> {
    e.preventDefault();
   const newOrder={
    name: order.name,
    Email: order.Email,
    extraCheese: order.extraCheese,
    pepperoni: order.pepperoni,
    pineapple: order.pineapple,
    ham: order.ham,

    }
 
}
const onChange = e => {
  const valueToUse = e.target['type'] === 'checkbox' ? !order['extraCheese'] : e.target['value']
  setOrderErrors(e.target['name'],valueToUse)
  setOrder({...order,[e.target['name']]:valueToUse})
}

  const setOrderErrors = (name, value) => {
    yup.reach(schema,name).validate(value)
    .then( () => setErrors({...errors, [name]: ''}))
    .catch( err => setErrors({...errors, [name]: err.errors[0]}));
  }
  return(
  <form onSumbit = {onSubmit}>
    <div className = 'pizzaForm'>
    <input
           onChange={onChange}
            placeholder="Name"
            id="nameInput"
            name="name"
            type="text"
            value= {name}
          />
          <br />
          
          <input
            onChange={onChange}
            placeholder="Email"
            id="emailInput"
            name="Email"
            type="Email"
            value = {email}
          />
          <br />

          <label> TOPPINGS
          
          <input
            type="checkbox"
             name="extraCheese"
             checked= {extraCheese}
             onChange= {onChange}
    />
          
          <input 
          type="checkbox"
           name="pepperoni"
           checked= {pepperoni}
           onChange= {onChange}
     />
           <br  />

           <input 
          type="checkbox"
           name="pineapple"
           checked= {pineapple}
           onChange= {onChange}
     />

<input 
          type="checkbox"
           name="ham"
           checked= {ham}
           onChange= {onChange}
     />
     </label>
           
  
          <button type="submit">submit</button>
  


    
















</div>
  </form>
  )