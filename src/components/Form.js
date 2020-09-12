import React, { useState, useEffect } from "react";
import image from "./Pizza.jpg";
import axios from "axios";
import * as yup from "yup";

//schema for validation
const formSchema = yup.object().shape({
        name: yup.string().required("Name is required.")
            .min(2, "Name must be at least 2 characters long.")
            .matches(/^[a-zA-Z]*$/, "Name must be letters only."),
        address: yup.string().required("Please leave an address."), 
        size: yup.string().required("Must choose a size."),
        pepperoni: yup.boolean(),
        cheese: yup.boolean(),
        chicken: yup.boolean(),
        pineapple: yup.boolean(),
        special: yup.string()
})

const Form = () => {
    const price1 = "$17.99";
    const price2 = "$17.99";
    const price3 = "$17.99";


    const [formState, setFormState] = useState({
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

    const [buttonDisabled, setButtonDisabled] = useState(true);
    useEffect(() => {
        formSchema.isValid(formState).then((valid) => {
          setButtonDisabled(!valid);
        });
      }, [formState]);

    const inputChange = (e) => {
        e.persist();
        validate(e);
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
                <input placeholder="Full Name" type="text" name="name" value={formState.name} onChange={inputChange} />

                <label htmlFor="address"><h4>Where do we deliver?</h4>
                {errorState.address.length > 0 ? <p>{errorState.address}</p> : null}</label>
                <textarea name="address" placeholder="Your Address Here" value={formState.address} onChange={inputChange} />

                <label htmlFor="size"><h4>Choose a size</h4>
                </label>
                <select id="select-tag" name="size" value={formState.size} onChange={inputChange}>
                    <option value={null}>*choose a size*</option>
                    <option value="small">Small {price1}</option>
                    <option value="medium">Medium {price2}</option>
                    <option value="large">Large {price3}</option>
                </select>

                <div className="toppings">
                    <h4 id="toppings">Choose your toppings</h4>

                    <label htmlFor="pepperoni">Pepperoni</label>
                    <input className="checkbox" type="checkbox" name="pepperoni" value={formState.pepperoni} onChange={inputChange} />

                    <label htmlFor="cheese">Just Cheese</label>
                    <input className="checkbox" type="checkbox" name="cheese" value={formState.cheese} onChange={inputChange} />

                    <label htmlFor="chicken">Chicken</label>
                    <input className="checkbox" type="checkbox" name="chicken" value={formState.chicken} onChange={inputChange} />

                    <label htmlFor="pineapple">Pineapple</label>
                    <input className="checkbox" type="checkbox" name="pineapple" value={formState.pineapple} onChange={inputChange} />
                </div>    

                    <label htmlFor="special"><h4>Any Special Requests?</h4></label>
                <textarea name="special" value={formState.special} onChange={inputChange} />

                <h4>All Done?</h4>
                <button disabled={buttonDisabled} type="submit">Place Your Order</button>
            </form>
            <pre>{JSON.stringify(postedData, null, 2)}</pre>
        </>
    )
}

export default Form;