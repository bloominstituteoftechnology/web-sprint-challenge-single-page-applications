import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardDeck } from 'react-bootstrap';


const Home = () => {
    return (
        <div className="homePage">
            
            <div className='header-one'>
                <p>Lambda Eats</p>
            </div>
            <div className = 'top-section'>
                <h2>Your Favorite Food Delivered</h2>
                <Link to="/pizza"><button>Pizza</button></Link>
            </div>

            <div className='bottom-section'>
                <h2> Food Delivery in Gotham City</h2>

           
                <CardDeck>
                    <Card style= {{ width:'18rem'}}>
                        {/* <Card.Img src="mcdonalds.png" alt="mcdonalds" /> */}
                        <Card.Body>
                            <Card.Title>McDonald's</Card.Title>
                            <Card.Text>
                                $--American--Fast Food
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <small className="text-muted">30 min. Delivery $5.00</small>
                        </Card.Footer>
                    </Card>

                    <Card style= {{ width:'18rem'}}>
                        {/* <Card.Img src="sweetgreen.png/100px160" alt="sweetgreen" /> */}
                        <Card.Body>
                            <Card.Title>Sweet Green</Card.Title>
                            <Card.Text>
                                $$--Healthy
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <small className="text-muted">45 min. Delivery $3.00</small>
                        </Card.Footer>
                    </Card> 

                    <Card style= {{ width:'18rem'}}>
                    {/* <Card.Img src="starbucks.png/100px160" alt="starbucks" /> */}
                        <Card.Body>
                            <Card.Title>Starbucks</Card.Title>
                            <Card.Text>
                                $--Cafe--Coffee-Breakfast--Lunch
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <small className="text-muted">20 min. Delivery $5.00</small>
                        </Card.Footer>
                    </Card>
                </CardDeck>
            </div>
        </div>
    )
};

export default Home;