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
                style={{marginLeft: "5%", marginRight: "5%", width: "90%", boxShadow: "5px 10px 10px #888888"}}
                className="home-image"
                src={Pizza}
                alt="margreita pie"
               
            />
            <div className="centered" style={{ position: "absolute", top: "70%", left: "49%", transform: "translate(-50%, -50%)", backgroundColor: "#ffbe0b", padding: "1%", textShadow: "1px 1px 10px white", boxShadow: "5px 5px 10px black"}}>
                <h2>Fresh Hot Pizza, Speedy Service! Order Now!</h2>
            </div>
           
        </div>
    )
}

export default Home;