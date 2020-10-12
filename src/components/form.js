import React, { useState } from "react"



const Form = () =>{
const [formState, setFormState] = useState({
    name: "",
    size: "",
    toppings: false,
    instructions: ""

})

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