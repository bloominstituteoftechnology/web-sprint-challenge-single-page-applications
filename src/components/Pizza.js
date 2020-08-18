import React from "react";
import { useRouteMatch, Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import * as yup from 'yup';
import axios from 'axios';
import { useForm } from 'react-hook-form';



function Pizza(props) {
  const {
    submit,
    
  } = props;

  const history = useHistory();
  const { handleSubmit, register, errors } = useForm({});
  


  const onCheckboxChange = (evt) => {
    const { name, checked } = evt.target;
 
  };

  const onSubmit = (formData) => {
    console.log(formData);
     axios.post('https://reqres.in/api/users', formData)
    .then((res) => console.log(res.data),"success!!!")
    .catch(err => console.log(errors),"Failed :(");
};
    //evt.preventDefault();


console.log(errors)

  return (
    <div>
      <Link to="/">Home</Link>
      <Link to="/pizza">Pizza</Link>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <h2>Build your pizza!</h2>
          <div>
          <h4>General information</h4>

          <label>
            Name
            <input
              placeholder="Please enter your name."
             // value={values.name}
              name="name"
              type="text"
              data-cy="name"
              //onChange={onInputChange}
              id="nameInput"
              ref={register({required: true, minLength: 3})}
            />
          </label>
          <div>{errors.name && <p>Please enter a name longer than 3 characters</p>}</div>
        </div>
        <br></br>
  
          <label>
            What size you you want?
            <select name="size"    ref={register} /*onChange={onInputChange}*/ id="sizeInput" data-cy="size">
              <option> Small </option>
              <option> Medium </option>
              <option> Large </option>
              <option> XL </option>
            </select>
          </label>
          <div>{errors.size}</div>
          <br></br>
         
        </div>

        <div>
          <h4>Toppings</h4>
       
          <label>
            Cheese
            <input
              type="checkbox"
              name="cheese"
              id="cheeseInput"
              data-cy="cheese"
              //checked={values.toppings.cheese === true}
              ref = {register}
              onChange={onCheckboxChange}
            />
          </label>

          <label>
            Pepperoni
            <input
              type="checkbox"
              name="pepperoni"
              id="pepperoniInput"
              data-cy="pepperoni"
              //checked={values.toppings.pepperoni === true}
              ref = {register}
              onChange={onCheckboxChange}
            />
          </label>

          <label>
            Sausage
            <input
              type="checkbox"
              name="sausage"
              id="sausageInput"
              data-cy="sausage"
              //checked={values.toppings.sausage === true}
              ref = {register}
              onChange={onCheckboxChange}
            />
          </label>
         
         <label>
            Olives
            <input
              type="checkbox"
              name="olives"
              id="olivesInput"
              data-cy="olives"
            //  checked={values.toppings.olives === true}
              ref = {register}
              onChange={onCheckboxChange}
            />
          </label>
       
          <br></br>
          <div>
          <br></br>
          <label htmlFor="special">
        Any special instructions?
        <br></br>
        <textarea
          name="special"
          id="special"
          placeholder="Special instrutions here"
          ref = {register}
          //value={values.special}
          data-cy="special"
          //onChange={inputChange}
        />
        </label>
          </div>
          <button data-cy="submit"  className="smtBtn" >
            Order Now
          </button>
        </div>
      </form>
    </div>
  );
}

export default Pizza;