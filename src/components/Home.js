import React from 'react'
import { Link } from 'react-router-dom'
import './Home.css'


function Home() {
    return (
        <div className="home-container">
            <h1>Welcome to the Pizza Home Page!</h1>

            <Link to="/pizza">
                <button className="home-btn">Start your order here!</button>
            </Link>
        </div>
    )
}

export default Home
