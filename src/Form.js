import React from "react";

function Form(){
    // const meats=['pepperoni', 'sausage', 'ground beef', 'bacon', 'ham', 'grilled chicken'];
    // const veggies=['green pepper', 'onion', 'spinach', 'pineapple', 'olives', 'red peppers', 'tomatoes','jalepenos'];
    // const cheese=[]
    return(
        <div>
            <form>
                <label>Choice of Size
                    <select>
                        <option>Select</option>
                        <option>Personal</option>
                        <option>Small</option>
                        <option>Medium</option>
                        <option>Large</option>
                        <option>Family</option>
                    </select>
                </label>
            </form>

            <form>
                <h3>Meats</h3>
                    <label>pepperoni
                    <input type="checkbox"/>
                    </label><br></br><br></br>
                    <label>sausage
                    <input type="checkbox"/>
                    </label><br></br><br></br>
                    <label>ground beef
                    <input type="checkbox"/>
                    </label><br></br><br></br>
                    <label>bacon
                    <input type="checkbox"/>
                    </label><br></br><br></br>
                    <label>ham
                    <input type="checkbox"/>
                    </label><br></br><br></br>
                    <label>grilled chicken
                    <input type="checkbox"/>
                    </label><br></br><br></br>
                    <h3>Veggie's</h3>
                    <label>green peppers
                        <input type='checkbox'/>
                    </label><br></br><br></br>
                    <label>onions
                        <input type='checkbox'/>
                    </label><br></br><br></br>
                    <label>spinach
                        <input type='checkbox'/>
                    </label><br></br><br></br>
                    <label>pineapple
                        <input type='checkbox'/>
                    </label><br></br><br></br>
                    <label>olives
                        <input type='checkbox'/>
                    </label><br></br><br></br>
                    <label>red peppers
                        <input type='checkbox'/>
                    </label><br></br><br></br>
                    <label>tomatoes
                        <input type='checkbox'/>
                    </label><br></br><br></br>
                    <label>jalepenos
                        <input type='checkbox'/>
                    </label><br></br><br></br>
                    <h3>Cheese</h3>
                    <label>mozzarela
                        <input type='checkbox'/>
                    </label><br></br><br></br>
                    <h3>Sauce</h3>
                    <label>original
                        <input type='checkbox'/>
                    </label><br></br><br></br>
                    <h3>crust</h3>
                    <label>butter cheese
                        <input type='checkbox'/>
                    </label><br></br><br></br>
                    <h3></h3>
                    <label>special instructions
                        <input type='text'/>
                    </label><br></br><br></br>
                    <button>Add to Order</button>
            </form>
        </div>
    );
}

export default Form