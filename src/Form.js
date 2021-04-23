import React from "react";


export default function Form(props){
    const {values,update,submit} =props;




return (
    <div className = "container">

        <form id ="pizza-form" onSubmit={null}>
            <h2>Order Here!</h2>

            {/* Enter Name */}
            <div>
                <label>
                    Name: 
                    <input name = "name" type ="text"  placeholder = "Enter Your Name"/>
                </label>
            </div>

            {/* Size */}
            <div>
                <label>
                    <select id ="size-dropdown" value={null} name="role" onChange={null}>
                        <option value="">-- Select a Size --</option>
                        <option value="Small">Small</option>
                        <option value="Medium">Medium</option>
                        <option value="Large">Large</option>
                </select>
                </label>
            </div>
            {/* Select Toppings */}
            <div>
                Select Your Toppings: <br/>
                <label>
                    Pineapple:
                    <input
                        type="checkbox"
                        name="pineapple"
                        checked={null}
                        onChange={null}
                    />
                </label>

                <label>
                    Jalapenos:
                    <input
                        type="checkbox"
                        name="jalapenos"
                        checked={null}
                        onChange={null}
                    />
                </label>

                <label>
                    Mushrooms:
                    <input
                        type="checkbox"
                        name="mushrooms"
                        checked={null}
                        onChange={null}
                    />
                </label>

                <label>
                    Pepperoni:
                    <input
                        type="checkbox"
                        name="pepperoni"
                        checked={null}
                        onChange={null}
                    />
                </label>
            </div>
            {/* Special Instructions */}
            <div>
                <label>
                    Special Instructions:
                    <input name = "instructions" type ="text"  placeholder = "Special Instructions"/>
                </label>
            </div>
            {/* Submit btn */}
            <div>
                <button disabled={null}>Submit</button>

            </div>
        </form>
    </div>
)
}