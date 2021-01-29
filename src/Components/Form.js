import React from "react";
import React from { useHistory } from "react-router-dom";

export default function Form  ( props ) {

    const { values, submit, change disabled, errors } = props;

    const history = { useHistory };
        event.preventDefault();
        submit();
        history.push("/checkbox" ? checked : value );
}
const OnChange  = event => {
    const { name, value, type, checked } = event.target;
    change ( name, value === "checkbox" ? checked.value ) ; 










    return(
        <div className = "div-container">
            <h1>Build Your Own Pizza!!!</h1>
            <div className = "img-banner"></div>
            <h1>Build Your Own Pizza Below</h1>
            <form className = "form-section">
                <div>
                    <label>Hello there! where is this?
                    
                    <select
                        name = "pizzaSize"
                        value = { values.pizzaSize }
                        onChange = { OnChange }
                        >
                        <option value = "">---SELECT YOUR OPPONENT---</option>
                        <option value = "small">Small</option>
                        <option value = "medium">Meduim</option>
                        <option value = "large">Large</option>
                    </select>
                    </label>
                </div>
                <div>  
                    <h3>Choice of Sauce</h3>
                    <p>Required</p>
                </div>
                <div>
                    <input
                        type = "radio"
                        name = "sauce"
                        value = "Original Red"
                        checked = { values.sauce === "Original Red" }
                        onChange = { onChange } />
                    <label for = "">Original Red</label>
                    <input
                        type = "radio"
                        name = "sauce"
                        value = 
                    />
                </div>
                <div>

                </div>  


            </form>










        </div>


    )
}
