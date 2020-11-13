import React from 'react'

export default function PizzaForm(props) {
    const { values, change, disabled, errors, orders } = props;

    const onSubmit = (evt) => {
        evt.preventDefault();
        let orderId = orders.length;
        let order = { "orderId": orderId, "size": values.size, "sauce": values.sauce, "toppings": values.toppings, "substitue": values.substitute, "total": values.total };
        orders.push(order);
        this.props.history.push('/order/' + orderId);
    };

    const onChange = (evt) => {
        const { name, value, checked, type } = evt.target;
        const correctValue = type === "checkbox" ? checked : value;
        values.total = 0;
        if (values.size === "small") {
            values.total = 5;
        }
        else if (values.size === "medium") {
            values.total = 6;
        }
        else if (values.size === "large") {
            values.total = 7;
        } else {
            values.total = 0;
        }
        if (values.substitute === true) {
            values.total += 1;
        }
        values.total = values.total * values.quantity;
        change(name, correctValue);
    };

    return (
        <div>
            <form onSubmit={onSubmit}>
                <div>
                    <img src="/images/pizza.jpg" alt="Pizza" width="400" height="250" />
                </div>
                <div>
                    <h2>Build Your Own Pizza</h2>
                </div>
                <div>
                    <h3>Choice of Size</h3>
                    <div className="errors">{errors.size}</div>
                    <select name="size" onChange={onChange}>
                        <option value="">Select</option>
                        <option value="small">Small(+$5)</option>
                        <option value="medium">Medium(+$6)</option>
                        <option value="large">Large(+$7)</option>
                    </select>
                </div>
                <div>
                    <h3>Choice of Sauce</h3>
                    <div className="errors">{errors.sauce}</div>
                    <input onChange={onChange} type="radio" id="originalRed" name="sauce" value="originalRed" />
                    <label for="originalRed">Original Red</label>
                    <input onChange={onChange} type="radio" id="garlicRanch" name="sauce" value="garlicRanch" />
                    <label for="garlicRanch">Garlic Ranch</label>
                    <input onChange={onChange} type="radio" id="bbqSauce" name="sauce" value="bbqSauce" />
                    <label for="bbqSauce">BBQ Sauce</label>
                    <input onChange={onChange} type="radio" id="spinachAlfredo" name="sauce" value="spinachAlfredo" />
                    <label for="spinachAlfredo">Spinach Alfredo</label>
                </div>
                <div>
                    <h3>Add Toppings</h3>
                    <div className="errors">{errors.toppings}</div>
                    <div>
                        <input onChange={onChange} type="checkbox" id="pepperoni" name="pepperoni" value="pepperoni" checked={values.pepperoni} />
                        <label for="pepperoni">Pepperoni</label>

                        <input onChange={onChange} type="checkbox" id="sausage" name="sausage" value="sausage" checked={values.sausage} />
                        <label for="sausage">Sausage</label>

                        <input onChange={onChange} type="checkbox" id="canadianBacon" name="canadianBacon" value="canadianBacon" checked={values.canadianBacon} />
                        <label for="canadianBacon">Canadian Bacon</label>

                        <input onChange={onChange} type="checkbox" id="spicyItalianSausage" name="spicyItalianSausage" value="spicyItalianSausage" checked={values.spicyItalianSausage} />
                        <label for="spicyItalianSausage">Spicy Italian Sausage</label>

                        <input onChange={onChange} type="checkbox" id="grilledChicken" name="grilledChicken" value="grilledChicken" checked={values.grilledChicken} />
                        <label for="grilledChicken">Grilled Chicken</label>

                        <input onChange={onChange} type="checkbox" id="onions" name="onions" value="onions" checked={values.onions} />
                        <label for="onions">Onions</label>

                        <input onChange={onChange} type="checkbox" id="greenPepper" name="greenPepper" value="greenPepper" checked={values.greenPepper} />
                        <label for="greenPepper">Green Pepper</label>
                    </div>
                    <div>
                        <input onChange={onChange} type="checkbox" id="dicedTomatos" name="dicedTomatos" value="dicedTomatos" checked={values.dicedTomatos} />
                        <label for="dicedTomatos">Diced Tomatos</label>

                        <input onChange={onChange} type="checkbox" id="blackOlives" name="blackOlives" value="blackOlives" checked={values.blackOlives} />
                        <label for="blackOlives">Black Olives</label>

                        <input onChange={onChange} type="checkbox" id="roastedGarlic" name="roastedGarlic" value="roastedGarlic" checked={values.roastedGarlic} />
                        <label for="roastedGarlic">Roasted Garlic</label>

                        <input onChange={onChange} type="checkbox" id="artichokeHearts" name="artichokeHearts" value="artichokeHearts" checked={values.artichokeHearts} />
                        <label for="artichokeHearts">Artichoke Hearts</label>

                        <input onChange={onChange} type="checkbox" id="threeCheese" name="threeCheese" value="threeCheese" checked={values.threeCheese} />
                        <label for="threeCheese">Three Cheese</label>

                        <input onChange={onChange} type="checkbox" id="pineapple" name="pineapple" value="pineapple" checked={values.pineapple} />
                        <label for="pineapple">Pineapple</label>

                        <input onChange={onChange} type="checkbox" id="extraCheese" name="extraCheese" value="extraCheese" checked={values.extraCheese} />
                        <label for="extraCheese">Extra Cheese</label>
                    </div>
                </div>
                <div>
                    <h3>Choice of Substitute</h3>
                    <div className="errors">{errors.substitute}</div>
                    <input onChange={onChange} type="checkbox" id="glutenFree" name="substitute" value="glutenFree" />
                    <label for="glutenFree">Gluten Free Crust (+ $1.00)</label>
                </div>
                <div>
                    <h3>Special Instructions</h3>
                    <textarea onChange={onChange} name="specialInstructions" id="specialInstructions" cols="30" rows="5" placeholder="Anything else you'd like to add?"></textarea>
                </div>
                <hr />
                <div>
                    <div className="errors">{errors.quantity}</div>
                    <input onChange={onChange} type="number" min="1" max="10" name="quantity" id="quantity" step="1" value={values.quantity} />
                    <button disabled={disabled} id="submitBtn">Add to Order ${values.total}</button>
                </div>
            </form>
        </div>
    )
}
