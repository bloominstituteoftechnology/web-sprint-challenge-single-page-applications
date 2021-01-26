import React from "react";
import { Button, Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, } from 'reactstrap';
import './home.css'

export default function Home() {

    return (
        <div className="home-container">
            <div className=" main-title-container">
                <h1> Your Favorite Food, Delivered While Coding </h1>
                <img className="header-img"
                    src="https://media.istockphoto.com/photos/tasty-pepperoni-pizza-and-cooking-ingredients-tomatoes-basil-on-black-picture-id1083487948"
                ></img>
                <Button color="primary" size="lg" className= "header-btn">Got Pizza?</Button>
            </div>

            <div className="first-row-container">
                <h2 className="header-row-title"> Food Delivery in Gotham City</h2>
               <div className="first-row-layout">
                <Card className="first-row-card">
                    <CardImg className="header-cell-img"
                        src="https://media.istockphoto.com/photos/tasty-pepperoni-pizza-and-cooking-ingredients-tomatoes-basil-on-black-picture-id1083487948"
                    ></CardImg>
                    <CardTitle>McDonalds</CardTitle>
                    <CardText>$ - American- Fast Food - Burgers</CardText>
                    <div>
                        <p>20-30 mins</p>
                        <p>$5.99 delivery fee</p>
                    </div>
                </Card>

                <Card className="first-row-card">
                    <CardImg className="header-cell-img"
                        src="https://media.istockphoto.com/photos/tasty-pepperoni-pizza-and-cooking-ingredients-tomatoes-basil-on-black-picture-id1083487948"
                    ></CardImg>
                    <CardTitle>Sweetgreen</CardTitle>
                    <CardText>$ - Healthy - Salad</CardText>
                    <div>
                        <p>30 - 45 mins</p>
                        <p>$4.99 delivery fee</p>
                    </div>
                </Card>

                <Card className="first-row-card">
                    <CardImg className="header-cell-img"
                        src="https://media.istockphoto.com/photos/tasty-pepperoni-pizza-and-cooking-ingredients-tomatoes-basil-on-black-picture-id1083487948"
                    ></CardImg>
                    <CardTitle>StarBucks</CardTitle>
                    <CardText>$ - Cafe- Coffe and Tea- Breakfast and brunch </CardText>
                    <div>
                        <p>20-30 mins</p>
                        <p>$5.99 delivery fee</p>
                    </div>
                </Card>
              </div> 
            </div>

            <hr/>

            <div className=" second-row-container">
            <div className="first-row-layout">
                <Card className="first-row-card">
                    <CardImg className="header-cell-img"
                        src="https://media.istockphoto.com/photos/tasty-pepperoni-pizza-and-cooking-ingredients-tomatoes-basil-on-black-picture-id1083487948"
                    ></CardImg>
                    <CardTitle>McDonalds</CardTitle>
                    <CardText>$ - American- Fast Food - Burgers</CardText>
                    <div>
                        <p>20-30 mins</p>
                        <p>$5.99 delivery fee</p>
                    </div>
                </Card>

                <Card className="first-row-card">
                    <CardImg className="header-cell-img"
                        src="https://media.istockphoto.com/photos/tasty-pepperoni-pizza-and-cooking-ingredients-tomatoes-basil-on-black-picture-id1083487948"
                    ></CardImg>
                    <CardTitle>Sweetgreen</CardTitle>
                    <CardText>$ - Healthy - Salad</CardText>
                    <div>
                        <p>30 - 45 mins</p>
                        <p>$4.99 delivery fee</p>
                    </div>
                </Card>

                <Card className="first-row-card">
                    <CardImg className="header-cell-img"
                        src="https://media.istockphoto.com/photos/tasty-pepperoni-pizza-and-cooking-ingredients-tomatoes-basil-on-black-picture-id1083487948"
                    ></CardImg>
                    <CardTitle>StarBucks</CardTitle>
                    <CardText>$ - Cafe- Coffe and Tea- Breakfast and brunch </CardText>
                    <div>
                        <p>20-30 mins</p>
                        <p>$5.99 delivery fee</p>
                    </div>
                </Card>
              </div> 
                </div>
        </div>
    )
}