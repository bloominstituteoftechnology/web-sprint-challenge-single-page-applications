import styled from "styled-components";


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
    const { values, submit, change } = props;

    const onSubmit = (event) => {
        event.preventDefault();
        submit();
    }

    const onChange = event => {
        const { name, value, checked, type } = event.target;
        const newVal = type === "checkbox" ? checked : value;
        change(name, newVal);
    }

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