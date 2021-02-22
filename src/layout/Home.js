import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const HomeStyled = styled.section`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
    width: 100%;
    background-image: url('https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
`;

const Home = () => {
    return (
        <HomeStyled>
            <Link>Aloha</Link>
        </HomeStyled>
    )
}

export default Home
