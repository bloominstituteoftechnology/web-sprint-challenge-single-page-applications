import React from 'react'
import Pizza from './Pizza.jpg'

const Home = () => {
    return (
        <div className="home">
           <img
                className="home-image"
                src={Pizza}
                alt='margreita pie'
                />
        </div>
    )
}

export default Home;
