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
                        name = "sauce"
                        type = "radio"
                        value = "OriginalRed"
                        checked = { values.sauce === "OriginalRed" }
                        onChange = { onChange } />
                    <label for = "ogRed">Original Red</label>

                    <input
                        name = "sauce"
                        type = "radio"
                        value = "GarlicRanch"
                        checked = { values.sauce === "GarlicRanch" } 
                        onChange = { onChange } />
                    <label for "gRanch">Garlic Ranch</label>

                    <input
                        name = "sauce"
                        type = "radio"
                        valve = "BBQSauce"
                        checked = { values.sauce === "BBQSauce" }
                        onChange = { onChange }/>
                    <label for = "bSauce">BBQ Sauce</label>
                    
                    <input 
                        name = "sauce"
                        type = "radio"
                        valve = "SpinachAlfredo"
                        checked = { values.sauce === "SpinachAlfredo" }
                        onChange = { onChange } />
                    <label for = "sAlfredo">Spinach Alfredo</label>

                </div>
                <div>

                </div>  


            </form>










        </div>


    )
}
