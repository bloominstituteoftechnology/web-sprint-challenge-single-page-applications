import React from 'react'

const Pizza = () => {
    return (
        <div>
            <h1>Menu</h1>
            <form className="place-order">
                <div className="name-here">
                    <label htmlFor="name"></label>
                    <input 
                        type="text"
                        name="name"
                        id="name"
                        placeholder="Name for order"
                    />
                </div>

                <div className="pizza-size">
                    <label htmlFor="size"></label>
                        <select
                            placeholder="Select Size"
                            id="size"
                            name="size">

                                <option value="none">Select Size
                                </option>

                                <option value="small">Small Pizza: 8-10 inches with 6 slices 
                                </option>

                                <option value='Medium'>Medium Pizza: 12 inches with 8 slices.
                                </option>

                                <option value='Large'>Large Pizza: 14 inch with 10 slices.
                                </option>

                                <option value='Extra-Large'>Extra-large Pizza: 16-18 inch with 12 slices.
                                </option>
                        </select>

                <div className="cheese">
                    <label htmlFor="yes-cheese">Cheese</label>
                        <input 
                            name="yes-cheese"
                            id="yes-cheese"
                            type="checkbox"
                        />
                </div>

                <div className="sauce">
                    <label htmlFor="yes-sauce">Sauce</label>
                        <input 
                            name="yes-sauce"
                            id="yes-sauce"
                            type="checkbox"
                        />
                </div>

                <div className="meat">
                    <label htmlFor="pepperoni">Pepperoni</label>
                        <input 
                            name="pepperoni"
                            id="pepperoni"
                            type="checkbox"
                        />

                    <label htmlFor="bacon">Bacon</label>
                        <input 
                            name="bacon"
                            id="bacon"
                            type="checkbox"
                        />
                    <label htmlFor="sausage">Sausage</label>
                        <input 
                            name="sausage"
                            id="sausage"
                            type="checkbox"
                        />
                </div>

                <div className="veggies">
                    <label htmlFor="onion">Onions</label>
                        <input 
                            name="onion"
                            id="onion"
                            type="checkbox"
                        />

                    <label htmlFor="pepper"> Green Pepper</label>
                        <input 
                            name="pepper"
                            id="pepper"
                            type="checkbox"
                        />

                    <label htmlFor="mushrooms">Mushrooms</label>
                        <input 
                            name="mushrooms"
                            id="mushrooms"
                            type="checkbox"
                        />
                </div>

                <div className="special-request">
                    <label htmlFor="new-request">Special Requests</label>
                        <input 
                            id="new-request"
                            name="new-request"
                            placeholder="Add request substitutions here"
                            type="text"
                        />
                </div>

                <div className="submit-order">
                    <button
                        type="submit">
                            Add To Your Order</button>
                </div>


                </div>
                
            </form>
        </div>
    )
}

export default Pizza;
