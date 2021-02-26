import React from 'react'
import styled from 'styled-components'
import {useHistory} from 'react-router-dom'

import pizza from './Assets/Pizza.jpg'

const Container = styled.div``

const PizzaImg = styled.div`
    height: 50vh;
    width: 100%;
    background-image: url(${pizza});
    object-fit: cover;
    position: relative;
`

const EatPizza =styled.button`
    align-items:center;
    position: absolute;
    top: 75%;
    right: 50%;
    -ms-transform: translateY(-50%);
    transform: translateY(-50%);
    font-size: 1.5rem;
    padding: 1%1rem;
    background-color: #E9E7E7;

    &:hover{
        color:red;
    }
`

const LesserFoods = styled.div``

const Home = () => {

    const history = useHistory()

    const eatPizza = () => {
        history.push('/pizza-planet')
    }

    return (
        <Container>
            
            <PizzaImg src={pizza} alt="Eat the pizza">
                <EatPizza onClick={eatPizza}>Pizza?</EatPizza>
            </PizzaImg>

            <LesserFoods>
                {/* Will add to bottom if I have time */}
            </LesserFoods>
        </Container>
    )
}

export default Home