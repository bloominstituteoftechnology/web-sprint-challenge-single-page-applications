import React from 'react'
import styled from 'styled-components'
import { useHistory } from 'react-router-dom'

const Wrapper = styled.div`
    background: url('https://images.unsplash.com/photo-1571407970349-bc81e7e96d47?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1525&q=80');
    object-fit: cover;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const Header = styled.h1`
    font-size: 4rem;
    color: orange;
`

const Description = styled.p`
    font-size: 2rem;
    color: white;
    margin-top: 5rem;
`

const PizzaButton = styled.button`
    margin-top: 8rem;
    padding: 2rem 3rem;
    font-size: 1rem;
    background: darkred;
    border-radius: .375rem;
    box-shadow: 0 5px 10px 0 rgba(0, 0, 0, .2);
    transition: .25s ease-in-out;

    &:hover {
        cursor: pointer;
        background: red;
    }
`

const Home = () => {
    const history = useHistory()
    const pizzaClick = () => {
        history.push('/pizza')
    }

    return (
        <Wrapper>
            <Header>Papa Lambda's Pizza</Header>
            <Description>Order some dank pizza while you code. Pay nothing upfront.</Description>
            <PizzaButton onClick={pizzaClick}>Pizza!</PizzaButton>
        </Wrapper>
    )
}

export default Home