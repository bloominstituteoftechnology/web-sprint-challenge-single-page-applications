import styled from "styled-components";


// Form styling
const OrderFormStyling = styled.div`
    display: flex;
    flex-direction: column;
    

    label {
        margin: 10px; 
        font-weight: bold;

        input {
            margin-left: 10px;
        }
    }
    #toppings {
        display: flex;
        flex-direction: column;
    }
`;



export default function OrderForm(props) {

    const { values, // values in form fields
            submit, // submit function in App
            change, // formValue update function in App
            disabled // disabled status of Submit button
          } = props;


    // When Submit button is pressed, prevent page from reloading and then run the submit() function (a props passed through from App.js)
    const onSubmit = (event) => {
        event.preventDefault();
        submit();
    }

    // When any value of any field is changed, update the value of that field in the formsValue by passing it through the change prop from App.js
    const onChange = event => {
        const { name, value, checked, type } = event.target;
        const newVal = type === "checkbox" ? checked : value;
        change(name, newVal);
    }


    // The entire form page itself at "/pizza"
    return (
        <div>
            <h2>Build Your Own Pizza</h2>
            <OrderFormStyling onSubmit={onSubmit}>
                <label>Name
                    <input 
                        type="text"
                        name="name"
                        id="name-input"
                        value={values.name}
                        onChange={onChange}
                    />
                </label>
                <label>Choice of Size
                    <select name="size" value={values.size} onChange={onChange} id="size-dropdown">
                        <option value="">====Select====</option>
                        <option value="small">Small</option>
                        <option value="medium">Medium</option>
                        <option value="large">Large</option>
                        <option value="xlarge">X-Large</option>
                    </select>
                </label>
                <label>Choice of Sauce
                <select name="sauce" value={values.sauce} onChange={onChange} id="sauce-dropdown">
                        <option value="">====Select====</option>
                        <option value="marinara">Marinara</option>
                        <option value="pesto">Pesto</option>
                        <option value="bbq">Barbecue Sauce</option>
                        <option value="white">White Garlic Sauce</option>
                    </select>
                </label>
                <label id="toppings">Add Toppings
                        <span className="garlic">Garlic
                            <input 
                                type="checkbox"
                                name="garlic"
                                checked={values.garlic}
                                onChange={onChange}
                            />
                        </span>
                        <span className="green-pepper">Green Pepper
                            <input 
                                type="checkbox"
                                name="green_pepper"
                                checked={values.green_pepper}
                                onChange={onChange}
                            />
                        </span>
                        <span className="olives">Black Olives
                            <input 
                                type="checkbox"
                                name="olives"
                                checked={values.olives}
                                onChange={onChange}
                            />
                        </span>
                        <span className="onions">Onions
                            <input 
                                type="checkbox"
                                name="onions"
                                checked={values.onions}
                                onChange={onChange}
                            />
                        </span>
                        <span className="pineapple">Pineapple
                            <input 
                                type="checkbox"
                                name="pineapple"
                                checked={values.pineapple}
                                onChange={onChange}
                            />
                        </span>
                </label>
                <label>Special Instructions
                    <input 
                        name="special"
                        id="special-text"
                        type="text"
                        value={values.special}
                        onChange={onChange}
                    />
                </label>
                <button onClick={onSubmit} id="submit-button">Submit</button>
            </OrderFormStyling>
        </div>
    )
}