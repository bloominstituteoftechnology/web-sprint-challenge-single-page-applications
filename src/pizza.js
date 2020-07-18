import React,{useState} from "react";

function Form(){
    // const meats=['pepperoni', 'sausage', 'ground beef', 'bacon', 'ham', 'grilled chicken'];
    // const veggies=['green pepper', 'onion', 'spinach', 'pineapple', 'olives', 'red peppers', 'tomatoes','jalepenos'];
    // const cheese=[]
    const [formState,setFormState]=useState([])
    return(
        <div>
            <form>
                <label>Choice of Size
                    <select>
                        <option value='Select'>Select</option>
                        <option value='Personal'>Personal</option>
                        <option value='Small'>Small</option>
                        <option value='Medium'>Medium</option>
                        <option value='Large'>Large</option>
                        <option value='Family'>Family</option>
                    </select>
                </label>
           
                <h3>Meats</h3>
                    <label>pepperoni
                        <input 
                            type="checkbox"
                            name="pepperoni"
                            id="pepperoniInput"
                                />
                    </label><br></br><br></br>
                    <label>sausage
                        <input 
                        type="checkbox"
                        name="sausage"
                        id="sausageInput"
                        />
                    </label><br></br><br></br>
                    <label>ground beef
                        <input 
                        type="checkbox"
                        name="ground beef"
                        id="groundBeefInput"
                        />
                    </label><br></br><br></br>
                    {/* <label>bacon
                        <input type="checkbox"/>
                    </label><br></br><br></br>
                    <label>ham
                        <input type="checkbox"/>
                    </label><br></br><br></br>
                    <label>grilled chicken
                        <input type="checkbox"/>
                    </label><br></br><br></br> */}

                    <h3>Veggie's</h3>
                        <label>green peppers
                            <input 
                            type='checkbox'
                            name="gpeps"
                            id="gpepsInput"
                            />
                        </label><br></br><br></br>
                        <label>onions
                            <input 
                            type='checkbox'
                            name="onions"
                            id="onionsInput"
                            />
                        </label><br></br><br></br>
                        <label>spinach
                            <input 
                            type='checkbox'
                            name="spinach"
                            id="spinachInput"
                            />
                        </label><br></br><br></br>
                        {/* <label>pineapple
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
                        </label><br></br><br></br> */}

                    <h3>Cheese</h3>
                        <label>mozzarela
                            <input 
                            type='checkbox'
                            name="mozz"
                            id="mozzInput"
                            />
                        </label><br></br><br></br>

                    <h3>Sauce</h3>
                        <label>original
                            <input 
                            type='checkbox'
                            name="orig"
                            id="origInput"
                            />
                        </label><br></br><br></br>

                    <h3>crust</h3>
                        <label>butter cheese
                            <input 
                            type='checkbox'
                            name="buttcheese"
                            id="buttCheeseInput"
                            />
                        </label><br></br><br></br>

                    <h3></h3>
                        <label>special instructions
                            <input 
                            type='text'
                            name="special"
                            id="specialInput"
                            />
                        </label><br></br><br></br>

                    <button>Add to Cart</button>
            </form>
        </div>
    );
}

export default Form