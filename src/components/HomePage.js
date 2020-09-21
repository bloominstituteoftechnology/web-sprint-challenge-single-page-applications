import React from "react";
import { useHistory } from "react-router-dom";
import image from "../image/Pizza.jpg";
import styled from "styled-components";

const HomePage = (props) => {
    const history = useHistory();
    console.log("history", history);
    const navToPizzaForm = (e) => {
        history.push('/pizza');
    }
    const Wrapper = styled.div `
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 1rem;
    `;
    const H2 = styled.h2 `
        color: white;
    `;
    const Button = styled.button `
            &:hover{
                text-decoration: none;
                color: black;
                padding: 5px 20px;
                border: 1px solid dodgerblue;
                background-color: grey;
                border-radius: 5px;
                margin: 1rem;
                font-weight: bold;
            }
        padding: 5px 20px;
        border: 1px solid dodgerblue;
        background-color: black;
        border-radius: 5px;
        color: white;
        margin: 1rem;
        font-weight: bold;
        outline: none;
    `;
    const Label = styled.label `
            color: dodgerblue;
            font-family: 'Indie Flower', cursive;
            text-shadow: 2px 2px 8px grey;
    `;
    return(
        <Wrapper>
            <img alt="Lambda Eats" id="mainImage" src={image} />
            <H2>
                <Label>Lambda Eats</Label>, so you can code while you <Label>eats</Label>.
            </H2>
            <Button onClick={navToPizzaForm}>Order Here</Button>
        </Wrapper>
    )
}

export default HomePage;