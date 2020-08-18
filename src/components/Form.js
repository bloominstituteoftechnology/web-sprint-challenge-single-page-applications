import React, { useState } from "react";

const Form = props =>{

    const [formState, setFormState] = useState({
        name:""
    });

    const formSubmit = e => {
        e.preventDefault();
        console.log("form submitted");
    };

    const inputChange = e => {
        console.log("input changed", e.target.value);
        setFormState({name: e.target.value});
    };








    return(


<form onSubmit={formSubmit}>

    <label htmlFor="name">
        name
        <input 
            id="name"
            type="text"
            name="name"
            value={formState.name}
            onChange={inputChange}
            />
    </label>


    <label htmlFor="positions">
        What type of crust would you like?
        <select id="positions" name="positions">
			<option>--Please choose an option--</option>
            <option>Deep Dish</option>
            <option>Thin Crust</option>
            <option>Cheesy Crust</option>
        </select>
    </label>

    <label htmlFor="sauces" className="sauces" >
        <input type="checkbox" name="sauces" checked={true}/>
        <input type="checkbox" name="sauces" checked={true}/>
        <input type="checkbox" name="sauces" checked={true}/>
        <input type="checkbox" name="sauces" checked={true}/>
        <input type="checkbox" name="sauces" checked={true}/> 
        <input type="checkbox" name="sauces" checked={true}/>
    
    
    </label>

    <label htmlFor="whatelse">
        What else would you like
        <textarea id="whatelse" name="whatelse"/>   
    </label>

  
    







</form>                  
    
    );
};
export default Form;