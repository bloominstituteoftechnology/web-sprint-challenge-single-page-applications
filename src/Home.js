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
        <div className="home-wrapper" style={{display: "flex", flexFlow: "column", fontFamily: "'Pacifico', cursive", position: "relative", textAlign: "center"}}>
            <img
                style={{marginLeft: "5%", marginRight: "5%", width: "90%"}}
                className="home-image"
                src={Pizza}
                alt="margreita pie"
               
            />
            <div className="centered" style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", backgroundColor: "#e63946"}}>
                <h1>Fresh Hot Pizza, Speedy Service! Order Now!</h1>
            </div>
           
        </div>
    )
}

export default Home;