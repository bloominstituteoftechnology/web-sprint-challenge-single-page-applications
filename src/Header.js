import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import styled from 'styled-components'

function Header() {
    return (
        <StyledHeader>
            <h1>Lambda Eats</h1>
            <span>Don't Stop Coding... Let us get the pizza to you!</span>
        </StyledHeader>    
    )
}

const StyledHeader = styled.header `
h1 {
    font-size: 3em;
    padding: 25px; 
    margin: 0 auto;
    font-weight: bolder;
    
}

span{
    padding: 25px;
    margin: 0 auto;
    font-style: italic;
    text-shadow: 2px 2px 2px whitesmoke;
}

.links{
    padding-right: 25px;
    display: flex;
    justify-content: flex-end;
    color: greenyellow;
    font-size: 1.5em;
} &:hover {
    cursor: pointer;
}

/* .buttons > Link {
    border-radius: 15px;
    padding: 15px;
    width: 150px;
    background-color:greenyellow;
    color: greenyellow;
    text-align: center;
    box-shadow: 5px 5px 5px whitesmoke;
    &:hover{
        background-color: slategrey;
        color: greenyellow;
        cursor: pointer;
    }
    &:focus {
        border: gray;
        outline: none;
        }
    &:active {
        border: gray;
        outline: none;
    }
} */
`

export default Header