import React, { useState } from "react"



const Form = () =>{
const [formState, setFormState] = useState({
    name: "",
    menu: "",
    toppings: false,
    instructions: ""

})

    return(
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
    )
}

export default Form