import React from "react";
import { useRouteMatch, Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import * as yup from 'yup';
import axios from 'axios';
import { useForm } from 'react-hook-form';

function Pizza() {



  const history = useHistory();
  const { handleSubmit, register, errors, reset } = useForm({});



  const checkboxChange = (evt) => {
    const { name, checked } = evt.target;

  };

  const onSubmit = (formData) => {
    console.log(formData);
     axios.post('https://reqres.in/api/users', formData)
    .then((res) => console.log((res.data),"Congrats! Pizza is on it's way!"))
    .catch(err => console.log(errors),"Whoaaa there, hold up! :(");

};
    


// console.log(errors)

  return (
      <div>
          <div className='navs'>
    <h1>Pizza Parlor</h1>
      <Link to="/">Home</Link>
      <Link to="/pizza">Help</Link>
      </div>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <h2>Build Your Own Pizza</h2>
          <div>

          <div>
          <img src="https://media4.giphy.com/media/KsMP4vmlDYVpu/200w.webp?cid=ecf05e47i9wj3lzqrjf12sriupg75mx12mz1tczmqr5bzkwx&rid=200w.webp" alt="Yummy Pizza"/>
          </div>


          <label>
            Name :
            <input
              placeholder="Enter a name."
              name="name"
              type="text"
              data-cy="name"
              id="nameInput"
              ref={register({required: false, minLength:1})}

            />
          </label>
          <div>{errors.name && <p>Name must be at least 2 characters</p>}</div>
        </div>
        <br></br>

          <label>
                      Size :
            <select name="size"
            ref={register}
            id="sizeInput"
            data-cy="size">
              <option> Small </option>
              <option> Medium </option>
              <option> Large </option>
              <option> Extra Large </option>
              <option>Custom slices</option>

            </select>
          </label>
          <div>{errors.size}</div>
          <br></br>

        </div>

        <div>
          <h4> Select Your Toppings</h4>

          <label>
            Pepperoni
            <input
              type="checkbox"
              name="pepperoni"
              id="pepperoniInput"
              data-cy="pepperoni"
              ref = {register}
              onChange={checkboxChange}
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
              ref = {register}
              onChange={checkboxChange}
            />
          </label>
          <br/>
          <label>
            Vegan
            <input
              type="checkbox"
              name="vegan"
              id="veganInput"
              data-cy="vegan"
              ref = {register}
              onChange={checkboxChange}
            />
          </label>
          <br/>
         <label>
            Cheese
            <input
              type="checkbox"
              name="cheese"
              id="cheeseInput"
              data-cy="cheese"
              ref = {register}
              onChange={checkboxChange}
            />
          </label>
          <br/>
          <label>
            Deep Dish (Chicago style)
            <input
              type="checkbox"
              name="deepdish"
              id="deepdishInput"
              data-cy="deepdish"
              ref = {register}
              onChange={checkboxChange}
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
          placeholder="Any additional instrucions?"
          ref = {register}
         data-cy="special"
         />
        </label>
                  </div>
                  
          <button data-cy="submit"  className="sbmtBtn" onClick={() => reset()}>
            Place Order
          </button>
              </div>
              <img src="https://media0.giphy.com/media/PNEbOgLQxxdv2/giphy.webp?cid=ecf05e47qqd5yx4id8p8v0hgr88elcm4noof15ppmlczbhk0&rid=giphy.webp" alt="Joey likes pizza"/>
      </form>
      </div>
      
  );
}

export default Pizza;