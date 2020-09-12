import React, { useState, useEffect } from "react";
import image from "./Pizza.jpg";
import axios from "axios";
import * as yup from "yup";

const Form = () => {
    const price1 = "$17.99";
    const price2 = "$17.99";
    const price3 = "$17.99";


    const [formState,, setFormState] = useEffect({
        name: '',
        address: '',
        size: '',
        pepperoni: false,
        cheese: false,
        chicken: false,
        pineapple: false,
        special: ''
    });

    const [errorState, setErrorState] = useState({
        name: '',
        address: '',
        size: '',
        pepperoni: '',
        cheese: '',
        chicken: '',
        pineapple: '',
        special: ''
    })

    //form validation


    const inputChange = (e) => {
        e.persist();
        const value = e.target.type === "checkbox" ? e.target.checked : e.target.value;
        setFormState({...formState, [e.target.name]: value})

    }

    const [postedData, setPostedData] = useState([]); //place to hold the data coming back from the server
    const submitForm = (e) => {
        e.preventDefault();
        console.log("Form submited!!");
        setFormState({
            name: '',
            address: '',
            size: '',
            pepperoni: '',
            cheese: '',
            chicken: '',
            pineapple: '',
            special: ''
        });
        axios
         .post("https://reqres.in/api/users", formState)
         .then((res) => {
             console.log(res);
             setPostedData(res.data);
         })
         .catch((err) => console.log(err))
    };

    return(
        <>
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

                <label htmlFor="address">Where do we deliver?</label>
                <texarea name="address" placeholder="Your Address" value={formState.address} onChange={inputChange} />

                <label htmlFor="size"><h4>Choose a size</h4></label>
                <select name="size" value={formState.size} onChange={inputChange}>
                    <option value={null}>*choose a size*</option>
                    <option value="small">Small {price1}</option>
                    <option value="medium">Medium {price2}</option>
                    <option value="large">Large {price3}</option>
                </select>

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

                    <label htmlFor="special"><h4>Any Special Requests?</h4></label>
                <textarea name="special" value={formState.special} onChange={inputChange} />

                <h4>All Done?</h4>
                <button type="submit">Place Your Order</button>
            </form>
            <pre>{JSON.stringify(postData, null, 2)}</pre>
        </>
    )
}

export default Form;