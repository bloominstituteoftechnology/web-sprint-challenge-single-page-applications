import React, { useState, useEffect } from "react"
import * as yup from "yup";
import axios from "axios";


const Form = () =>{
const [formState, setFormState] = useState({
    name: "",
    size: {
        small: false,
        medium: false,
        large: false,
    },
    toppings: {
        pepporoni: false,
        sausage: false,
        olive: false,
        basil: false,
    },
    instructions: ""

})

const [order,setOrder] = useState([])

const [buttonIsDisabled, setButtonIsDisabled] = useState(true);

const inputChange = (e) => {
    if(e.target.type==='checkbox'){
        setFormState({...formState,toppings:{
            ...formState.toppings,[e.target.value]:e.target.checked
        }})
    }else{
        setFormState({...formState,[e.target.name]:e.target.value})
    }if (e.target.name==="name"){
        validate(e)
    }

}


    return(
        <form>
            {/* onSubmit={formSubmit} */}
        <label htmlFor="name">
            Name
            <input
            id="name"
            type="text"
            name="name"
            value={formState.name}
            // onChange={inputChange}
            />
        </label>
                <label htmlFor="size">
                Size
                <select
                id="size"
                type="text"
                name="size"
                value={formState.size}
                // onChange={inputChange}
                >
        <option value="">--Choose One--</option>
          <option value='12"'>12"</option>
          <option value='16"'>16"</option>
          <option value='20"'>20"</option>
        </select>
            </label>
            <label htmlFor="toppings">
            toppings
           <label> <input id="toppings" type="checkbox" name="toppings" value={formState.toppings}/> </label>
           <label> <input id="toppings" type="checkbox" name="toppings" value={formState.toppings}/> </label>
           <label> <input id="toppings" type="checkbox" name="toppings" value={formState.toppings}/> </label>
           <label> <input id="toppings" type="checkbox" name="toppings" value={formState.toppings}/> </label>
        </label>
        <label htmlFor="instructions">
        instructions
            <textarea
            id="instructions"
            name="instructions"
            placeholder="Enter Instructions Here"
            value={formState.instructions}
            // onChange={inputChange}
            />
        </label>
        <button type="submit" disabled={buttonIsDisabled}>Order Your Pizza!</button>
        <pre>{JSON.stringify(post, null, 2)}</pre>

            </form>

    )
}

export default Form