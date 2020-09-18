import React from "react";
import { useRouteMatch, Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import * as yup from 'yup';
import axios from 'axios';
import { useForm } from 'react-hook-form';



function Pizza() {
  


  const history = useHistory();
  const { handleSubmit, register, errors, reset } = useForm({});
  


  const onCheckboxChange = (evt) => {
    const { name, checked } = evt.target;
 
  };

  const onSubmit = (formData) => {
    console.log(formData);
     axios.post('https://reqres.in/api/users', formData)
    .then((res) => console.log((res.data),"Congrats! Pizza is on it's way!"))
    .catch(err => console.log(errors),"errorrrrrr :(");
    
};
    //evt.preventDefault();


console.log(errors)

  return (
    <div>
    <h1>LAMBDA EATS</h1>
      <Link to="/">Home</Link>
      <Link to="/pizza">Help</Link>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <h2>Build Your Own Pizza</h2>
          <div>
          
          <div>
          <img src="https://github.com/justinemanueljones/web-sprint-challenge-single-page-applications/blob/d459664141c0dfe5bff0a3e247da051c8270efda/Assets/Pizza.jpg?raw=true" />
          </div>
          

          <label>
            Full Name :
            <input
              placeholder="Please enter your name."
             // value={values.name}
              name="name"
              type="text"
              data-cy="name"
              id="nameInput"
              ref={register({required: false, minLength:1})}
              
            />
          </label>
          <div>{errors.name && <p>name must be at least 2 characters</p>}</div>
        </div>
        <br></br>
  
          <label>
            Pizza Size :
            <select name="size"    ref={register} /*onChange={onInputChange}*/ id="sizeInput" data-cy="size">
              <option> Small </option>
              <option> Medium </option>
              <option> Large </option>
              <option> Extra Large </option>
              
            </select>
          </label>
          <div>{errors.size}</div>
          <br></br>
         
        </div>

        <div>
          <h4> Choose Your Toppings</h4>
       
          <label>
            Pepperoni
            <input
              type="checkbox"
              name="pepperoni"
              id="pepperoniInput"
              data-cy="pepperoni"
              // checked={values.toppings.pepperoni === true}
              ref = {register}
              onChange={onCheckboxChange}
            />
          </label>
          <br/>
          <label>
            Sausage
            <input
              type="checkbox"
              name="sausage"
              id="sausageInput"
              data-cy="sausage"
              // checked={values.toppings.sausage === true}
              ref = {register}
              onChange={onCheckboxChange}
            />
          </label>
          <br/>
          <label>
            Bacon
            <input
              type="checkbox"
              name="bacon"
              id="baconInput"
              data-cy="bacon"
              // checked={values.toppings.bacon === true}
              ref = {register}
              onChange={onCheckboxChange}
            />
          </label>
          <br/>
         <label>
            Chicken
            <input
              type="checkbox"
              name="chicken"
              id="chickenInput"
              data-cy="chicken"
            //  checked={values.toppings.chicken === true}
              ref = {register}
              onChange={onCheckboxChange}
            />
          </label>
          <br/>
          <label>
            Pineapple???
            <input
              type="checkbox"
              name="pineapple"
              id="pineappleInput"
              data-cy="pineapple"
            //  checked={values.toppings.chicken === true}
              ref = {register}
              onChange={onCheckboxChange}
            />
          </label>
       
          <br></br>
          <div>
          <br></br>
          <label htmlFor="special">
        special instructions:
        <br></br>
        <textarea
          name="special"
          id="special"
          placeholder="Anything else you'd like to add?"
          ref = {register}
          //value={values.special}
          data-cy="special"
          //onChange={inputChange}
        />
        </label>
          </div>
          <button data-cy="submit"  className="smtBtn" onClick={() => reset()}>
            Add to Order
          </button>
        </div>
      </form>
    </div>
  );
}

export default Pizza;