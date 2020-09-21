import React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import "../App.css";

const NavBar = () => {
    const Wrapper = styled.div `
        display: flex;
        justify-content: space-between;
    `;
    const Title = styled.h1 `
        margin: 5%;
        font-family: 'Indie Flower', cursive;
        text-shadow: 2px 2px 8px grey;
    `;
    const Links = styled.div `
        display: flex;
        align-items: center;    `;
    return (
        <Wrapper>
            <Title>Lambda Eats</Title>
            <Links>
                <Link className="links" to="/">Home</Link>
                <Link className="links" to="/pizza">Order</Link>
            </Links>
        </Wrapper>
    )
};

export default  NavBar;