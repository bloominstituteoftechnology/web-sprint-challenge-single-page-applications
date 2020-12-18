import React from "react";


export default function BuildForm(props) {
    const {values, submit, change, disabled, errors} = props;

    const onSubmit = (evt) => {
        evt.preventDefault();
        submit();
    };

    const onChange = (evt) => {
        const {name, value, type, checked} = evt.target;
        const valueToUse = type === "checkbox" ? checked : value;
        change(name, valueToUse);
    };

    return (
        <form className="form container" onSubmit={onSubmit}>
            <div className="name">
                Name
                <label>
                    <input
                    type="text"
                    name="name"
                    value={values.name}
                    onChange={onChange}
                    />
                </label>
            </div>

        <div className="size choice">
            Choose a Size
            <label>
                <select onChange={onChange} value={values.size} name="size">
                <option value=""> --Select a size--</option>
                <option value= "personal">8" (personal)</option>
                <option value= "medium">12" (medium)</option>
                <option value= "large">16" (large)</option>
                </select>
            </label>
        </div>

        <div className="sauce choice">
            <h2>Pick Your Sauce</h2>
            
            <div className="marinara">
                <label>
                    Original Marinara
                    <input
                    type="radio"
                    name="sauce"
                    value="marinara"
                    onChange={onChange}
                    checked={values.sauce === "marinara"}
                    />
                </label>
            </div>

            <div className="ranch">
                <label>
                    Zesty Ranch
                    <input 
                    type="radio"
                    name="sauce"
                    value="ranch"
                    onChange={onChange}
                    checked={values.sauce === "ranch"}
                    />
                </label>
            </div>
            
            <div className="bbq">
                <label>
                    Tangy BBQ
                    <input
                    type="radio"
                    name="sauce"
                    value="bbq"
                    onChange={onChange}
                    checked={values.sauce === "bbq"}
                    />
                </label>
            </div>
        </div>

        <div className="toppings">
            <h2>Pick Your Toppings</h2>
            <div className="pepperoni">
                <label>
                    Pepperoni
                    <input
                    type="checkbox"
                    name="pepperoni"
                    checked={values.pepperoni}
                    onChange={onChange}
                    />
                </label>
            </div>

            <div className="sausage">
                <label>
                    Sausage
                    <input
                    type="checkbox"
                    name="sausage"
                    checked={values.sausage}
                    onChange={onChange}
                    />
                </label>
            </div>

            <div className="canadian bacon">
                <label>
                    Canadian Bacon
                    <input
                    type="checkbox"
                    name="canadianBacon"
                    checked={values.canadianBacon}
                    onChange={onChange}
                    />
                </label>
            </div>

            <div className="bacon">
                <label>
                    Bacon
                    <input
                    type="checkbox"
                    name="bacon"
                    checked={values.bacon}
                    onChange={onChange}
                    />
                </label>
            </div>

            <div className="pineapple">
                <label>
                    Pineapple
                    <input
                    type="checkbox"
                    name="pineapple"
                    checked={values.pineapple}
                    onChange={onChange}
                    />
                </label>
            </div>

            <div className="">
                <label>
                    Tomatoes
                    <input
                    type="checkbox"
                    name="tomatoes"
                    checked={values.tomatoes}
                    onChange={onChange}
                    />
                </label>
            </div>

            <div className="">
                <label>
                    Onions
                    <input
                    type="checkbox"
                    name="onions"
                    checked={values.onions}
                    onChange={onChange}
                    />
                </label>
            </div>

            <div className="">
                <label>
                    Mushrooms
                    <input
                    type="checkbox"
                    name="mushrooms"
                    checked={values.mushrooms}
                    onChange={onChange}
                    />
                </label>
            </div>

            <div className="">
                <label>
                    Jalepenos
                    <input
                    type="checkbox"
                    name="jalepenos"
                    checked={values.jalepenos}
                    onChange={onChange}
                    />
                </label>
            </div>

            <div className="">
                <label>
                    Banana Peppers
                    <input
                    type="checkbox"
                    name="bananaPeppers"
                    checked={values.bananaPeppers}
                    onChange={onChange}
                    />
                </label>
            </div>

            <div className="special instructions">
                <h2>Special Instructions</h2>
                <label>
                    <input
                    type="text"
                    name="specialInstructions"
                    value={values.specialInstructions}
                    onChange={onChange}
                    />
                </label>
            </div>
       
            <button disabled={disabled}>submit</button>
                <div className="errors">
                <div>{errors.size}</div>
                <div>{errors.sauce}</div>
                <div>{errors.toppings}</div>
            </div>        
        </div>
        </form>
    )
}