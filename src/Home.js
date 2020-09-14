import React from "react"
import Pizza from "./Pizza.jpg"
import { useHistory } from "react-router-dom";

function Home() {
    const history = useHistory();

    const navToOrder = (e) => {
        console.log("going to order the pizza")
        setTimeout(() => {
            history.push()
        }, 1000);
    };

    return (
        <div className="home-wrapper">
            <img
                className="home-image"
                src={Pizza}
                alt="margreita pie"
            />
            <button className="md-button order-button" onclick={navToOrder}>
                Click To Order Now!
            </button>
        </div>
    )
}

export default Home;