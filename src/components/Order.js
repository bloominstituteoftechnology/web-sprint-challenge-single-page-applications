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

            </OrderForm>

        </OrderPage>
    )
}

export default Order