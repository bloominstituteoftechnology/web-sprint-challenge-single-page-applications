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

        <div className="toppings">
            
            <label>
                Pepperoni
                <input
                type="checkbox"
                name="pepperoni"
                checked={values.pepperoni}
                onChange={onChange}
                />
            </label>

            <label>
                Sausage
                <input
                type="checkbox"
                name="sausage"
                checked={values.sausage}
                onChange={onChange}
                />
            </label>

            <label>
                Canadian Bacon
                <input
                type="checkbox"
                name="canadianBacon"
                checked={values.canadianBacon}
                onChange={onChange}
                />
            </label>

            <label>
                Bacon
                <input
                type="checkbox"
                name="bacon"
                checked={values.bacon}
                onChange={onChange}
                />
            </label>

            <label>
                Tomatoes
                <input
                type="checkbox"
                name="tomatoes"
                checked={values.tomatoes}
                onChange={onChange}
                />
            </label>

            <label>
                Onions
                <input
                type="checkbox"
                name="onions"
                checked={values.onions}
                onChange={onChange}
                />
            </label>

            <label>
                Mushrooms
                <input
                type="checkbox"
                name="mushrooms"
                checked={values.mushrooms}
                onChange={onChange}
                />
            </label>

            <label>
                Jalepenos
                <input
                type="checkbox"
                name="jalepenos"
                checked={values.jalepenos}
                onChange={onChange}
                />
            </label>

            <label>
                Banana Peppers
                <input
                type="checkbox"
                name="bananaPeppers"
                checked={values.bananaPeppers}
                onChange={onChange}
                />
            </label>

            <button disabled={disabled}>submit</button>
            <div className="errors">
                <div>{errors.username}</div>
                <div>{errors.email}</div>
                <div>{errors.password}</div>
                <div>{errors.tos}</div>
            </div>
        </div>
        </form>
    )
}