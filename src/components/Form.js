import React, { useState, useEffect } from "react";
import axios from "axios";
import image from "./Pizza.jpg"
import * as yup from "yup";

const formSchema = {
        name: yup.string().required("Name is required")
            .test("len", "Name must be at least 2 characters", val => val.length >= 2),
        pizzaSize: yup.string().required("Must choose a size"),
        sauce: yup.string().required("Must choose a sauce"),
        pepperoni: yup.boolean(),
        cheese: yup.boolean(),
        chicken: yup.boolean(),
        pineapple: yup.boolean(),
        specialInstructions: yup.string()
}

 const OrderForm = () => {

     const price1 = "$17.99";
     const price2 = "$17.99";
     const price3 = "$17.99";
    //  const price = ('click', () => {
    //     const price = 17.99;
    //     const tax = 2.00
    //     const total = price + tax;
    //     return (`$${total}`);
    //  })
        
     const [formState, setFormState] = useState({
         name: '',
         pizzaSize: '',
         sauce: '',
         pepperoni: false,
         cheese: false,
         chicken: false,
         pineapple: false,
         specialInstructions: ''
     })

     const [errorState, setErrorState] = useState({
        name: '',
        pizzaSize: '',
        sauce: '',
        pepperoni: '',
        cheese: '',
        chicken: '',
        pineapple: '',
        specialInstructions: ''
     })

     const validate = (e) => {
        let value =
      e.target.type === "checkbox" ? e.target.checked : e.target.value;
      yup
       .reach(formSchema, e.target.name)
       .validate(value)
       .then((valid) => {
           setErrorState({...errorState, [e.target.name]: ''});
       })
       .catch((err) => {
           //console.log(err.errors);
           setErrorState({...errorState, [e.target.name]: err.errors[0]});
       });
    };

     const inputChange = (e) => {
         e.persist();
         validate(e);
         let value =
      e.target.type === "checkbox" ? e.target.checked : e.target.value;
         setFormState({...formState,
             [e.target.name]: value
         });
     }

     const submitForm = (e) => {
        e.preventDefault();
        console.log("form submited!!");
         setFormState({
            name: '',
            pizzaSize: '',
            pepperoni: '',
            cheese: '',
            chicken: '',
            pineapple: '',
            specialInstructions: ''
         })
         axios
          .post("https://reqres.in/api/users", formState)
          .then((res) => console.log(res))
          .catch((err) => console.log(err))
     }

    return(
        <div className="form-div">
            <header>
                <h2>Build Your Own Pizza</h2>
                <img src={image}/>
            </header>
            <form onSubmit={submitForm}>
                <h3>Build Your Pizza Form</h3>

                <label htmlFor="name"><h4>Your Name</h4>
                {errorState.name.length > 0 ? <p>{errorState.name}</p> : null}
                </label>
                <input type="text" name="name" value={formState.name} onChange={inputChange} />

                <label htmlFor="pizzaSize"><h4>Choose a size</h4></label>
                <select name="pizzaSize" value={formState.pizzaSize} onChange={inputChange}>
                    <option value="small">Small {price1}</option>
                    <option value="medium">Medium {price2}</option>
                    <option value="large">Large {price3}</option>
                </select>

                <div className="sauce-div">
                    <h4>Choose a sauce</h4>

                    <label htmlFor="red">Classic Red</label>
                    <input type="radio" name="sauce" id="red" value={formState.sauce}  onChange={inputChange}/>

                    <label htmlFor="garlic">Garlic Ranch</label>
                    <input type="radio" name="sauce" id="garlic" onChange={inputChange} value={formState.sauce}/>

                    <label htmlFor="bbq">BBQ Sauce</label>
                    <input type="radio" name="sauce"  id="bbq" onChange={inputChange} value={formState.sauce} />
                </div>

                <div className="toppings">
                    <h4>Choose your toppings</h4>

                    <label htmlFor="pepperoni">Pepperoni</label>
                    <input type="checkbox" name="pepperoni" value={formState.pepperoni} onChange={inputChange} />

                    <label htmlFor="cheese">Just Cheese</label>
                    <input type="checkbox" name="cheese" value={formState.cheese} onChange={inputChange} />

                    <label htmlFor="chicken">Chicken</label>
                    <input type="checkbox" name="chicken" value={formState.chicken} onChange={inputChange} />

                    <label htmlFor="pineapple">Pineapple</label>
                    <input type="checkbox" name="pineapple" value={formState.pineapple} onChange={inputChange} />
                </div>

                <label htmlFor="specialInstructions"><h4>Any Special Requests?</h4></label>
                <textarea name="specialInstructions" value={formState.specialInstructions} onChange={inputChange} />

                <h4>All Done?</h4>
                <button type="submit">Place Your Order</button>
            </form>
        </div>
    )
}

export default OrderForm;