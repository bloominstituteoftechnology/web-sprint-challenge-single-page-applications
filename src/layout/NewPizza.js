import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const NewPizzaStyled = styled.section`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-flow: column wrap;
    height: 100vh;
    width: 100%;

    form {
        display: flex;
        flex-flow: row wrap;
        width: 80%;
        min-width: 400px;
        max-width: 500px;
        margin: 30px 0;
        padding: 20px;
        border: 2px dashed #FF4500;
        border-radius: 20px;
    }
    form label {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        margin-bottom: 10px;
        font-size: 1rem;
        font-weight: bold
    }
    form label > input[type=text], select {
        width: 60%;
        padding: 5px;
        font-size: 1rem;
    }
    form label div {
        width: 60%;
    }
    form label div label {
        margin-bottom: 5px;
    }
    form button {
        background-color: #FF4500;
        border-radius: 8px;
        color: #FFF;
        font-size: 1rem;
        font-weight: bold;
        padding: 10px;
        border: none;
        width: 100%;
    }
`;

const LinkStyled = styled(Link)`
    color: #FF4500;
    padding: 5px;
`;

const NewPizza = ({ change, values, submit }) => {

    const handleInputChange = (event) => {
        const {name, value, type, checked} = event.target
        let realValue = type === 'checkbox' ? checked : value
        change(name, realValue)
    }
    
    const handleSubmit = (event) => {
        event.preventDefault()
        submit()
    }

    return (
        <NewPizzaStyled>
            <h1>Hi there! 👋</h1>
            <h2>Let's create an awesome 🍕</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Name
                    <input type="text" name="name" value={values.name} placeholder="Extra Yummy Yummy!" onChange={handleInputChange} />
                </label>
                <label>
                    Size
                    <select name="size" value={values.size} onChange={handleInputChange}>
                        <option>-- Select size --</option>
                        <option value='Small'>Small (🍕 x 4)</option>
                        <option value='Medium'>Medium (🍕 x 6)</option>
                        <option value='Large'>Large (🍕 x 8)</option>
                        <option value='XL'>XL (🍕 x 10)</option>
                    </select>
                </label>
                <label>
                    Flavors
                    <div>
                        <label>
                            <input type="checkbox" name="pepperoni" checked={values.pepperoni} onChange={handleInputChange} /> Pepperoni
                        </label>
                        <label>
                            <input type="checkbox" name="hawaiian" checked={values.hawaiian} onChange={handleInputChange} /> Hawaiian 
                        </label>
                        <label>
                            <input type="checkbox" name="bbq" checked={values.bbq} onChange={handleInputChange} /> BBQ 
                        </label>
                        <label>
                            <input type="checkbox" name="margherita" checked={values.margherita} onChange={handleInputChange} /> Margherita
                        </label>
                    </div>
                </label>
                <label>
                    Extra instructions
                    <input type="text" name="note" value={values.note} placeholder="Please add some more Ranch :)" onChange={handleInputChange} />
                </label>
                <button type="submit">Get delicious 🤤</button>
            </form>
            <LinkStyled to="/">Go back</LinkStyled>
        </NewPizzaStyled>
    )
}

export default NewPizza
