import React from "react";
import {Link, useHistory} from 'react-router-dom'
import styled from "styled-components";

const StyledSelect = styled.select`
    max-width: 20rem;
    width: 15rem;
    background-color: black;
    margin-left: 1rem;
    height: 2rem;
`;

const StyledName = styled.div`
    input {
        color: white;
        background-color: black;
    }
`;

function Pizza(props) {
    const {
        values, submit, change, disabled, errors, reset
    } = props;
    
    const history = useHistory()
        const routeToconfirm = () => {
            history.push('/confirm')
        }

    const onSubmit = evt => {
        evt.preventDefault()
        submit()
        reset()
        routeToconfirm()
        

    }

    const onChange = evt => {
        const { name, value, checked, type } = evt.target;
        const valueToUse = type === "checkbox" ? checked : value
        change(name, valueToUse)
    }




    return(
        <div className="pizza">
            <header>
                <h1>Bloomtech Eats</h1>
                <div className="nav-links">
                    <Link to="/"><button onClick={reset}>Home</button></Link>
                    <button>Help</button>
                </div>
            </header>
            <form className="pizza-form" id="pizza-form" onSubmit={onSubmit}>
            <div className="pizza-container">
                <h3>Build your Own Pizza</h3>
                <div className="name"><label><h3>Enter a name for your order</h3></label></div>
                <StyledName className="name-wrapper">
                    <input
                        id="name-input"
                        type="text"
                        name="customer"
                        placeholder="enter name"
                        onChange={onChange}
                        value={values.customer}
                    />
                </StyledName>


                <div className="size">
                    <label for="size-select"><h3>Choice of Size</h3></label>
                    <p>Required</p>
                </div>
                <div className="select-wrapper">
                    <StyledSelect 
                        id="size-dropdown"
                        onChange={onChange}
                        className="size-select"
                        name="size"
                        value={values.size}
                    >
                        <option value="">Select a size</option>
                        <option value="large">Large</option>
                        <option value="medium">Medium</option>
                        <option value= "small">Small</option>
                    </StyledSelect>
                 
                </div>
                <div className="sauce">
                    <h3>Choice of Sauce</h3>
                    <p>Required</p>
                </div>
                <div className="sauce-wrapper">
                    <label> 
                    <input
                        type='radio'
                        name="sauce"
                        value="Original Recipe"
                        onChange={onChange}
                        checked={values.sauce === "Original Recipe"}
                    />
                    Original Recipe</label>
                    <label>
                    <input
                        type='radio'
                        name="sauce"
                        value="Garlic Ranch"
                        onChange={onChange}
                        checked={values.sauce === "Garlic Ranch"}
                    />
                    Garlic Ranch</label>
                    <label>
                    <input
                        type='radio'
                        name="sauce"
                        value="BBQ"
                        onChange={onChange}
                        checked={values.sauce === "BBQ"}
                    />
                    BBQ Sauce</label>
                    <label>
                    <input
                        type='radio'
                        name="sauce"
                        value="Buffalo"
                        onChange={onChange}
                        checked={values.sauce === "Buffalo"}
                    />
                    Buffalo Sauce</label>
                </div>
                <div className="toppings">
                    <h3>Add Toppings</h3>
                </div>
                <div className="toppings-wrapper"> 
                    <div className="left-panel">
                        <label>
                        <input
                            type='checkbox'
                            name="pepperoni"
                            checked={values.pepperoni}
                            onChange={onChange}
                        />
                        Pepperoni</label>
                        <label>
                        <input
                            type='checkbox'
                            name="sausage"
                            checked={values.sausage}
                            onChange={onChange}
                        />
                        Sausage</label>
                        <label>
                        <input
                            type='checkbox'
                            name="ham"
                            checked={values.ham}
                            onChange={onChange}
                        />
                        Ham</label>
                    </div>
                    <div className="right-panel"> 
                        <label for="mushroom">
                        <input
                            name="mushroom"
                            type='checkbox'
                            checked={values.mushroom}
                            onChange={onChange}
                        />
                        Mushroom</label>
                        <label for="chicken">
                        <input
                            name="chicken"
                            type='checkbox'
                            checked={values.chicken}
                            onChange={onChange}
                        />
                        Chicken</label>
                        <label>
                        <input
                            name="extraCheese"
                            type='checkbox'
                            checked={values.extraCheese}
                            onChange={onChange}
                        />
                        Extra Cheese</label>
                    </div>
                </div>
                <div className="sub">
                    <h3>Choice of Substitute</h3>
                    <p>Choose up to 1</p>
                </div>
                <div className="sub-wrapper">
                    <input
                        name="gluten"
                        type='checkbox'
                        checked={values.gluten}
                        onChange={onChange}
                    />                   
                    <label for="gluten">Gluten Free Crust (+ $1.00)</label>
                </div>
                <div className="special">
                    <label><h3>Special instructions</h3></label> 
                </div>
                <div className="special-wrapper">            
                    <input
                        id="special-text"
                        name="special"
                        type="text"
                        placeholder="Anything else you'd like to add"
                        onChange={onChange}
                        value={values.special}
                    />
                       
                </div>
                <div>{errors.size}</div>
                <div>{errors.sauce}</div>
                <div>{errors.customer}</div>
                <button className="submit" id="order-button" disabled={disabled}>submit</button>
            </div>
            </form>
        </div>
    )
}


export default Pizza