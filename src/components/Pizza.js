import React from "react";

export default function Pizza(props){
    const { values, submit, change, disabled, errors } = props;

    const onSubmit = event => {
        event.preventDefault();
        submit();
    }

    const onChange = event => {
        const { name, value, type, checked } = event.target;
        const valueToUse = type === "checkbox" ? checked : value;
        change(name, valueToUse)
    }

    return (
        <form onSubmit={onSubmit}>
            <h2>Create your pizza below:</h2>
            
            <h3>Who's this pizza for?</h3>
                <label>
                    {/* Name:   */}
                    <input 
                        type="text"
                        value={values.name}
                        onChange={onChange}
                        name="name"
                    />
                </label>

            <h3>How big?</h3>
                <label>
                     {/* Size: */}
                    <select name="size" value={values.size} onChange={onChange}>
                        <option value="">---click here---</option>
                        <option value="Small">Small</option>
                        <option value="Medium">Medium</option>
                        <option value="Large">Large</option>
                    </select>
                </label>

            <h3>Which toppings? ($0.50 per topping)</h3>
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
                    Chicken
                    <input 
                        type="checkbox"
                        name="chicken"
                        checked={values.chicken}
                        onChange={onChange}
                    />
                </label>
                <label>
                    Pineapple
                    <input 
                        type="checkbox"
                        name="pineapple"
                        checked={values.pineapple}
                        onChange={onChange}
                    />
                </label>
            
            <h3>Allergies? Special instructions? Let us know!</h3>
                <label>
                    Instructions: 
                    <textarea 
                        name="instructions"
                        value={values.instructions}
                        onChange={onChange}
                    />
                </label>

            <div className="errors">
                <p>{errors.name}</p>
                <p>{errors.size}</p>
            </div>

            <button disabled={disabled}>Add to Order!</button>

        </form>
    )
}