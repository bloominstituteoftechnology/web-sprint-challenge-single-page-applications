import React from 'react';
import { useHistory } from 'react-router-dom';

export default function Home() {

    const history = useHistory()

    const routeToPizzaForm = () => {
        console.log(history)
        history.push('/pizza-form')
    }

    return (
            <div className ='home-image-container'>
                <img className ='home-image' src='Assets/Pizza.jpg' alt='pizza'/>
                <h2>Your Favorite Food Delivered While Coding</h2>
                <button onClick={routeToPizzaForm}
                    className= 'pizza-button'>Order Pizza</button>
            </div>
    )
}
