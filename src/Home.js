import React from 'react'
import { useHistory } from 'react-router-dom'

export default function Home() {
    
    const history = useHistory();
    const routeToPizza = () => {
        history.push("/PizzaForm");
    }
    return (
        <div className= "home-page">
            <img  className="pizza-img" src="./Pizza.jpg" alt="Image of a Delicous Pizza" />
            <button onClick={routeToPizza}>Order Here!</button>
            
        </div>
    )
}
