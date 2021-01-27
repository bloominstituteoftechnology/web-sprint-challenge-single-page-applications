import React from 'react'
import starbucks from '../assets/Starbucks.jpg'
import mcdonalds from '../assets/Mcdonalds.jpg'
import panda from '../assets/panda-express.jpg'
import jj from '../assets/JJ.jpg'
import ziggis from '../assets/ziggis.jpg'
import scooters from '../assets/scooters.jpg'

export default function Body() {



    return (
        <>
        <div className="body">
        <body>
            <h2>Popular Near You</h2>
            <div className="popular-near-you">
                <div className="item">
                <img src={mcdonalds} alt="Starbucks"></img>
                <h3>Mcdonalds</h3>
                <p class="price">$3.49 Delivery Fee • 15–25 Min • $</p>
                </div>
                <div className="item">
                <img src={panda}></img>
                <h3>Panda Express </h3>
                <p class="price">$3.49 Delivery Fee • 15–25 Min • $</p>
                </div>
                <div className="item">
                <img src={jj}></img>
                <h3>Jimmy Johns</h3>
                <p class="price">$3.49 Delivery Fee • 15–25 Min • $</p>
                </div>
            </div>
            <h2>Coffee Shops</h2>
            <div className="popular-near-you">
                <div className="item">
                <img src={starbucks} alt="Starbucks"></img>
                <h3>Starbucks</h3>
                <p class="price">$3.49 Delivery Fee • 15–25 Min • $</p>
                </div>
                <div className="item">
                <img src={ziggis}></img>
                <h3>Ziggi's Coffee </h3>
                <p class="price">$3.49 Delivery Fee • 15–25 Min • $</p>
                </div>
                <div className="item">
                <img src={scooters}></img>
                <h3>Scooters Coffee</h3>
                <p class="price">$3.49 Delivery Fee • 15–25 Min • $</p>
                </div>
            </div>
        </body>
        </div>
        </>
    )
}
