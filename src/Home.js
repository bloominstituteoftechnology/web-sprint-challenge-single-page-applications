import React from 'react'
import Pizza from './Pizza.jpg'

const Home = () => {
    return (
        <div className="home">
           <img
                style={{width: "70%", marginLeft: "15%"}}
                className="home-image"
                src={Pizza}
                alt='margreita pie'
                />
                <h1 style={{textAlign: "center", color: "#d62828", backgroundColor: "#fcbf49", textShadow: "2px 2px black"}}>For An Experience That Is Out Of This World Call Lambda Eats</h1>
        </div>
    )
}

export default Home;
