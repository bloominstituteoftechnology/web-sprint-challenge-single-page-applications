import React from 'react'
import { Link } from 'react-router-dom'

function Homepage() {
    return (
        <div>

            <section className="hero">
                
                <div className="hero-content">
                    <h2>Your Favorite Food, Deliverd while coding</h2>
                    <Link to="/pizzaOrder">Pizza?</Link>
                </div>

            </section>

            <section>

                <h2>Food Deliver to hell</h2>
                <div className="article-Container">
                    <article>
                        <img src="#" alt="Mcdonalds" />
                        <h6>McDonalds</h6>
                        <p><span>$</span> - <span>American</span> - <span>Fast Food</span> - <span>Burgers</span></p>
                    </article>
                    <article>
                        <img src="#" alt="Mcdonalds" />
                        <h6>McDonalds</h6>
                        <p><span>$</span> - <span>American</span> - <span>Fast Food</span> - <span>Burgers</span></p>
                    </article>
                    <article>
                        <img src="#" alt="Mcdonalds" />
                        <h6>McDonalds</h6>
                        <p><span>$</span> - <span>American</span> - <span>Fast Food</span> - <span>Burgers</span></p>
                    </article>
                </div>
                <div className="article-Container">
                    <article>
                        <img src="#" alt="Mcdonalds" />
                        <h6>McDonalds</h6>
                        <p><span>$</span> - <span>American</span> - <span>Fast Food</span> - <span>Burgers</span></p>
                    </article>
                    <article>
                        <img src="#" alt="Mcdonalds" />
                        <h6>McDonalds</h6>
                        <p><span>$</span> - <span>American</span> - <span>Fast Food</span> - <span>Burgers</span></p>
                    </article>
                    <article>
                        <img src="#" alt="Mcdonalds" />
                        <h6>McDonalds</h6>
                        <p><span>$</span> - <span>American</span> - <span>Fast Food</span> - <span>Burgers</span></p>
                    </article>
                </div>

            </section>



        </div>
    )
}

export default Homepage
