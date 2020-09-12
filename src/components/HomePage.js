import React from "react";
import { useHistory } from "react-router-dom";
import image from "./Pizza.jpg";

export default function HomePage(props) {
    const history = useHistory();
    console.log("history", history);
    const navToPizzaForm = (e) => {
        //console.log('moving to pizza form');
        history.push('/pizza');
        //console.log('sent to pizza form');
    }
    return(
        <>
        <img alt="pizza image" id="homePage-image" src={image} />
        <h2>Your favorite food, delivered while coding</h2>
        <button className="homePage-button" onClick={navToPizzaForm}>Pizza?</button>
        </>
    )
}