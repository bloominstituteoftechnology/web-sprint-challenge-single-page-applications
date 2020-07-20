import React from "react";
import "./Homepage.css";
import Pizza from "./Assets/Pizza";



function Homepage() {
    return (
        
        <div className="homepage">
            <div className="navbar">
                <h1>Crackin The Code Pizza</h1>
                <nav>
                    <a href="Home">Pizza Menu</a>
                    <a href="Help">Help</a>
                    <img src={Pizza}   />
                </nav>

            </div>
            <div className="pizzainfo">
                <h2>Your Favorite Fast Food Delivery While Coding</h2>
                <p>Early Morning or Late Night Eats For Coders</p>
                
            </div>
        </div>

       
        
           
       
        
        

    )
}


export default Homepage;