import React from "react";
import React from { useHistory } from "react-router-dom";

export default function Form  ( props ) {

    const { value, submit, change, disabled, errors } = props;

    const history = { useHistory };

    const onSubmit = event => {
        event.preventDefault();
        submit();
        history.push("/checkout");
    }

const OnChange  = event => {
    const { name, value, type, checked } = event.target;
    change( name, type === "checkbox" ? checked : value ); 



    return(
        <div className = "div-container">
            <h1>Build Your Own Pizza!!!</h1>
            <div className = "img-banner"></div>
            <h2>Build Your Own Pizza Below</h1>
            <form className = "form-container" onSubmit = { onSubmit }>
                <div className = "form-titles">
                    <h3>Choice of Size</h3>
                    <p>Required</p>
                </div>

                <div className = "ingre-form">    
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
                </div>

                <div className = "form-title">  
                    <h3>Choice of Sauce</h3>
                    <p>Required</p>
                </div>

                <div className = "ingre-form" >
                    <input
                        name = "sauce"
                        type = "radio"
                        value = "OriginalRed"
                        checked = { values.pizzaSauce === "OriginalRed" }
                        onChange = { onChange } />
                    <label for = "ogRed">Original Red</label>

                    <input
                        name = "sauce"
                        type = "radio"
                        value = "GarlicRanch"
                        checked = { values.pizzaSauce === "GarlicRanch" } 
                        onChange = { onChange } />
                    <label for = "gRanch">Garlic Ranch</label>

                    <input
                        name = "sauce"
                        type = "radio"
                        value = "BBQSauce"
                        checked = { values.pizzaSauce === "BBQSauce" }
                        onChange = { onChange }/>
                    <label for = "bSauce">BBQ Sauce</label>
                    
                    <input 
                        name = "sauce"
                        type = "radio"
                        value = "SpinachAlfredo"
                        checked = { values.pizzaSauce === "SpinachAlfredo" }
                        onChange = { onChange } />
                    <label for = "sAlfredo">Spinach Alfredo</label>
                </div>

                <div className = "form-titles">
                    <h3>Add Toppings</h3>
                    <p>Choose Up To 8 Toppings</p>
                </div>

                <div className = "ingre-form"> 
                    <input
                        name = "cheese"
                        type = "checkbox"
                        value = "cheese"
                        checked = { values.Cheese }
                        onChange = { onChange } />
                    <label for = "cheese">Cheese</label>
                    <input
                        name = "sausage"
                        type = "checkbox"
                        value = "sausage"
                        checked = { values.sausage }
                        onChange = { onChange } />
                    <label for = "sausage">sausage</label>
                    <input
                        name = "pepperoni"
                        type = "checkbox"
                        value = "pepperoni"
                        checked = { values.pepperoni }
                        onChange = { onChange } />
                    <label for = "pepperoni">Pepperoni</label>
                    <input
                        name = "mushroom"
                        type = "checkbox"
                        value = "mushroom"
                        checked = { values.mushroom }
                        onChange = { onChange } />
                    <label for = "mushroom">Mushroom</label>
                    <input
                        name = "pineapple"
                        type = "checkbox"
                        value = "pineapple"
                        checked = { values.pineapple }
                        onChange = { onChange } />
                    <label for = "pineapple">Pineapple</label>
                    <input
                        name = "onions"
                        type = "checkbox"
                        value = "onions"
                        checked = { values.onions }
                        onChange = { onChange } />
                    <label for = "onions">Onions</label>
                    <input
                        name = "olives"
                        type = "checkbox"
                        value = "olives"
                        checked = { values.olives }
                        onChange = { onChange } />
                    <label for = "olives">Olives</label>
                    <input
                        name = "kitchenSink"
                        type = "checkbox"
                        value = "kitchenSink"
                        checked = { values.kitchenSink }
                        onChange = { onChange } />
                    <label for = "kitchenSink">Kitchen Sink</label>
                </div>

                <div className = "form-titles">
                    <h3>Choice of Substitute</h3>
                    <p>Choose Your Dietary Needs</p>
                </div>
                
                <div className = "toggle-switch, ingre-form">
                    <input
                        name = "glutenFree"
                        type = "checkbox"
                        className = "toggle-switch-checkbox" 
                        id = "toggleSwitch" />
                    <label 
                        className="toggle-switch-label" 
                        htmlFor="toggleSwitch">
                            <span className = "toggle-switch-inner" />
                            <span className = "toggle-switch-switch" />
                    </label>
                
                    <input
                        name = "dairyFree"
                        type = "checkbox"
                        className = "toggle-switch-checkbox" 
                        id = "toggleSwitch" />
                    <label 
                        className="toggle-switch-label" 
                        htmlFor="toggleSwitch">
                            <span className = "toggle-switch-inner" />
                            <span className = "toggle-switch-switch" />
                    </label>
                </div>       
                
                <div className = "form-titles">
                    <h3>Special Instructions</h3>
                </div>

                <div className = "ingre-form">
                    <input
                        name = "addOn"
                        type = "text"
                        value = { values.addOn }
                        placeholder = "Anything you would like to add?"
                        onChange = { onChange } />
                </div>

                <div className = "submit-container">
                    <button
                        disabled = { disabled }
                        id = "subBtn"> Add To Order
                    </button>
                </div>
            
            </form>

            <div className='errors'>
                <div>{errors.pizzaSize}</div>
                <div>{errors.pizzaSauce}</div>
            </div>

        </div>
    )
}
