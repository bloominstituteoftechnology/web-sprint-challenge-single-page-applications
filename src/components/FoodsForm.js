
import React from 'react'




export default function FoodsForm(props) {

    const { values, submit, change, disabled, errors } = props;

    const onSubmit = (event) => {
        event.preventDefault();
        submit();
    };

    const onChange = (event) => {
        const { name, value, type, checked } = event.target;
        const valueToUse = type === "checkbox" ? checked : value;
        change(name, valueToUse);
    };

    return (
        <form className="form-container" onSubmit={onSubmit}>
            <div className="form-submit">
                <h2>Make your order</h2>
                <button disabled={disabled}>Submit</button>

                <div className="errors">
                    <div>{errors.username}</div>
 
                </div>
            </div>

            <div className="input">
                <h4>Account login</h4>
                <label>
                    Username
                    <input 
                    value={values.username}
                    onChange={onChange}
                    name="username"
                    tpe="text"
                    />
                </label>
      


                <label>
                    Pizza Size
                    <select onChange={onChange} value={values.size} name="size" >
                        <option value="">Select Toppings</option>
                        <option value="personal-pan">Personal Pan</option>
                        <option value="small">Small</option>
                        <option value="medium">Medium</option>
                        <option value="large">Large</option>
                    </select>
                </label>
                <div onChange={onChange} value={values.toppings}>
                <label  >
                    Peppers
                    <input 
                    type="checkbox"
                    name="peppers"
                    checked={values.peppers}
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
                Pineapple
                    <input 
                    type="checkbox"
                    name="pineapple"
                    checked={values.pineapple}
                    onChange={onChange}
                    />
                </label>
                </div>
            </div>



        </form>

    )
}
