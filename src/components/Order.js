import React from 'react'
import styled from 'styled-components'
import pizza from './Assets/Pizza.jpg'

const OrderPage = styled.div``

const PizzaImg = styled.img`
    height: 50vh;
    width: 100%;
    background-image: url(${pizza});
    object-fit: cover;
`

const OrderForm = styled.div`
    width: 70%;
    margin: auto;
    margin-bottom: 5rem;
`

const CompanyName = styled.h1``

const OptionCommands = styled.div`
    background-color:#CC8E5B;
    padding: 1rem;
`
const OptionCommand = styled.h2`
    margin: 0;
`
const RequireReminder = styled.p`
    margin: .25rem 0;
`

const PizzaSize = styled.select`
    margin: 1rem 0;
    font-size: 1.2rem;
`

const SaucePick = styled.div`
    padding: 1rem 0;
`

const SauceBoss = styled.input`
    margin: .5rem;
`

const TopItOff= styled.div`
    display:flex;
    flex-wrap:wrap;
`

const Topping = styled.div`
    width: 45%;
    padding-left: 1rem;
`

const Toppings = styled.input`
    margin: .5rem;
    /* width: 45%; */
`

const TopLabel = styled.label`
    width: 35%;
`

const Instructions = styled.input`
    height: 1.5rem;
    width: 90%;
    margin: 1rem 5%;
`

const Final = styled.div`
    display: flex;
    justify-content:space-between;
    border-top: 2px solid black;
    padding-top: 1rem;
`

const NumberOfPizzas = styled.input`
    font-size: 3rem;
    width: 15%;
    text-align: center;
`

const AddToOrder = styled.button`
    font-size: 3rem;
    width: 80%;
    text-align: center;
`

const Order = () => {
    return (
        <OrderPage>

            <PizzaImg src={pizza} alt="Eat the pizza"/>

            <OrderForm>

                <CompanyName>Build Your Own Pizza</CompanyName>

                <OptionCommands>
                    <OptionCommand>Pizza Size</OptionCommand>
                    <RequireReminder><em>Required</em></RequireReminder>
                </OptionCommands>

                <PizzaSize
                    name="pizza size"
                    type="dropdown"
                    // onChange={onChange}
                >
                    
                    <option value="Single Serving">
                        Single Serving
                    </option>

                    <option value="Small">
                        Small
                    </option>

                    <option value="Medium">
                        Medium
                    </option>

                    <option value="Large">
                        Large
                    </option>

                    <option value="Extra Large">
                        Extra Large
                    </option>

                    <option value="I Don't Want To Order Food For A WEEK">
                        I Don't Want To Order Food For A WEEK
                    </option>

                </PizzaSize>

                <OptionCommands>
                    <OptionCommand>Pick a Saucy Boy</OptionCommand>
                    <RequireReminder><em>Required</em></RequireReminder>
                </OptionCommands>

                <SaucePick>

                    <SauceBoss
                        type="radio"
                        id="Zesty Tomato"
                        name="sauce"
                        value="Zesty Tomato"
                    />
                    <label for="Zesty Tomato">Zesty Tomato</label>

                    <br/>
                    
                    <SauceBoss
                        type="radio"
                        id="Super Garlic"
                        name="sauce"
                        value="Super Garlic"
                    />
                    <label for="Super Garlic">Super Garlic</label>
                    
                    <br/>
                    
                    <SauceBoss
                        type="radio"
                        id="Slappin' BBQ"
                        name="sauce"
                        value="Slappin' BBQ"
                    />
                    <label for="Slappin' BBQ">Slappin' BBQ</label>
                    
                    <br/>
                    
                    <SauceBoss
                        type="radio"
                        id="Snow White Spinach Alfredo"
                        name="sauce"
                        value="Snow White Spinach Alfredo"
                    />
                    <label for="Snow White Spinach Alfredo">Snow White Spinach Alfredo</label>
                
                </SaucePick>

                <OptionCommands>
                    <OptionCommand>Top It Off</OptionCommand>
                    <RequireReminder><em>Select Up To 10</em></RequireReminder>
                </OptionCommands>

                <TopItOff>
                    <Topping>
                    <Toppings
                        name="Pepperoni"
                        type="checkbox"
                        // onChange={onChange}
                        // checked={values.pepperoni}
                    />

                    <TopLabel for="Pepperoni">Pepperoni</TopLabel>

                    <br/>
                    </Topping>
                    <Topping>
                    <Toppings
                        name="Sausage"
                        type="checkbox"
                        // onChange={onChange}
                        // checked={values.sausage}
                    />

                    <TopLabel for="Sausage">Sausage</TopLabel>

                    <br/>
                    </Topping>
                    <Topping>
                    <Toppings
                        name="Canadian Bacon"
                        type="checkbox"
                        // onChange={onChange}
                        // checked={values.canadian-bacon}
                    />

                    <TopLabel for="Canadian Bacon">Canadian Bacon</TopLabel>

                    <br/>
                    </Topping>
                    <Topping>
                    <Toppings
                        name="Spicy Italian Sausage"
                        type="checkbox"
                        // onChange={onChange}
                        // checked={values.spicy-italian-sausage}
                    />

                    <TopLabel for="Spicy Italian Sausage">Spicy Italian Sausage</TopLabel>

                    <br/>
                    </Topping>
                    <Topping>
                    <Toppings
                        name="Grilled Chicken"
                        type="checkbox"
                        // onChange={onChange}
                        // checked={values.grilled-chicken}
                    />

                    <TopLabel for="Grilled Chicken">Grilled Chicken</TopLabel>

                    <br/>
                    </Topping>
                    <Topping>
                    <Toppings
                        name="Onions"
                        type="checkbox"
                        // onChange={onChange}
                        // checked={values.onions}
                    />

                    <TopLabel for="Onions">Onions</TopLabel>

                    <br/>
                    </Topping>
                    <Topping>
                    <Toppings
                        name="Green Pepper"
                        type="checkbox"
                        // onChange={onChange}
                        // checked={values.green-pepper}
                    />

                    <TopLabel for="Green Pepper">Green Pepper</TopLabel>

                    <br/>
                    </Topping>
                    <Topping>
                    <Toppings
                        name="Diced Tomatoes"
                        type="checkbox"
                        // onChange={onChange}
                        // checked={values.diced-tomatoes}
                    />

                    <TopLabel for="Diced Tomatoes">Diced Tomatoes</TopLabel>

                    <br/>
                    </Topping>
                    <Topping>
                    <Toppings
                        name="Black Olives"
                        type="checkbox"
                        // onChange={onChange}
                        // checked={values.black-olives}
                    />

                    <TopLabel for="Black Olives">Black Olives</TopLabel>

                    <br/>
                    </Topping>
                    <Topping>
                    <Toppings
                        name="Roasted Garlic"
                        type="checkbox"
                        // onChange={onChange}
                        // checked={values.roasted-garlic}
                    />

                    <TopLabel for="Roasted Garlic">Roasted Garlic</TopLabel>

                    <br/>
                    </Topping>
                    <Topping>
                    <Toppings
                        name="Artichoke Hearts"
                        type="checkbox"
                        // onChange={onChange}
                        // checked={values.artichoke-hearts}
                    />

                    <TopLabel for="Artichoke Hearts">Artichoke Hearts</TopLabel>

                    <br/>
                    </Topping>
                    <Topping>
                    <Toppings
                        name="Three Cheese"
                        type="checkbox"
                        // onChange={onChange}
                        // checked={values.three-cheese}
                    />

                    <TopLabel for="Three Cheese">Three Cheese</TopLabel>

                    <br/>
                    </Topping>
                    <Topping>
                    <Toppings
                        name="Pineapple"
                        type="checkbox"
                        // onChange={onChange}
                        // checked={values.pineapple}
                    />

                    <TopLabel for="Pineapple">Pineapple</TopLabel>

                    <br/>
                    </Topping>
                    <Topping>
                    <Toppings
                        name="Extra Cheese"
                        type="checkbox"
                        // onChange={onChange}
                        // checked={values.extra-cheese}
                    />

                    <TopLabel for="Extra Cheese">Extra Cheese</TopLabel>
                    </Topping>
                </TopItOff>

                <OptionCommands>
                    <OptionCommand>Substitutions</OptionCommand>
                    <RequireReminder><em>Choose Up To 1</em></RequireReminder>
                </OptionCommands>

                <Toppings
                    name="Gluten Free Crust"
                    type="checkbox"
                    // onChange={onChange}
                    // checked={values.gluten-free-crust}
                />

                <label for="Gluten Free Crust">Gluten Free Crust (+ $100)</label>

                <OptionCommands>
                    <OptionCommand>Special Instructions</OptionCommand>
                </OptionCommands>

                <Instructions
                    name="Special Instructions"
                    type="text"
                    placeholder="Anything else you'd like to add?"
                />

                <Final>
                    
                <NumberOfPizzas
                    name="number of pizzas"
                    type="number"
                    min="1"
                    max="50"
                />

                <AddToOrder>Add to Order</AddToOrder>
                </Final>

            </OrderForm>
        </OrderPage>
    )
}

export default Order