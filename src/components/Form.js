import React, { useState, useEffect } from "react";
import image from "../image/Pizza.jpg";
import axios from "axios";
import styled from "styled-components";
import * as yup from "yup";

//schema for validation
const formSchema = yup.object().shape({
        name: yup.string().required("Name is required.")
            .min(2, "Name must be at least 2 characters long.")
            .matches(/[a-zA-z][a-zA-Z]{2,}/, "Name must be letters only."),
        address: yup.string().required("Please leave an address."), 
        size: yup.string().required("Must choose a size."),
        cheese: yup.boolean(),
        bacon: yup.boolean(),
        pepperoni: yup.boolean(),
        sausage: yup.boolean(),
        hamburg: yup.boolean(),
        peppers: yup.boolean(),
        onions: yup.boolean(),
        olives: yup.boolean(),
        pineapple: yup.boolean(),
        special: yup.string()
})

const Form = () => {
    const smPrice = "$9.99";
    const mdPrice = "$13.99";
    const lgPrice = "$17.99";


    const [formState, setFormState] = useState({
        name: '',
        address: '',
        size: '',
        cheese: true,
        bacon: false,
        pepperoni: false,
        sausage: false,
        hamburg: false,
        peppers: false,
        onions: false,
        olives: false,
        pineapple: false,
        special: ''
    });

    const [errorState, setErrorState] = useState({
        name: '',
        address: '',
        size: '',
        cheese: '',
        bacon: '',
        pepperoni: '',
        sausage: '',
        hamburg: '',
        peppers: '',
        onions: '',
        olives: '',
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
            cheese: '',
            bacon: '',
            pepperoni: '',
            sausage: '',
            hamburg: '',
            peppers: '',
            onions: '',
            olives: '',
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
    const Image = styled.div `
    padding: 1rem;
    `;

    const Label = styled.label `
    margin-left: 1rem;
    color: white;
    `;

    return(
        <>
                <div>
                    <img alt="Lambda Eats" id="mainImage" src={image}/>
                </div>
                <form onSubmit={submitForm}>
                    <h3>Build Your Pizza</h3>

                    <label htmlFor="name"><h4>Name:</h4>
                    {errorState.name.length > 0 ? <p>{errorState.name}</p> : null}
                    </label>
                    <input placeholder="Full Name" type="text" name="name" value={formState.name} onChange={inputChange} />

                    <label htmlFor="address"><h4>Delivery Address:</h4>
                    {errorState.address.length > 0 ? <p>{errorState.address}</p> : null}</label>
                    <textarea name="address" placeholder="Your Address Here" value={formState.address} onChange={inputChange} />

                    <label htmlFor="size"><h4>Choose a size:</h4>
                    </label>
                    <select id="select-tag" name="size" value={formState.size} onChange={inputChange}>
                        <option value={null}>Make Selection:</option>
                        <option value="small">Small {smPrice}</option>
                        <option value="medium">Medium {mdPrice}</option>
                        <option value="large">Large {lgPrice}</option>
                    </select>

                    <div className="toppings">
                        <h4 id="toppings">Choose your topping(s):</h4>

                        
                        <Label htmlFor="bacon">Bacon</Label>
                        <input className="checkbox" type="checkbox" name="bacon" value={formState.bacon} onChange={inputChange} />
                        
                        <Label htmlFor="pepperoni">Pepperoni</Label>
                        <input className="checkbox" type="checkbox" name="pepperoni" value={formState.pepperoni} onChange={inputChange} />

                        <Label htmlFor="sausage">Sausage</Label>
                        <input className="checkbox" type="checkbox" name="sausage" value={formState.sausage} onChange={inputChange} />

                        <Label htmlFor="hamburg">Hamburg</Label>
                        <input className="checkbox" type="checkbox" name="hamburg" value={formState.hamburg} onChange={inputChange} />

                        <Label htmlFor="peppers">Peppers</Label>
                        <input className="checkbox" type="checkbox" name="peppers" value={formState.peppers} onChange={inputChange} />
                        
                        <Label htmlFor="onions">Onions</Label>
                        <input className="checkbox" type="checkbox" name="onions" value={formState.onions} onChange={inputChange} />

                        <Label htmlFor="olives">Olives</Label>
                        <input className="checkbox" type="checkbox" name="olives" value={formState.olives} onChange={inputChange} />

                        <Label htmlFor="pineapple">Pineapple</Label>
                        <input className="checkbox" type="checkbox" name="pineapple" value={formState.pineapple} onChange={inputChange} />
                    </div>    

                        <label htmlFor="special"><h4>Any Special Requests?</h4></label>
                    <textarea name="special" value={formState.special} onChange={inputChange} />

                    <p></p>
                    <button disabled={buttonDisabled} type="submit">Place Your Order</button>
                </form>
                <pre>{JSON.stringify(postedData, null, 2)}</pre>
        </>
    )
}

export default Form;