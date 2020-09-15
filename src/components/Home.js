import React from "react";
import {Link} from "react-router-dom";

// import "../styles/home.css";

export default function Home(props){
    return (
        <div className="home">
            <section className="pizza-delivery">
                <h1>Your Favorite Food Delivered While Coding</h1>
                <Link to="/pizza">
                    <button>Pizza?</button>
                </Link>
            </section>
        </div>
    )
}