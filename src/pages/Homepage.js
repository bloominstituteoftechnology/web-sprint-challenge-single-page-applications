import React from 'react'
import { Link } from 'react-router-dom'
import './Homepage.css'

function Homepage() {

    const places = [
        {
            image: 'https://source.unsplash.com/500x300/?salad',
            title: 'Papa Mina',
            subtitle: ['$', 'Chinese', 'Slow Food', 'Salad'],
            time: '20-30 Min',
            fee: '$5.99 Deliver Fee'
        },
        {
            image: 'https://source.unsplash.com/500x300/?sushi',
            title: 'FireBoi',
            subtitle: ['$', 'Japanese', 'Healthy', 'Sushi'],
            time: '20-30 Min',
            fee: '$5.99 Deliver Fee'
        },
        {
            image: 'https://source.unsplash.com/500x300/?soup',
            title: 'Startly Bean',
            subtitle: ['$', 'Ukrainain', 'Spicy', 'Soup'],
            time: '20-30 Min',
            fee: '$5.99 Deliver Fee'
        },
        {
            image: 'https://source.unsplash.com/500x300/?pizza',
            title: 'Frencho',
            subtitle: ['$', 'Polish', 'Good Food', 'Pizza'],
            time: '20-30 Min',
            fee: '$5.99 Deliver Fee'
        },
        {
            image: 'https://source.unsplash.com/500x300/?burger',
            title: 'Derip',
            subtitle: ['$', 'American', 'Fast Food', 'Burgers'],
            time: '20-30 Min',
            fee: '$5.99 Deliver Fee'
        },
        {
            image: 'https://source.unsplash.com/500x300/?burger',
            title: 'Kilo',
            subtitle: ['$', 'American', 'Fast Food', 'Burgers'],
            time: '20-30 Min',
            fee: '$5.99 Deliver Fee'
        },
    ]

    return (
        <main className="mainSection">

            <section className="hero">
                
                <div className="hero-content">
                    <h2>Your Favorite Food, Deliverd while coding</h2>
                    <Link to="/pizza">Pizza?</Link>
                </div>

            </section>

            <section className="food-section">

                <h2>Food Deliver to hell</h2>
                <div className="article-Container">
                    {
                        places.map(place => {
                            return( 
                                <article>
                                    <img src={place.image} alt={place.title} />
                                    <h3>{place.title}</h3>
                                    <p className="features">
                                        {
                                            place.subtitle.map(item => <span> {item}{place.subtitle[3] === item ? '' : ' -'} </span>)
                                        }
                                    </p>
                                    <div className="info">
                                        <p>{place.time}</p>
                                        <p>{place.fee}</p>
                                    </div>
                                </article>
                            )
                        })
                    }
                </div>

            </section>



        </main>
    )
}

export default Homepage
