import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
 

const NavDiv = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-between;
    font-family: sans-serif;
    text-align: center;
    border-bottom: solid 5px red;
    margin: 0 auto;
    `;

const NavHeader = styled.h1`
    align-self: center;
    color: red;
    border: solid 2px red;
    padding: 10px 20px;
`;

const NavLinks = styled.div`
    align-self: center;
    display: flex;
    font-weight: bold;
    font-family: sans-serif;
    `;

const ButtonLinks = styled(Link)`
    border: solid 3px white;
    background-color: red;
    color: white;
    text-decoration: none;
    margin-top: 10px;
    margin-bottom: 10px;
    margin-right: 0px;
    margin-left: 0px;
    padding: 10px 30px;
`;

const HeroDiv = styled.div`
    background-color: blue;
    
`;


export default function App() {
    return ( 
       <div>
            <NavDiv>
                <NavHeader>Lambda Eats</NavHeader>
                <NavLinks>
                <ButtonLinks to="/">Home</ButtonLinks>
                <ButtonLinks to="help">Help</ButtonLinks>
                </NavLinks>
            </NavDiv>

            <HeroDiv></HeroDiv>
        </div>

     
    );
}